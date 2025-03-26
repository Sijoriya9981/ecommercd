import { Button, Checkbox, FormControlLabel } from '@mui/material';
import React, { useState } from 'react';
Button
import { Link, NavLink } from 'react-router-dom';
import { CiLogin } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
FormControlLabel
import { FcGoogle } from "react-icons/fc";
Checkbox
NavLink
useState
Link
OTPBox
import { PiEyeLight } from "react-icons/pi";
import { PiEyeSlashLight } from "react-icons/pi";
import { TiSocialFacebook } from "react-icons/ti";
import OTPBox from '../../component/OTPBOX/OTPBox';
const Verify = () => {
    const [otp, setotp] = useState("");
    const handleotpchange = (value) => {
        setotp(value);
    }
    const verifyotp = (e) => {
        e.preventDefault();
        alert(otp)
    }

    return (
        <>

            <section className="bg-[#fff] w-full">
                <header className='w-full fixed top-0 left-0  px-4 py-2  flex items-center justify-between z-50'>
                    <Link to='/'>
                        <img className='w-[60px] h-[60px] !bg-gray-200' src={'/logosvg.svg'} alt="" srcset="" />
                    </Link>

                    <div className="flex items-center gap-1">
                        <NavLink to='/login' exact activeClassName='isActive'>

                            <Button className='cursor-pointer btn-sm !text-black   flex gap-1 !rounded-md '><CiLogin className='text-[16px]' />Login</Button>
                        </NavLink>
                        <NavLink to='/signup' exact activeClassName='isActive'>

                            <Button className='cursor-pointer btn-sm !bg-[#fff]  !text-black flex gap-1'><CgProfile className='text-[16px]' />Signup</Button>
                        </NavLink>
                    </div>


                </header>

                <img className='w-full h-full object-cover fixed top-0 left-0 opacity-25 ' src="https://images.unsplash.com/photo-1566305977571-5666677c6e98?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGV4dHVyZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D" alt="" srcset="" />

                <div className="card loginBox w-[500px] !h-[auto] mx-auto mt-20 relative z-50 overflow-x-auto">
                    <div className="text-center items-center justify-center flex">
                        <img src={'/cyber-security.png'} alt="" srcset="" className='w-[60px]' />
                    </div>
                    <h1 className="text-center text-[30px] !font-[900] mt-2">
                        Welcome back! <br />
                        Please Verify your Email


                    </h1>
                    <br />
                    <p className="text-center text-[15px]">OTP send to <span className="text-primary font-bold">user@gmail.com</span> </p>
                    <br />
                    <div className="text-center flex items-center justify-center flex-col">
                        <OTPBox length={6} onChange={handleotpchange} />
                    </div>
                    <br />
                    <div className="w-[300px] m-auto">
                        <Button className='btn-blue w-full'> Verify OTP</Button>
                    </div>



                </div >
            </section >
        </>
    );
}

export default Verify;
