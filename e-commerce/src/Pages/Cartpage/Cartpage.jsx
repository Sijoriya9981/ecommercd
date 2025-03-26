import React, { useState } from 'react';
import { Link } from 'react-router-dom';
Link
import { RxCross2 } from "react-icons/rx";

Rating

import { Button, Rating } from '@mui/material';
import { GiShoppingBag } from "react-icons/gi";
import CartItem from './CartItem/CartItem';

const Cartpage = () => {

    return (
        <>

            <section className='section py-10 pb-10'>
                <div className="container w-[80%] max-w-[80%] flex gap-5">
                    <div className="leftPart w-[70%]">

                        <div className="shadow-md rounded-md  bg-white ">
                            <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.1)]">
                                <h2>Your Cart</h2>
                                <p className="mt-0">
                                    There are <span className='text-primary font-[500]'>2</span> products in your cart
                                </p>
                            </div>
                            <CartItem size={'S'} qty={1} />

                        </div>
                    </div>

                    <div className="rightSec w-[30%]">
                        <div className="shadow-md rounded-md  bg-white p-4">
                            <h3 className='pb-3'>Cart Totals</h3>
                            <hr />
                            <p className='flex items-center justify-between'>
                                <span className='text-[14px] font-[500]'>Subtotal</span>
                                <span className="text-primary">
                                    ₹1300.00
                                </span>
                            </p>

                            <p className='flex items-center justify-between'>
                                <span className='text-[14px] font-[500]'>Shipping</span>
                                <span className="">
                                    Free
                                </span>
                            </p>
                            <p className='flex items-center justify-between'>
                                <span className='text-[14px] font-[500]'>Estimate for</span>
                                <span className="">
                                    India
                                </span>
                            </p>
                            <p className='flex items-center justify-between'>
                                <span className='text-[14px] font-[500]'>Total</span>
                                <span className="text-primary">
                                    ₹1300.00
                                </span>
                            </p>
                            <br />
                            <Button className='btn-org w-full gap-1 flex'><GiShoppingBag className='text-[18px]' />Checkout</Button>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}

export default Cartpage;
