import React, { useState } from 'react';
Link
import { RxCross2 } from "react-icons/rx";
import { Button, Rating } from '@mui/material';
import { GoTriangleDown } from "react-icons/go";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { MdOutlineHighQuality } from 'react-icons/md';
const CartItem = ({ size, qty }) => {
    const [sizeanchorEl, setsizeAnchorEl] = useState(null);
    const [qtyanchorEl, setqtyAnchorEl] = useState(null);
    const [selectedsize, setselectedsize] = useState(size);
    const [selectedqty, setselectedqty] = useState(qty);
    const sizeopen = Boolean(sizeanchorEl);
    const qtyopen = Boolean(qtyanchorEl);
    const sizehandleClick = (event) => {
        setsizeAnchorEl(event.currentTarget);
    };
    const qtyhandleClick = (event) => {
        setqtyAnchorEl(event.currentTarget);
    };
    const sizehandleClose = (value) => {
        setsizeAnchorEl(null);
        if (value != null) {
            setselectedsize(value)
        }
        else {

        }
    };
    const qtyhandleClose = (value) => {

        setqtyAnchorEl(null);
        if (value != null) {
            setselectedqty(value)
        }
    };
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
                    <div className='flex items-center gap-4 mt-2'>
                        <div className='relative'>
                            <span className='flex items-center justify-center bg-[#f1f1f1]   text-[11px] font-[500] py-1 px-2 rounded-md cursor-pointer' onClick={sizehandleClick}>Size: {selectedsize} <GoTriangleDown className='text-[18px]' /></span>
                            <Menu
                                id="sizeopt"
                                anchorEl={sizeanchorEl}
                                open={sizeopen}
                                onClose={() => sizehandleClose(null)}
                                MenuListProps={{
                                    'aria-labelledby': 'sizeopt',
                                }}
                            >
                                <MenuItem onClick={() => sizehandleClose('S')}>S</MenuItem>

                                <MenuItem onClick={() => sizehandleClose('M')}>M</MenuItem>
                                <MenuItem onClick={() => sizehandleClose('L')}>L</MenuItem>
                                <MenuItem onClick={() => sizehandleClose('XL')}>XL</MenuItem>
                                <MenuItem onClick={() => sizehandleClose('XXL')}>XXL</MenuItem>
                            </Menu>
                        </div>
                        <div className='relative'>
                            <span className='flex items-center justify-center bg-[#f1f1f1]  cursor-pointer text-[11px] font-[500] py-1 px-2 rounded-md ' onClick={qtyhandleClick}>Qty: {selectedqty} <GoTriangleDown className='text-[18px]' /></span>
                            <Menu
                                id="qtyopt"
                                anchorEl={qtyanchorEl}
                                open={qtyopen}
                                onClose={() => qtyhandleClose(null)}
                                MenuListProps={{
                                    'aria-labelledby': 'qtyopt',
                                }}
                            >
                                <MenuItem onClick={() => qtyhandleClose(1)}>1</MenuItem>
                                <MenuItem onClick={() => qtyhandleClose(2)}>2</MenuItem>
                                <MenuItem onClick={() => qtyhandleClose(3)}>3</MenuItem>
                                <MenuItem onClick={() => qtyhandleClose(4)}>4</MenuItem>
                                <MenuItem onClick={() => qtyhandleClose(5)}>5</MenuItem>
                                <MenuItem onClick={() => qtyhandleClose(6)}>6</MenuItem>
                                <MenuItem onClick={() => qtyhandleClose(7)}>7</MenuItem>
                            </Menu>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                        <span className="Price  text-[15px] font-[500]">₹500</span>
                        <span className='oldPrice line-through text-gray-500 text-[14px] font-[500]'>₹900</span>
                        <span className="offer text-primary text-[14px] font-[500]">45% OFF</span>

                    </div>
                </div>
            </div>
        </>
    );
}

export default CartItem;
