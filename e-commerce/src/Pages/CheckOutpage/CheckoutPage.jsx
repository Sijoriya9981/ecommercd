import React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
Button
import { IoBagCheckOutline } from "react-icons/io5";
const CheckoutPage = () => {
    return (
        <>
            <section className='py-10'>
                <div className="flex container gap-5">
                    <div className="leftcol w-[70%]">
                        <div className="card bg-white shadow-md p-5 rounded-md w-full">
                            <h1 className='text-[16px] font-[500]'>Billing Details</h1>
                            <form action="" className='w-full mt-5'>
                                <div className="flex items-center gap-3 pb-3">
                                    <div className="col w-[50%]">

                                        <TextField id="outlined-basic" type='text' required label="Full Name" variant="outlined" className='w-full' />
                                    </div>
                                    <div className="col w-[50%]">
                                        <TextField id="outlined-basic" type='text' label="Country" required variant="outlined" className='w-full' />

                                    </div>


                                </div>
                                <h6 className='text-[14px] font-[500] mb-1 mt-1'>Street Address *</h6>
                                <div className="col w-[100%] gap-2 mb-4">
                                    <TextField id="outlined-basic" type='text' label="House No. and Street Name" variant="outlined" className='w-full mt-2 mb-2' />
                                </div>
                                <div className="col w-[100%] gap-2">
                                    <TextField id="outlined-basic" type='text' label="Apartment, suite etc." variant="outlined" className='w-full mt-2 mb-2' />
                                </div>
                                <h6 className='text-[14px] font-[500] mb-2 mt-4'>Town/City *</h6>
                                <div className="col w-[100%] gap-2 mb-4">
                                    <TextField id="outlined-basic" type='text' label="City" variant="outlined" className='w-full mt-2 mb-2' />
                                </div>
                                <h6 className='text-[14px] font-[500] mb-2 mt-4'>State/Country *</h6>
                                <div className="col w-[100%] gap-2 mb-4">
                                    <TextField id="outlined-basic" type='text' label="State" variant="outlined" className='w-full mt-2 mb-2' />
                                </div>
                                <h6 className='text-[14px] font-[500] mb-2 mt-4'>Postcode/ZIP *</h6>
                                <div className="col w-[100%] gap-2 mb-4">
                                    <TextField id="outlined-basic" type='number' label="ZIP Code" variant="outlined" className='w-full mt-2 mb-2' />
                                </div>
                                <div className="flex items-center gap-3 pb-3">
                                    <div className="col w-[50%]">

                                        <TextField id="outlined-basic" type='number' required label="Phone Number" variant="outlined" className='w-full' />
                                    </div>
                                    <div className="col w-[50%]">
                                        <TextField id="outlined-basic" type='text' required label="Email Adress" variant="outlined" className='w-full' />

                                    </div>


                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="rightcol w-[30%]">
                        <div className="card shadow-md bg-white p-5 rounded-md">
                            <h2 className='mb-4'>Your Order</h2>
                            <div className="flex items-center justify-between  py-3 border-t border-b border-[rbga(0,0,0,0.4)]">
                                <span className='text-[14px] font-sans-[600]'>Product</span>
                                <span className='text-[14px] font-sans-[600]'>Subtotal</span>

                            </div>
                            <div className="mb-5 scroll max-h-[250px] overflow-y-scroll overflow-x-hidden">
                                <div className="flex items-center justify-between py-2">
                                    <div className="part1 flex items-center gap-2">
                                        <div className="img w-[60px] h-[60px] object-cover overflow-hidden  rounded-md group">
                                            <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781298/1736781294264_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-1-202311201747.jpg" className='w-full cursor-pointer transition-all group-hover:scale-105' alt="" srcset="" />
                                        </div>

                                        <div className="info">
                                            <h4 className='text-[13px]'>Denim Blue Jacket..</h4>
                                            <span className="text-[12px]">Qty : 1</span>
                                        </div>
                                    </div>
                                    <span className='text-[14px] font-[500]'>₹500.00</span>
                                </div>
                            </div>
                            <div className="px-2">

                                <Button className='btn-org w-full p'><IoBagCheckOutline className='text-[18px]' />Checkout</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CheckoutPage;
