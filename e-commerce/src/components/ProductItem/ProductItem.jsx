import React, { useContext } from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
Button
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { CiHeart } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { CiShare1 } from "react-icons/ci";
import Tooltip from '@mui/material/Tooltip';
useContext
import { myContext } from '../../App';

const ProductItem = () => {
    const context = useContext(myContext);
    return (
        <div className='ProductItem rounded-md overflow-hidden border-2 border-[rbga(0,0,0,0.1)]'>
            <div className="group imgWapper w-[100%] rounded-sm   overflow-hidden relative">
                <Link to='/'>
                    <div className="img md:h-[220px]  sm:h-[150px] overflow-hidden">
                        <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781297/1736781294242_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-0-202311201747.jpg" alt="" srcset="" className='w-full ' />
                        <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781298/1736781294264_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-1-202311201747.jpg" alt="" srcset="" className='w-full transition-all duration-300 absolute top-0 left-0 opacity-0 group-hover:opacity-100' />

                    </div>
                </Link>
                <span className='discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-[30%]  p-1 text-[12px] font-[500]'>10%</span>

                <div className="actions absolute top-[-200px] right-[15px] z-50 flex items-center gap-2 flex-col w-[20px] transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100">
                    <Tooltip placement='left-start' title="Full">
                        <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-primary hover:!text-white group' onClick={() => context.setopenProductDetailsModal(true)}><MdOutlineZoomOutMap className='hover:!text-white text-[18px] !text-black group-hover:text-white' /></Button></Tooltip >
                    <Tooltip placement='left-start' title="Whislist">  <Button className='!w-[35px]  !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-primary hover:!text-white group'><CiHeart className='text-[18px] hover:!text-white !text-black group-hover:text-white' /></Button> </Tooltip >



                    <Tooltip placement='left-start' title="Compare">
                        <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-primary hover:!text-white group'><IoIosGitCompare className='hover:!text-white text-[18px] !text-black group-hover:text-white' /></Button></Tooltip >
                    {/* <Tooltip placement='left-start' title="Share">  <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-primary hover:!text-white group'><CiShare1 className='text-[18px] hover:!text-white !text-black group-hover:text-white' /></Button></Tooltip > */}
                </div>
            </div>
            <div className="info p-3 py-3 bg-[#f1f1f1] shadow-sm">
                <h6 className='text-[13px]'><Link to='/' className='link transition-all'>RARE RABBIT</Link></h6>
                <h3 className='text-[14px] title mt-2 font-[500] text-[rgba(0,0,0,0.9)] mb-1'><Link to='/' className='link transition-full'> Men Layerr Regular Fit Spread Collar Cotton Shirt</Link></h3>

                <Rating name="half-rating" defaultValue={2.5} precision={0.5} readOnly />
                <div className="flex items-center gap-4">
                    <span className='oldPrice line-through text-gray-500 text-[14px] font-[500]'>₹900</span>
                    <span className="Price text-primary text-[15px] font-[500]">₹500</span>
                </div>

            </div>
        </div >
    );
}

export default ProductItem;
