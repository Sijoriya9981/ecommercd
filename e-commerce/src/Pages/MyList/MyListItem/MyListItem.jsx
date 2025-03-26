import React, { useState } from 'react';
Link
import { RxCross2 } from "react-icons/rx";
import { Button, Rating } from '@mui/material';
import { GoTriangleDown } from "react-icons/go";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { MdOutlineHighQuality } from 'react-icons/md';
const MyListItem = ({ size, qty }) => {

    return (
        <>
            <div className="carItem w-full flex items-center gap-4 p-2 pb-5 border-b border-[#d9d9d9]">
                <div className="img w-[15%] rounded-md overflow-hidden ">
                    <Link to='/product/12' className='group'>
                        <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781298/1736781294264_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-1-202311201747.jpg" alt="" srcset="" className='group-hover:scale-105 w-full transition-all' />
                    </Link>
                </div>
                <div className="info w-[85%] relative">
                    <RxCross2 className='cursor-pointer absolute  top-[0px] right-[0px] text-[18px] link transition-all' />
                    <span className='text-[13px]'>Sangria</span>
                    <h3 className='text-[15px]'><Link className='link'>A Blue Denim Jacket </Link></h3>
                    <Rating name='size-small' defaultValue={4} size='small' readOnly />

                    <div className="flex items-center gap-2 mt-3 mb-2">
                        <span className="Price  text-[15px] font-[500]">₹500</span>
                        <span className='oldPrice line-through text-gray-500 text-[14px] font-[500]'>₹900</span>
                        <span className="offer text-primary text-[14px] font-[500]">45% OFF</span>

                    </div>

                    <Button className='btn-org btn-sm'>Add to Cart</Button>
                </div>
            </div>
        </>
    );
}

export default MyListItem;
