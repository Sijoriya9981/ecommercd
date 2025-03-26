import UserModal from '../models/userModel.js'
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs'
import sendEmailFun from '../config/sendEmail.js';
import verificationEmail from '../utlis/VerificationEmail.js';
import { error } from 'console';
import generateAccessToken from '../utlis/GenerateAccessToken.js';
import generateRefreshToken from '../utlis/GenerateRefreshToken.js';

export async function registerUserController(req, res) {
    try {
        let user;
        const { name, email, password } = req.body;
        console.log(req.body, '-----')
        if (!name || !email || !password) {
            return res.status(500).json({
                message: "Provide email, name and password",
                error: true,
                success: false
            })
        }

        // check kar rhe h ki koi pehle se toh nhi h is emailid ke saath
        user = await UserModal.findOne({ email })
        if (user) {
            return res.status(500).json({
                message: "Already registered email",
                error: true,
                success: false
            })
        }

        // otp verification
        const verificationcode = Math.floor(100000 + Math.random() * 900000).toString();


        const salt = await bcryptjs.genSalt(10); // yeh par password ko encrypt bananne ke liye key gengerate kiya h
        const hashpassword = await bcryptjs.hash(password, salt);


        user = new UserModal({
            name: name,
            email: email,
            password: hashpassword,
            otp: verificationcode,
            otpExpires: Date.now() + 600000
        });

        await user.save();

        // send verification email to newuser
        await sendEmailFun(
            email,
            "Verify email  from Apki Dukaan",
            "",
            verificationEmail(name, verificationcode),

        )


        const token = jwt.sign({
            email: user.email,
            id: user.id
        },
            process.env.JSON_WEB_TOKEN_SECRET_KEY
        )

        return res.status(200).json({
            success: true,
            error: false,
            message: "User registered successfully! Please verify your email",
            token: token,
            data: { name, email }
        })
    }
    catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: false,
            success: false
        })
    }
}



export async function verifyemailusercontroller(req, res) {
    try {
        const { email, otp } = req.body;
        const user = await UserModal.findOne({ email })


        if (!user) {
            return res.status(400).json({
                message: "User Not Found",
                error: true,
                success: false
            })
        }


        const isotpvalid = user.otp === otp;
        const isnotExpired = user.otpExpires > Date.now();

        if (isotpvalid && isnotExpired) {
            user.verify_email = true;
            user.otp = null;
            user.otpExpires = null;

            await user.save();
            return res.status(200).json({
                success: true,
                error: false,
                message: 'Email Verified SUccessfully'
            })
        }
        else if (!isotpvalid) {
            return res.status(400).json({
                success: false, error: true, message: "Invalid OTP"
            })
        }
        else {
            return res.status(400).json({
                success: false, error: true, message: " OTP Expire"
            })
        }
    }
    catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: false,
            success: false
        })
    }
}


export async function loginUserController(req, res) {
    try {
        const { email, password } = req.body;

        let user = await UserModal.findOne({ email: email });

        if (!user) {
            res.status(404).json({
                success: false,
                error: true,
                message: 'User not registered',
            })
        }

        if (user.status !== 'Active') {
            res.status(400).json({
                message: "Contact to admin",
                error: true,
                success: false
            })
        }

        const checkPassword = await bcryptjs.compare(password, user.password);
        if (!checkPassword) {
            res.status(500).json({
                message: "Invalid Credentials",
                error: true,
                success: false
            })
        }

        const accessToken = await generateAccessToken(user._id)
        const refreshToken = await generateRefreshToken(user._id)

        const updateuserr = await UserModal.findByIdAndUpdate(user?._id, {
            last_date_login: new Date()
        })

        const cookieOption = {
            httpOnly: true,
            secure: true,
            sameSite: "None"
        }
        res.cookie('accessToken', accessToken, cookieOption);
        res.cookie('refreshToken', refreshToken, cookieOption)

        return res.status(200).json({
            message: 'Login Successfully',
            error: false,
            success: true,
            data: {
                accessToken,
                refreshToken
            }
        })
    }
    catch (error) {
        return res.status(500).json({
            message: error.message || error,
            success: false,
            error: true

        })
    }

}


export async function logoutuserController(req, res) {
    try {
        const userid = req.userId;

        const cookieOption = {
            httpOnly: true,
            secure: true,
            sameSite: "None"
        }
        res.clearCookie('accessToken', cookieOption);
        res.clearCookie('refreshToken', cookieOption);

        const removeRefreshToken = await UserModal.findByIdAndUpdate(userid, {
            refresh_token: ""
        })
        return res.json({
            message: 'Logout Succssfully',
            error: false,
            success: true

        })
    }
    catch (error) {
        return res.status(500).json({
            message: 'Problem in Logout ',
            error: false,
            success: true

        })
    }
}