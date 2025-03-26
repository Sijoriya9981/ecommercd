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

const Login = () => {
    const context = useContext(myContext)
    const [isshowpassword, setisshowpassword] = useState(false);
    const [formfield, setformfield] = useState(
        {
            email: '',
            password: ''
        }
    )
    const history = useNavigate();

    const forgotpasswordhandle = () => {
        if (formfield.email !== '') {
            context.openAlertBox('error', "Invalid Creditentials")
            history('/verify');
        }


    }
    return (
        <section className='section py-10'>
            <div className="container">
                <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-4 px-10">
                    <h3 className='text-center text-[18px] text-black'>Login to your account</h3>

                    <form action=" " onSubmit={() => { }} className='w-full mt-5' >
                        <div className="form-group w-full mb-5">

                            <TextField
                                required
                                id="emailid"
                                label="Email id"
                                variant="standard"
                                className='w-full'
                                type='email'
                                name='email'
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
                                name='password'
                            />
                            <Button className='!absolute top-[10px] right-[2px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black' onClick={() => setisshowpassword(!isshowpassword)}>
                                {
                                    isshowpassword === false ? <PiEyeLight className='text-[22px]' /> : <PiEyeSlashLight className='text-[22px]' />
                                }
                            </Button>
                        </div>
                        <Link to="/verify" className='link cursor-pointer text-[14px] font-[500]' onClick={forgotpasswordhandle}>Forget Password?</Link>
                        <div className="flex items-center w-full mt-3">
                            <Button className='btn-org btn-lg w-full'>Login</Button>
                        </div>
                        <p className='text-[14px] font-[400] text-center'>Not Registered? <Link className='text-primary link text-[14px]' to='/register'>Signup</Link></p>

                        <p className='text-center text-[14px] font-[400]'>Or continue with social account</p>
                        <Button className=' flex gap-2 w-full !bg-[#f1f1f1] !text-black'><FcGoogle className='text-[25px]' />Login with google</Button>
                    </form>

                </div>
            </div>
        </section>
    );
}

export default Login;
