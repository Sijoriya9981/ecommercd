import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Seachbar from '../SearchBar/Seachbar';
Link
import { Button } from '@mui/material';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { GoGitCompare } from "react-icons/go";

import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation/Navigation';
import { FaRegUserCircle } from "react-icons/fa";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { myContext } from '../../App';
import { FaRegUser } from "react-icons/fa";
import { LuClipboardCheck } from "react-icons/lu";
import { GoHeart } from "react-icons/go";
import { IoLogOutOutline } from "react-icons/io5";
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));
const Header = () => {
    const context = useContext(myContext)
    const [profileanchorEl, setprofileanchorEl] = useState(null);
    const open = Boolean(profileanchorEl);
    const handleClick = (event) => {
        setprofileanchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setprofileanchorEl(null);
    };

    return (
        <>
            <header className='bg-white'>
                <div className="top-strip py-2 border-t-[1px] border-b-[1px] border-gray-200">
                    <div className="container">
                        <div className="flex items-center justify-between">

                            <div className="col1 w-[50%]">
                                <p className='text-[12px] font-medium'> Get up to 50% off new season styles, limited time</p>
                            </div>
                            <div className="col2 flex items-center justify-end">
                                <ul className='flex items-center gap-2'>
                                    <li className='list-none'>
                                        <Link to='/help-center' className='text-[12px] link font-[500] transition' > Help Center</Link>
                                    </li>
                                    <li className='list-none'>
                                        <Link to='/order-tracking' className='text-[12px] link font-[500] transition' >Order Tracking</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header py-4 border-b-[1px] border-gray-200">
                    <div className="container flex justify-between items-center">
                        <div className="col1 w-[25%]">
                            <Link to={"/"}>

                                <img src={'/logo.png'} alt="logo" srcset="" className='h-20' />

                            </Link>
                        </div>
                        <div className="col2 w-[45%]">
                            <Seachbar />
                        </div>
                        <div className="col3 w-[30%] flex items-center pl-7 ">

                            <ul className='flex items-center gap-3 justify-end w-full'>
                                {
                                    context.isLogin === false ?
                                        <>
                                            <li className="iist-none">
                                                <Link to='/login' className='link transition text-[12px] font-[500]'>Login</Link> | <Link to='/register' className='link transition text-[12px] font-[500]'>Register</Link>

                                            </li>
                                        </> :
                                        <>
                                            <Button onClick={handleClick} className="!text-[#000] myaccount flex items-center gap-1">
                                                <div>
                                                    <Button className=' !h-[35px] !w-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]'><FaRegUserCircle className='text-[#3a3a3a] link text-[30px]' /></Button></div>
                                                <div className="info flex flex-col">
                                                    <h4 className="leading-3 text-[14px] text-[rbga(0,0,0,0.6)] font-[500] mb-0 capitalize text-left justify-start">
                                                        Rocky
                                                    </h4>
                                                    <span className="text-[13px] !text-[#292929] font-[400] capitalize text-left justify-start">
                                                        Rocky@gmail.com
                                                    </span>

                                                </div>
                                            </Button>
                                            <Menu
                                                anchorEl={profileanchorEl}
                                                id="account-menu"
                                                open={open}
                                                onClose={handleClose}
                                                onClick={handleClose}
                                                slotProps={{
                                                    paper: {
                                                        elevation: 0,
                                                        sx: {
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
                                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                            >
                                                <Link to='/myaccount'>
                                                    <MenuItem onClick={handleClose} className='flex gap-2 !py-2'>
                                                        <FaRegUser className='text-[14px] link' /> My account
                                                    </MenuItem>
                                                </Link>
                                                <Link to='/myorder'>
                                                    <MenuItem onClick={handleClose} className='flex gap-2 !py-2' >
                                                        <LuClipboardCheck className='text-[16px] link' />  Order
                                                    </MenuItem>
                                                </Link>
                                                <Link to='/mylist'>

                                                    <MenuItem onClick={handleClose} className='flex gap-2 !py-2'>
                                                        <GoHeart className='text-[16px] link' />  My List
                                                    </MenuItem>
                                                </Link>
                                                <Link to='/'>

                                                    <MenuItem onClick={handleClose} className='flex gap-2 !py-2'>
                                                        <IoLogOutOutline className='text-[18px] link' />Logout
                                                    </MenuItem>
                                                </Link>



                                            </Menu>
                                        </>
                                }

                                <li>
                                    <Tooltip title="Compare">
                                        <IconButton aria-label="cart">
                                            <StyledBadge badgeContent={4} color="secondary">
                                                <GoGitCompare />
                                            </StyledBadge>
                                        </IconButton>
                                    </Tooltip>
                                </li>
                                <li>
                                    <Tooltip title="Cart">
                                        <IconButton aria-label="cart" onClick={() => context.setopencartpanel(true)}>
                                            <StyledBadge badgeContent={4} color="secondary">
                                                <MdOutlineShoppingCart />
                                            </StyledBadge>
                                        </IconButton>
                                    </Tooltip>
                                </li>


                                <li>
                                    <Tooltip title="Wishlist">
                                        <IconButton aria-label="cart">
                                            <StyledBadge badgeContent={4} color="secondary">
                                                <FaRegHeart />
                                            </StyledBadge>
                                        </IconButton>
                                    </Tooltip>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Navigation />

            </header>
        </>
    );
}

export default Header;
