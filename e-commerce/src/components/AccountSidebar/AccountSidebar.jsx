import { Button } from '@mui/material';
import React from 'react';
import { RiUploadCloud2Line } from "react-icons/ri";
Button
import { FaRegUser } from "react-icons/fa";
import { LuClipboardCheck } from "react-icons/lu";
import { GoHeart } from "react-icons/go";
import { IoLogOutOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import TextField from '@mui/material/TextField'

const AccountSidebar = () => {
    return (
        <>
            <div className="card bg-white shadow-md rounded-md p-5 sticky top[10px]">
                <div className="w-full p-5 flex items-center justify-center flex-col">
                    <div className="w-[110px] h-[110px] !rounded-full overflow-hidden relative group">
                        <img className='w-full h-full rounded-full object-cover  ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNinvfjaNRXPonSsW1TNXgLz9qCPICMV0Dqw&s" alt="" srcset="" />

                        <div className="overlay w-[100%] h-[100%]  cursor-pointer  absolute top-0 left-0 z-50 justify-center bg-[rgb(0,0,0,0.6)] flex items-center  transition-all opacity-0 group-hover:opacity-100">
                            <RiUploadCloud2Line className='text-white  text-[25px]' />
                            <input type="file" className='absolute top-0 left-0 w-full h-full opacity-0' name="" id="" />
                        </div>
                    </div>

                    <h3 className='text-center flex text-[15px] font-[500]'>Rocky Bhai</h3>
                    <h6 className='text-[13px] font-[450]'>rocky@gmail.com</h6>
                </div>

                <ul className="list-none pb-1 bg-[#f1f1f1] myaccountTabs">
                    <li className="w-full">
                        <NavLink to='/myaccount' activeClassName="isActive" >
                            <Button className=' w-full !justify-start !text-left  !py-2 !px-5 !rounded-none flex !capitalize items-center gap-2 !text-black '><FaRegUser className=' text-[14px] link text-black' />My Profile</Button>
                        </NavLink>
                    </li>
                    <li className="w-full">
                        <NavLink to='/mylist' activeClassName="isActive" >

                            <Button className=' w-full !justify-start !py-2 !px-5 !rounded-none flex !capitalize items-center gap-2 !text-black '><LuClipboardCheck className='link text-[16px] text-black' />My List</Button>
                        </NavLink>

                    </li>
                    <li className="w-full">
                        <NavLink to='/myorder' activeClassName="isActive" >

                            <Button className=' w-full !justify-start !py-2 !px-5 !rounded-none flex !capitalize items-center gap-2 !text-black '><GoHeart className='link text-[16px] text-black' />My Orders</Button>
                        </NavLink>

                    </li>
                    <li className="w-full">
                        <NavLink to='/logout' activeClassName="isActive" >

                            <Button className=' w-full !justify-start !py-2 !px-5 !rounded-none flex !capitalize items-center gap-2 !text-black '><IoLogOutOutline className='link text-[16px] text-black' />Logout</Button>
                        </NavLink>

                    </li>

                </ul>
            </div>
        </>
    );
}

export default AccountSidebar;
