import React, { useContext } from 'react';
import { RxCross2 } from "react-icons/rx";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { myContext } from '../../App';
Link
Button
const ShoppingCartpanel = () => {

    const context = useContext(myContext);
    return (
        <>
            <div className="scroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden py-0 px-4">
                <div className="cartItem w-full flex items-center gap-4 border-b border-[rbga(0,0,0,0.1)] pt-4 pb-4">
                    <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
                        <Link to='/product/12' className='block group'>
                            <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781298/1736781294264_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-1-202311201747.jpg" alt="" className=" w-full group-hover:scale-105" />
                        </Link>
                    </div>
                    <div className="info gap-4 w-[75%] pl-5 relative">
                        <Link to='/product/12'>   <h4 className='link text-[16px] font-[500] transition-all'> Denim Jacket</h4> </Link>
                        <p className='flex items-center gap-5 mt-2 mb-2'>
                            <span>Qty: <span>2</span></span>
                            <span className='text-primary font-[550]'>Price: ₹500</span>
                        </p>
                        <MdDelete className='absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all' />
                    </div>
                </div>
                <div className="cartItem w-full flex items-center gap-4 border-b border-[rbga(0,0,0,0.1)] pt-4 pb-4">
                    <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
                        <Link to='/product/12' className='block group'>
                            <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781298/1736781294264_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-1-202311201747.jpg" alt="" className=" w-full group-hover:scale-105" />
                        </Link>
                    </div>
                    <div className="info gap-4 w-[75%] pl-5 relative">
                        <Link to='/product/12'>   <h4 className='link text-[16px] font-[500] transition-all'> Denim Jacket</h4> </Link>
                        <p className='flex items-center gap-5 mt-2 mb-2'>
                            <span>Qty: <span>2</span></span>
                            <span className='text-primary font-[550]'>Price: ₹500</span>
                        </p>
                        <MdDelete className='absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all' />
                    </div>
                </div>
                <div className="cartItem w-full flex items-center gap-4 border-b border-[rbga(0,0,0,0.1)] pt-4 pb-4">
                    <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
                        <Link to='/product/12' className='block group'>
                            <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781298/1736781294264_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-1-202311201747.jpg" alt="" className=" w-full group-hover:scale-105" />
                        </Link>
                    </div>
                    <div className="info gap-4 w-[75%] pl-5 relative">
                        <Link to='/product/12'>   <h4 className='link text-[16px] font-[500] transition-all'> Denim Jacket</h4> </Link>
                        <p className='flex items-center gap-5 mt-2 mb-2'>
                            <span>Qty: <span>2</span></span>
                            <span className='text-primary font-[550]'>Price: ₹500</span>
                        </p>
                        <MdDelete className='absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all' />
                    </div>
                </div>


            </div>
            <br />
            <div className="bottomSec absolute bottom-[10px] left-[10px] w-full overflow-hidden">
                <div className="bottomInfo py-3 px-4 w-full border-t border-[rbga(0,0,0,0.8)] flex items-center justify-between flex-col">
                    <div className="flex items-center justify-between w-full" >
                        <span className='text-[14px] font-[600]'>1 item</span>
                        <span className='text-primary font-[500]'>₹1000</span>
                    </div>
                    <div className="flex items-center justify-between w-full" >
                        <span className='text-[14px] font-[600]'>Shipping</span>
                        <span className='text-primary font-[500]'>₹40</span>
                    </div>
                </div>
                <div className="bottomInfo py-3 px-4 w-full border-t  border-[rbga(0,0,0,0.8)] flex items-center justify-between flex-col">
                    <div className="flex items-center justify-between w-full" >
                        <span className='text-[14px] font-[600]'>Total(tax excl.)</span>
                        <span className='text-primary font-[500]'>₹1000</span>
                    </div>
                    <div className="flex items-center justify-between w-full" >
                        <span className='text-[14px] font-[600]'>Total(tax incl.)</span>
                        <span className='text-primary font-[500]'>₹40</span>
                    </div>
                    <div className="flex items-center justify-between w-full" >
                        <span className='text-[14px] font-[600]'>Taxes</span>
                        <span className='text-primary font-[500]'>₹00</span>
                    </div>

                </div>

                <div className="flex items-center justify-between w-full gap-3 p-4 pb-[1px]">
                    <Link to='/cartpage' className='w-[50%]'>   <Button className='btn-org w-[100%]' onClick={context.toggleopencartpanel(false)}>View Cart</Button></Link>
                    <Link to='/checkoutpage' className='w-[50%]'>  <Button className='btn-org w-[100%]' onClick={context.toggleopencartpanel(false)}>Checkout</Button></Link>
                </div>
            </div>

        </>
    );
}

export default ShoppingCartpanel;
