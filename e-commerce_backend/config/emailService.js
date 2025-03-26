import http from 'http';
import nodemailer from 'nodemailer';


// configuration the smtp transporter
const transporter = nodemailer.createTransport({

    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.Email,
        pass: process.env.Email_Password,
    }

})


//function to  end-email
async function sendEmail(to, subject, text, html) {
    try {
        const info = await transporter.sendMail({
            from: process.env.Email,
            to,  // list of receviers
            subject,  //subject line
            text,   // plain text-body
            html     //html body
        })
        return { success: true, messsageId: info.messageId };
    }
    catch (error) {
        console.log('Eror sending email: ', error);
        return { success: false, error: error.message }

    }
}

export default sendEmail;