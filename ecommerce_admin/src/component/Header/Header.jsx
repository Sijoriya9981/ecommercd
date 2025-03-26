import React, { useContext, useState } from 'react';
import { RiMenu2Fill } from "react-icons/ri";
import Badge from '@mui/material/Badge';
import { FaBell } from "react-icons/fa6";
import '../../App.css'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import { FaRegUser } from "react-icons/fa";
import { LuActivity } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { PiSignOutLight } from "react-icons/pi";
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { Mycontext } from '../../App';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
Link
const Header = () => {
    const context = useContext(Mycontext)
    const [profileanchorEl, setprofileanchorEl] = useState(null);
    const open = Boolean(profileanchorEl);
    const profilehandleClick = (event) => {
        setprofileanchorEl(event.currentTarget);
    };
    const profilehandleClose = () => {
        setprofileanchorEl(null);
    };


    return (
        <>
            <header className='w-full h-[auto] pl-60  pr-5 bg-white py-2 shadow-md flex items-center justify-between'>
                <div className="part1 ">
                    <Button className='!w-[40px] !h-[40px] !rounded-full !min-w-[40px] !text-[rbga(0,0,0,0.8)]' onClick={() => {

                        context.setissidebarexpend(!context.issidebarexpend);
                    }}>
                        <RiMenu2Fill className='text-[18px] text-black  text-[rbga(0,0,0,0.7)]' />
                    </Button>
                </div>
                <div className="part2 w-[40%] flex items-center justify-end gap-5">
                    <Button className='!w-[40px] !h-[40px] !text-black !rounded-full !min-w-[40px] !text-[rbga(0,0,0,0.8)]'>
                        <Badge badgeContent={4} color="primary">
                            <FaBell className='text-[18px]  text-black ' />
                        </Badge>
                    </Button>

                    {
                        context.isLogin === true ? <>
                            <div className="relative">
                                <div className="  rounded-full w-[40px]  h-[40px]  overflow-hidden cursor-pointer ">

                                    <img onClick={profilehandleClick} className='w-full h-full object-cover rounded-full' src="https://cdn.lazyshop.com/files/9cf1cce8-c416-4a69-89ba-327f54c3c5a0/product/ee1a0e1d45629092d189851fc2385c97.jpeg" alt="" srcset="" />
                                </div>

                                <Menu
                                    anchorEl={profileanchorEl}
                                    id="account-menu"
                                    open={open}
                                    onClose={profilehandleClose}
                                    onClick={profilehandleClose}

                                    slotProps={{
                                        paper: {
                                            elevation: 0,
                                            sx: {
                                                zIndex: 1300,
                                                overflow: 'visible',
                                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                mt: 1.5,


                                                '& .MuiAvatar-root': {
                                                    width: 32,
                                                    height: 32,
                                                    ml: -0.5,
                                                    mr: 1,

                                                },
                                                '&::before': {
                                                    content: '""',
                                                    display: 'block',
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 14,
                                                    width: 10,
                                                    height: 10,
                                                    bgcolor: 'background.paper',
                                                    transform: 'translateY(-50%) rotate(45deg)',
                                                    zIndex: 0,
                                                },
                                            },
                                        },
                                    }}
                                    transformOrigin={{ horizontal: 'center', vertical: 'top' }} // Open the menu below the profile image
                                    anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
                                >
                                    <MenuItem onClick={profilehandleClose} className='flex gap-1'>
                                        <div className="flex items-center gap-3">
                                            <div className="rounded-full w-[40px] h-[40px] overflow-hidden cursor-pointer">
                                                <img className='w-full h-full object-cover rounded-full' src="https://cdn.lazyshop.com/files/9cf1cce8-c416-4a69-89ba-327f54c3c5a0/product/ee1a0e1d45629092d189851fc2385c97.jpeg" alt="" srcset="" />

                                            </div>
                                            <div className="info">
                                                <h3 className='text-[#202020] text-[14px] font-[500] leading-4'>Admin</h3>
                                                <p className='text-[#3a3a3a] text-[13px] font-[400]'>admin@gmail.com</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem onClick={profilehandleClose} className='flex gap-1'>
                                        <FaRegUser className='text-[15px] gap-1 link' />Profile
                                    </MenuItem>
                                    {/* <MenuItem onClick={profilehandleClose} className='flex gap-1'>
                                <CiSettings className='text-[19px] link' />Account Setting
                            </MenuItem>
                            <MenuItem onClick={profilehandleClose} className='flex gap-1'>
                                <LuActivity className='text-[16px] link' />Activity Log
                            </MenuItem> */}

                                    <MenuItem onClick={profilehandleClose} className='flex gap-1'>
                                        <PiSignOutLight className='text-[18px] link' />Sign Out
                                    </MenuItem>
                                </Menu>
                            </div>
                        </> : <>
                            <Link to='/login'>
                                <Button className='btn-blue btn-sm rounded-md'>Sign in</Button>
                            </Link>
                        </>
                    }




                </div>
            </header >
        </>
    );
}

export default Header;
