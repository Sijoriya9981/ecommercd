import React, { useState } from 'react';
import { Button, Rating } from '@mui/material';
import QtyBox from '../QtyBox/QtyBox';
import { FaRegHeart } from "react-icons/fa6";
import { GoGitCompare } from "react-icons/go";
import { GiShoppingCart } from "react-icons/gi";
const ProductDetailsec = () => {
    const [ProductActionIndex, setProductActionIndex] = useState(null)
    return (
        <>
            <h1 className="text-[24px] font[600] mb-2">Denim Jacket</h1>
            <div className="flex items-center gap-2">
                <span className='text-gray-400'>Brands: <span className='font-[500] text-black opacity-70'>Gucci</span></span>
                <Rating name="small-small" defaultValue={4} size='small' readOnly />
                <span className='cursor-pointer text-[#666] text-[13px]'>Reviews (5)</span>
            </div>
            <div className="flex items-center gap-3">
                <span className='oldPrice line-through text-gray-500 text-[15px] font-[500]'>₹900</span>
                <span className="Price text-primary text-[15px] font-[500]">₹500</span>
                <span>Available In Stock: <span className='text-[14px] text-green-600 font-[500]'>147 Items</span> </span>
            </div>
            <p className="des mt-2 pr-2 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. In aliquid exercitationem a animi necessitatibus unde aut, ea aspernatur conseqDolores ulo?</p>

            <div className="flex items-center gap-3">
                <span className='text-[16px] '>Size:</span>
                <div className="flex items-center gap-1 actions">
                    <Button className={` ${ProductActionIndex === 0 ? '!bg-primary !text-white' : '!text-black'}`} onClick={() => setProductActionIndex(0)}>S</Button>
                    <Button className={`${ProductActionIndex === 1 ? '!bg-primary !text-white' : '!text-black'}`} onClick={() => setProductActionIndex(1)}>M</Button>
                    <Button className={`${ProductActionIndex === 2 ? '!bg-primary !text-white' : '!text-black'}`} onClick={() => setProductActionIndex(2)}>L</Button>
                    <Button className={`${ProductActionIndex === 3 ? '!bg-primary !text-white' : '!text-black'}`} onClick={() => setProductActionIndex(3)}>XL</Button>
                    <Button className={`${ProductActionIndex === 4 ? '!bg-primary !text-white' : '!text-black'}`} onClick={() => setProductActionIndex(4)}>XXL</Button>

                </div>

            </div>
            <p className="text-[14px] mt-4 mb-2">Free Shipping(Est. Delivery Time 2-3 Days)</p>
            <div className="flex items-center  gap-4">
                <div className="btnBoxWrapper w-[70px]">

                    <QtyBox />
                </div>
                <Button className="btn-org h-10 !p-2">
                    <GiShoppingCart className='text-[22px]' />Add to Cart
                </Button>
            </div>
            <div className="flex items-center gap-4 mt-4 detailpagesvg">
                <span className='link cursor-pointer flex items-center text-[18px] gap-1'><FaRegHeart /> Add to whishlish</span>
                <span className='link cursor-pointer flex items-center text-[18px] gap-1'> <GoGitCompare />Add to Compare</span>
            </div>
        </>
    );
}

export default ProductDetailsec;
