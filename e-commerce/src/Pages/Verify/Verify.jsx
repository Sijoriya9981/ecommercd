import { Button } from '@mui/material';
import React from 'react';
import TextField from '@mui/material/TextField';

import { PiEyeSlashLight } from "react-icons/pi";
import { PiEyeLight } from "react-icons/pi";
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { MdOutlineVerifiedUser } from "react-icons/md";
import OTPBox from '../../components/OTPBOX/OTPBox';
import { useState } from 'react';
useState
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
            <section className='section py-10 otpage'>
                <div className="container">
                    <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-4 px-10 ">
                        <div className="text-center flex justify-center items-center">

                            <img src={'/cyber-security.png'} alt="" srcset="" className='w-[40px] h-[40px]' />
                        </div>
                        <h3 className='text-center font-[500] text-[18px] text-black mt-3 mb-1'>Verify OTP</h3>
                        <p className='text-center mt-2 mb-2'>OTP send to <span className='text-primary text-[15px] font[500]'>User@gmail.com</span></p>
                        <form action="" onSubmit={verifyotp}>
                            <OTPBox length={6} onChange={handleotpchange} />
                            <div className="flex items-center justify-center mt-4 pb-2 px-3">
                                <Button type='submit' className='w-full btn-org '>Verify OTP</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Verify;
