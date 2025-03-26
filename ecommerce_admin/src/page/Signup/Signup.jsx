
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
import { PiEyeLight } from "react-icons/pi";
import { PiEyeSlashLight } from "react-icons/pi";
import { TiSocialFacebook } from "react-icons/ti";
const Signup = () => {
    const [isshowpassword, setisshowpassword] = useState(false);

    const [loginbtnloadinggoogle, setloginbtnLoadinggoogle] = useState(false);
    function handleClickgoogle() {
        setloginbtnLoadinggoogle(true);
    }
    const [loginbtnloadingfb, setloginbtnLoadingfb] = useState(false);
    function handleClickfb() {
        setloginbtnLoadingfb(true);
    }
    return (
        <>

            <section className="bg-[#fff] w-full ">
                <header className='w-full fixed top-0 left-0  px-4 py-2  flex items-center justify-between z-50'>
                    <Link to='/'>
                        <img className='w-[60px] h-[60px] !bg-gray-200' src={'/logosvg.svg'} alt="" srcset="" />
                    </Link>

                    <div className="flex items-center gap-1 ">
                        <NavLink to='/login' exact activeClassName='isActive'>

                            <Button className='btn-sm !text-black !bg-[#fff] cursor-pointer  flex gap-1 !rounded-md '><CiLogin className='text-[16px]' />Login</Button>
                        </NavLink>
                        <NavLink to='/signup' exact activeClassName='isActive'>

                            <Button className='cursor-pointer btn-sm !bg-[#fff]  !text-black flex gap-1'><CgProfile className='text-[16px]' />Signup</Button>
                        </NavLink>
                    </div>



                </header>
                <img className='w-full h-full object-cover fixed top-0 left-0 opacity-25 ' src="https://images.unsplash.com/photo-1566305977571-5666677c6e98?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGV4dHVyZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D" alt="" srcset="" />
                <div className="card loginBox w-[500px] !h-[auto] mx-auto mt-14 pb-10 relative z-50 overflow-x-auto">
                    <div className="text-center">
                        <img src={'/logosvg.svg'} alt="" className="m-auto w-[100px] h-[100px]" />
                    </div>
                    <h1 className="text-center text-[30px] !font-[900] mt-2">
                        Join us today! Get special <br />
                        benefits and stay up-to-date.


                    </h1>

                    <div className="buttonlogin flex items-center justify-center w-full mt-5  gap-4 ">
                        <Button

                            onClick={handleClickgoogle}
                            endIcon={< FcGoogle className='!text-[20px]' />}
                            loading={loginbtnloadinggoogle}
                            className='!bg-none !text-black !py-2 !capitalize !px-5 !border !border-[rgba(0,0,0,0.8)]'
                            loadingPosition="end"
                            variant="outlined"
                        >
                            Sign in with Google
                        </Button>
                        <Button

                            onClick={handleClickfb}
                            endIcon={< TiSocialFacebook className='facebook !text-[20px]' />}
                            loading={loginbtnloadingfb}
                            className='!bg-none !text-black  !py-2 !capitalize !px-5 !border !border-[rgba(0,0,0,0.8)]'
                            loadingPosition="end"
                            variant="outlined"
                        >
                            Sign in with Facebook
                        </Button>
                    </div>
                    <br />

                    <div className="w-full flex items-center justify-center gap-3">
                        <span className="flex items-center w-[100px] h-[1px] bg-[rgba(0,0,0,0.4)]"> </span>
                        <span className="text-[14px] font-bold">
                            Or , Sign in with your email
                        </span>
                        <span className="flex items-center w-[100px] h-[1px] bg-[rgba(0,0,0,0.4)]"> </span>

                    </div>

                    <br />

                    <form action="" className="w-full px-8 mt-3">
                        <div className="form-group mb-4 w-full">
                            <h4 className="text-[14px] font-[500] mb-1">
                                Full Name
                            </h4>
                            <input type="text" name="" id="" className='w-full h-[45px] border border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.4)] focus:outline-none px-3' />
                        </div>
                        <div className="form-group mb-4 w-full">
                            <h4 className="text-[14px] font-[500] mb-1">
                                Email
                            </h4>
                            <input type="email" name="" id="" className='w-full h-[45px] border border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.4)] focus:outline-none px-3' />
                        </div>

                        <div className="form-group mb-4 w-full">
                            <h4 className="text-[14px] font-[500] mb-1">
                                Password
                            </h4>

                            <div className="relative">

                                <input type={`${isshowpassword === true ? 'text' : 'password'}`} name="" id="" className='w-full h-[45px] border border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.4)] focus:outline-none px-3' />
                                <Button className='!absolute top-[5px] right-[2px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black' onClick={() => setisshowpassword(!isshowpassword)}>
                                    {
                                        isshowpassword === false ? <PiEyeLight className='text-[22px]' /> : <PiEyeSlashLight className='text-[22px]' />
                                    }
                                </Button>
                            </div>
                        </div>



                        <Button className='btn-blue w-full'>Sign Up</Button>
                    </form>
                </div >
            </section>
        </>
    );
}

export default Signup;
