import React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
Button
import { PiEyeSlashLight } from "react-icons/pi";
import { PiEyeLight } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
const Register = () => {
    const [isshowpassword, setisshowpassword] = useState(false);

    return (
        <section className='section py-10'>
            <div className="container">
                <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-4 px-10">
                    <h3 className='text-center text-[18px] text-black'>Register with a new account</h3>

                    <form action=" " onSubmit={() => { }} className='w-full mt-5' >
                        <div className="form-group w-full mb-5">

                            <TextField
                                required
                                id="name"
                                label="Full Name"
                                variant="standard"
                                className='w-full'
                                type='text'
                            />
                        </div>

                        <div className="form-group w-full mb-5">

                            <TextField
                                required
                                id="emailid"
                                label="Email id"
                                variant="standard"
                                className='w-full'
                                type='email'
                            />
                        </div>
                        <div className="form-group w-full mb-5 relative">

                            <TextField
                                required
                                id="password"

                                label="Password"
                                type={`${isshowpassword === true ? 'text' : 'password'}`}
                                variant="standard"
                                className='w-full'
                            />
                            <Button className='!absolute top-[10px] right-[2px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black' onClick={() => setisshowpassword(!isshowpassword)}>
                                {
                                    isshowpassword === false ? <PiEyeLight className='text-[22px]' /> : <PiEyeSlashLight className='text-[22px]' />
                                }
                            </Button>
                        </div>
                        <div className="flex items-center w-full mt-3">
                            <Button className='btn-org btn-lg w-full'>Register</Button>
                        </div>
                        <p className='text-[14px] font-[400] text-center'>Already have an account? <Link className='text-primary link text-[14px]' to='/login'>Login</Link></p>

                        <p className='text-center text-[14px] font-[400]'>Or continue with social account</p>
                        <Button className=' flex gap-2 w-full !bg-[#f1f1f1] !text-black'><FcGoogle className='text-[25px]' />Login with google</Button>
                    </form>

                </div>
            </div>
        </section>
    );
}

export default Register;
