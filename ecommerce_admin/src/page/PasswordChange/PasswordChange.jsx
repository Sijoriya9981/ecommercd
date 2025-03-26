
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
const PasswordChange = () => {
    const [isshowpassword, setisshowpassword] = useState(false);
    const [isshowconpassword, setisshowconpassword] = useState(false);

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

                <div className="card loginBox w-[500px] !h-[auto] mx-auto  mt-20 relative z-50 overflow-x-auto">
                    <div className="text-center">
                        <img src={'/logosvg.svg'} alt="" className="m-auto w-[100px] h-[100px]" />
                    </div>
                    <h1 className="text-center text-[25px] !font-[900] mt-2">
                        Welcome back! <br />
                        You can change your password from here.


                    </h1>





                    <form action="" className="w-full px-8 mt-3">


                        <div className="form-group mb-4 w-full">
                            <h4 className="text-[14px] font-[500] mb-1">
                                New  Password
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
                        <div className="form-group mb-4 w-full">
                            <h4 className="text-[14px] font-[500] mb-1">
                                Confirm New Password
                            </h4>

                            <div className="relative">

                                <input type={`${isshowconpassword === true ? 'text' : 'password'}`} name="" id="" className='w-full h-[45px] border border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.4)] focus:outline-none px-3' />
                                <Button className='!absolute top-[5px] right-[2px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black' onClick={() => setisshowconpassword(!isshowconpassword)}>
                                    {
                                        isshowconpassword === false ? <PiEyeLight className='text-[22px]' /> : <PiEyeSlashLight className='text-[22px]' />
                                    }
                                </Button>
                            </div>
                        </div>


                        <Button className='btn-blue w-full'>Change Password</Button>
                    </form>
                </div >
            </section >
        </>
    );
}

export default PasswordChange;
