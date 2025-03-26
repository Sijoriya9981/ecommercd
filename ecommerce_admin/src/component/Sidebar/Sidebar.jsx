import { Button } from '@mui/material';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { RxDashboard } from "react-icons/rx";
import { PiSlideshow } from "react-icons/pi";
Link
import { RiProductHuntLine } from "react-icons/ri";
import { MdOutlineLogout } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { BiCategoryAlt } from "react-icons/bi";
import { TfiAngleDown } from "react-icons/tfi";
import { TfiAngleUp } from "react-icons/tfi";
import { Collapse } from 'react-collapse'
import { IoBagCheckOutline } from "react-icons/io5";
import { Mycontext } from '../../App';
Link
const Sidebar = () => {
    const context = useContext(Mycontext)
    const [menuindex, setmenuindex] = useState(null);

    const isopenMenu = (index) => {
        if (menuindex === index) {

            setmenuindex(null)
        }
        else {
            setmenuindex(index)
        }
    }
    return (
        <>

            <div className="sidebar fixed top-0 left-0 bg-white w-[18%] h-full py-2 px-4 border-r border-[rbga(0,0,0,0.2)] ">
                <div className=" w-full py-2">
                    <Link to='/' >
                        <img className='w-[100px] h-[50px] rounded-sm m-auto' srcSet={'/logo.png'} alt="" srcset="" />
                    </Link>
                </div>
                <ul className='mt-4'>
                    <li className=''> <Link to='/'> <Button className='w-full !capitalize !justify-start flex gap-1 !text-black group !text-[14px] !font-[500] items-center !py-2 !hover:bg-[#f1f1f1]'><RxDashboard className=' group-hover:text-[rgb(56, 221, 56,)] link text-[16px] text-black ! ' /> <span>Dashboard</span></Button></Link></li>

                    <li className=''>  <Button onClick={() => isopenMenu(1)} className='w-full !capitalize !justify-start flex gap-1 !text-black group !text-[14px] !font-[500] items-center'><PiSlideshow className=' group-hover:text-[rgb(56, 221, 56,)] link text-[16px] text-black' /> <span>Home Slides</span>
                        <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center mr-0">
                            {menuindex === 1 ? <TfiAngleUp className='text-[14px] font-[700]' /> : <><TfiAngleDown className='text-[14px] font-[700]' /></>}
                        </span>
                    </Button>
                        <Collapse isOpened={menuindex == 1 ? true : false}>
                            <ul className='w-full'>
                                <Link to={'/homeslider/list'}>
                                    <li className='w-full '>
                                        <Button className='!text-[rbga(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !text-black !font-[400] !pl-4 flex gap-2' >
                                            <span className="block w-[8px] h-[8px] rounded-full bg-[#dcdcdc]"></span>Home Slide List</Button>
                                    </li>
                                </Link>
                                <li className='w-full  '>
                                    <Link to={'/homeslider/list'}>
                                        <Button onClick={() => context.setisopenfullscreenpanel({
                                            open: true,
                                            modal: 'Add Home Banner Slider'
                                        })} className='!text-[rbga(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !text-black !font-[400] !pl-4 flex gap-2' >
                                            <span className="block w-[8px] h-[8px] rounded-full bg-[#dcdcdc]"></span>Add Home Banner Slides</Button>
                                    </Link>   </li>

                            </ul>
                        </Collapse>
                    </li>

                    <li className=''>
                        <Link to='/User/list' >
                            <Button className='w-full !capitalize !justify-start flex gap-1 !text-black group !text-[14px] !font-[500] items-center !py-2 !hover:bg-[#f1f1f1]'><FaUsers className=' group-hover:text-[rgb(56, 221, 56,)] link text-[18px] text-black  ' /> <span>Users</span></Button>
                        </Link>
                    </li>

                    <li className=''>
                        <Button onClick={() => isopenMenu(3)} className='w-full !capitalize !justify-start flex gap-1 !text-black group !text-[14px] !font-[500] items-center !py-2 !hover:bg-[#f1f1f1]'><RiProductHuntLine className=' group-hover:text-[rgb(56, 221, 56,)] link text-[18px] text-black  ' /> <span>Products</span>
                            <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center mr-0">
                                {menuindex === 3 ? <TfiAngleUp className='text-[14px] font-[700]' /> : <><TfiAngleDown className='text-[14px] font-[700]' /></>}
                            </span>
                        </Button>
                        <Collapse isOpened={menuindex == 3 ? true : false}>
                            <ul className='w-full'>
                                <li className='w-full  '>
                                    <Link to='/product'>
                                        <Button className='!text-[rbga(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !text-black !font-[400] !pl-4 flex gap-2' >
                                            <span className="block w-[8px] h-[8px] rounded-full bg-[#dcdcdc]"></span>Product List</Button>
                                    </Link>
                                </li>
                                <li className='w-full '>
                                    <Link >

                                        <Button onClick={() => context.setisopenfullscreenpanel({
                                            open: true,
                                            modal: 'Add Product'
                                        })} className='!text-[rbga(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !text-black !font-[400] !pl-4 flex gap-2' >

                                            <span className="block w-[8px] h-[8px] rounded-full bg-[#dcdcdc]"></span>Product Upload</Button>
                                    </Link>

                                </li>

                            </ul>
                        </Collapse>
                    </li>
                    <li className=''>  <Button onClick={() => isopenMenu(4)} className='w-full !capitalize !justify-start flex gap-1 !text-black group !text-[14px] !font-[500] items-center !py-2 !hover:bg-[#f1f1f1]'><BiCategoryAlt className=' group-hover:text-[rgb(56, 221, 56,)] link text-[18px] text-black  ' /> <span>Category</span>
                        <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center mr-0">
                            {menuindex === 4 ? <TfiAngleUp className='text-[14px] font-[700]' /> : <><TfiAngleDown className='text-[14px] font-[700]' /></>}
                        </span>
                    </Button>
                        <Collapse isOpened={menuindex == 4 ? true : false}>
                            <ul className='w-full'>
                                <li className='w-full  '>
                                    <Link to='/Category/list'>
                                        <Button className='!text-[rbga(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !text-black !font-[400] !pl-4 flex gap-2' >
                                            <span className="block w-[8px] h-[8px] rounded-full bg-[#dcdcdc]"></span>Category List</Button>
                                    </Link>
                                </li>
                                <li className='w-full '>
                                    <Link to={'/Category/list'}>
                                        <Button onClick={() => context.setisopenfullscreenpanel({
                                            open: true,
                                            modal: 'Add Category'
                                        })} className='!text-[rbga(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !text-black !font-[400] !pl-4 flex gap-2' >

                                            <span className="block w-[8px] h-[8px] rounded-full bg-[#dcdcdc]"></span>Add Category</Button>
                                    </Link>
                                </li>
                                <li className='w-full '>
                                    <Link to='/SubCategory/list'>
                                        <Button className='!text-[rbga(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !text-black !font-[400] !pl-4 flex gap-2' >
                                            <span className="block w-[8px] h-[8px] rounded-full bg-[#dcdcdc]"></span>Sub Category List</Button>
                                    </Link>
                                </li>
                                <li className='w-full '>
                                    <Link to='/SubCategory/list'>
                                        <Button onClick={() => context.setisopenfullscreenpanel({
                                            open: true,
                                            modal: 'Add Sub Category'
                                        })} className='!text-[rbga(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !text-black !font-[400] !pl-4 flex gap-2' >
                                            <span className="block w-[8px] h-[8px] rounded-full bg-[#dcdcdc]"></span>Add Sub Category</Button>
                                    </Link>
                                </li>
                            </ul>
                        </Collapse></li>


                    <li className=''> <Link to='/Orders/list'> <Button className='w-full !capitalize !justify-start flex gap-1 !text-black group !text-[14px] !font-[500] items-center !py-2 !hover:bg-[#f1f1f1]'><IoBagCheckOutline className=' group-hover:text-[rgb(56, 221, 56,)] link text-[18px] text-black  ' /> <span>Orders</span></Button></Link></li>

                    <li className=''> <Link to='/'> <Button className='w-full !capitalize !justify-start flex gap-1 !text-black group !text-[14px] !font-[500] items-center !py-2 !hover:bg-[#f1f1f1]'><MdOutlineLogout className=' group-hover:text-[rgb(56, 221, 56,)] link text-[18px] text-black  ' /> <span>Logout</span></Button></Link></li>

                </ul>
            </div>
        </>
    );
}

export default Sidebar;
