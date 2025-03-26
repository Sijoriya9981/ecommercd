import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
Button
import { PiEyeSlashLight } from "react-icons/pi";
import { PiEyeLight } from "react-icons/pi";
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { myContext } from '../../App';
import { useContext } from 'react';

const ForgotPassword = () => {
    const [isshowpassword, setisshowpassword] = useState(false)
    const [isshowconfirmpassword, setisshowconfirmpassword] = useState(false)
    return (
        <section className='section py-10'>
            <div className="container">
                <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-4 px-10">
                    <div className="text-center flex justify-center items-center mb-1">

                        <img src={'/reset-password.png'} alt="" srcset="" className='w-[40px] h-[40px]' />
                    </div>
                    <h3 className='text-center text-[18px] text-black font-[500]'>Forgot Password</h3>

                    <form action=" " onSubmit={() => { }} className='w-full mt-5' >
                        <div className="form-group w-full mb-5 relative">

                            <TextField
                                required
                                id="password"

                                label="New Password"
                                type={`${isshowpassword === true ? 'text' : 'password'}`}
                                variant="standard"
                                className='w-full'
                                name='password'
                            />
                            <Button className='!absolute top-[10px] right-[2px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black' onClick={() => setisshowpassword(!isshowpassword)}>
                                {
                                    isshowpassword === false ? <PiEyeLight className='text-[22px]' /> : <PiEyeSlashLight className='text-[22px]' />
                                }
                            </Button>
                        </div>
                        <div className="form-group w-full mb-5 relative">

                            <TextField
                                required
                                id="password"

                                label="Confirm Password"
                                type={`${isshowconfirmpassword === true ? 'text' : 'password'}`}
                                variant="standard"
                                className='w-full'
                                name='password'
                            />
                            <Button className='!absolute top-[10px] right-[2px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black' onClick={() => setisshowconfirmpassword(!isshowconfirmpassword)}>
                                {
                                    isshowconfirmpassword === false ? <PiEyeLight className='text-[22px]' /> : <PiEyeSlashLight className='text-[22px]' />
                                }
                            </Button>
                        </div>
                        <div className="flex items-center w-full mt-3">
                            <Button className='btn-org btn-lg w-full'>Change Password</Button>
                        </div>

                    </form>

                </div>
            </div>
        </section>
    );
}

export default ForgotPassword;
