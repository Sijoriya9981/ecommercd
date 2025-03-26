import React, { useState } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import ProductZoom from '../../components/ProductZoom/ProductZoom';
Button

import { Button, Rating } from '@mui/material';
import QtyBox from '../../components/QtyBox/QtyBox';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import ProductDetailsec from '../../components/ProductDetailsec/ProductDetailsec';
ProductSlider

const ProductDetail = () => {
    const [ActiveTab, setActiveTab] = useState(0)

    return (
        <>
            <div className=' py-5 '>
                <div className="container">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/" className='link transition-all'>
                            Home
                        </Link>
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/"
                            className='link transition-all'
                        >
                            Fashion
                        </Link>
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/"
                            className='link transition-all'
                        >
                            Denim Jacket
                        </Link>
                    </Breadcrumbs>
                </div>



            </div >
            <section className="productdetaisec bg-white py-5">
                <div className="container flex gap-4  ">
                    <div className="productzoomcontainer w-[40%] gap-8">
                        <ProductZoom />
                    </div>

                    <div className="productcontain w-[60%] pr-10 pl-10">

                        <ProductDetailsec />
                    </div>
                </div>
                <div className="container pt-8">
                    <div className="flex items-center gap-4 mb-5" >
                        <span className={`link text-[18px] cursor-pointer font-[500] ${ActiveTab === 0 && 'text-primary'}`} onClick={() => setActiveTab(0)}>Description</span>
                        <span className={`link text-[18px] cursor-pointer font-[500] ${ActiveTab === 1 && 'text-primary'}`} onClick={() => setActiveTab(1)}>Product Details</span>
                        <span className={`link text-[18px] cursor-pointer font-[500] ${ActiveTab === 2 && 'text-primary'}`} onClick={() => setActiveTab(2)}>Reviews(5)</span>

                    </div>
                    {
                        ActiveTab === 0 && (<div className="shadow-md w-full py-5 px-8  rounded-md mb-4 border border-[rbga(0,0,0,0.7)]">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos sunt obcaecati, facere esse magnam dicta consequuntur distinctio. Eos soluta id reiciendis explicabo atque natus ullam. Voluptates eligendi ipsa pariatur?</p>
                            <h4>Lightweight Design</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dicta esse libero dolorum sequi doloremque quisquam saepe necessitatibus consequuntur aspernatur eaque ipsum totam consequatur eligendi natus nam a, porro nihil?</p>
                            <h4>Free Shipping & Return</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis adipisci quaerat vitae odio sit id dolorem incidunt soluta dignissimos vero! Dolor </p>
                            <h4>Money Back Gurantee</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis adipisci quaerat vitae odio sit id dolorem incidunt soluta dignissimos vero! Dolor </p>
                            <h4>Online Support</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis adipisci quaerat vitae odio sit id dolorem incidunt soluta dignissimos vero! Dolor </p>
                        </div>)
                    }
                    {
                        ActiveTab === 1 &&
                        (
                            <div className="shadow-md w-full py-5 px-8 rounded-md mb-4 border border-[rgba(255,255,255,0.7)]">
                                <div className="relative overflow-x-auto">
                                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">

                                        <tbody className='border !border-[rgba(204,204,204,0.7)]'>
                                            <tr className="border-b dark:bg-gray-800 dark:border-gray-700 !border-[rgba(204,204,204,0.7)]">
                                                <td className="px-6 py-2 border-r dark:border-gray-600 font-[600]">Product Name</td>
                                                <td className="px-3 py-2 pr-20">Denim Jean Jacket</td>
                                            </tr>
                                            <tr className="border-b dark:bg-gray-800 dark:border-gray-700 !border-[rgba(204,204,204,0.7)]">
                                                <td className="px-6 py-2 border-r dark:border-gray-600 font-[600]">Material</td>
                                                <td className="px-3 py-2 pr-20">100% Cotton Denim</td>
                                            </tr>
                                            <tr className="border-b dark:bg-gray-800 dark:border-gray-700 !border-[rgba(204,204,204,0.7)]">
                                                <td className="px-6 py-2 border-r dark:border-gray-600 font-[600]">Color</td>
                                                <td className="px-3 py-2 pr-20">Light Blue Wash</td>
                                            </tr>
                                            <tr className="border-b dark:bg-gray-800 dark:border-gray-700 !border-[rgba(204,204,204,0.7)]">
                                                <td className="px-6 py-2 border-r dark:border-gray-600 font-[600]">Size Range</td>
                                                <td className="px-3 py-2 pr-20">XS, S, M, L, XL, XXL</td>
                                            </tr>
                                            <tr className="border-b dark:bg-gray-800 dark:border-gray-700 !border-[rgba(204,204,204,0.7)]">
                                                <td className="px-6 py-2 border-r dark:border-gray-600 font-[600]">Fit</td>
                                                <td className="px-3 py-2 pr-20">Regular Fit</td>
                                            </tr>
                                            <tr className="border-b dark:bg-gray-800 dark:border-gray-700 !border-[rgba(204,204,204,0.7)]">
                                                <td className="px-6 py-2 border-r dark:border-gray-600 font-[600]">Closure Type</td>
                                                <td className="px-3 py-2 pr-20">Button Front</td>
                                            </tr>
                                            <tr className="border-b dark:bg-gray-800 dark:border-gray-700 !border-[rgba(204,204,204,0.7)]">
                                                <td className="px-6 py-2 border-r dark:border-gray-600 font-[600]">Sleeve Style</td>
                                                <td className="px-3 py-2 pr-20">Long Sleeves with Button Cuffs</td>
                                            </tr>
                                            <tr className="border-b dark:bg-gray-800 dark:border-gray-700 !border-[rgba(204,204,204,0.7)]">
                                                <td className="px-6 py-2 border-r dark:border-gray-600 font-[600]">Pockets</td>
                                                <td className="px-3 py-2 pr-20">2 Chest Pockets, 2 Side Pockets</td>
                                            </tr>
                                            <tr className="border-b dark:bg-gray-800 dark:border-gray-700 !border-[rgba(204,204,204,0.7)]">
                                                <td className="px-6 py-2 border-r dark:border-gray-600 font-[600]">Care Instructions</td>
                                                <td className="px-3 py-2 pr-20">Machine Wash Cold, Tumble Dry Low</td>
                                            </tr>
                                            <tr className="border-b dark:bg-gray-800 dark:border-gray-700 !border-[rgba(204,204,204,0.7)]">
                                                <td className="px-6 py-2 border-r dark:border-gray-600 font-[600]">Price</td>
                                                <td className="px-3 py-2 pr-20">₹900</td>
                                            </tr>
                                            <tr className="border-b dark:bg-gray-800 dark:border-gray-700 !border-[rgba(204,204,204,0.7)]">
                                                <td className="px-6 py-2 border-r dark:border-gray-600 font-[600]">Weight</td>
                                                <td className="px-3 py-2 pr-20">1.2 lbs</td>
                                            </tr>
                                            <tr className="border-b dark:bg-gray-800 dark:border-gray-700 !border-[rgba(204,204,204,0.7)]">
                                                <td className="px-6 py-2 border-r dark:border-gray-600 font-[600]">Warranty</td>
                                                <td className="px-3 py-2 pr-20">1 Year Limited Warranty</td>
                                            </tr>
                                            <tr className="border-b dark:bg-gray-800 dark:border-gray-700 !border-[rgba(204,204,204,0.7)]">
                                                <td className="px-6 py-2 border-r dark:border-gray-600 font-[600]">Manufacturer</td>
                                                <td className="px-3 py-2 pr-20">XYZ Clothing Co.</td>
                                            </tr>
                                            <tr className="border-b dark:bg-gray-800 dark:border-gray-700 !border-[rgba(204,204,204,0.7)]">
                                                <td className="px-6 py-2 border-r dark:border-gray-600 font-[600]">Country of Origin</td>
                                                <td className="px-3 py-2 pr-20">Made in USA</td>
                                            </tr>
                                        </tbody>

                                    </table>
                                </div>
                            </div>
                        )
                    }
                    {
                        ActiveTab === 2 && (
                            <div className="shadow-md w-[70%] py-5 px-8 rounded-md mb-4 border border-[rgba(255,255,255,0.7)]">


                                <div className="w-full prductreviewscontainer">
                                    <h2 className='text-[18px] font-[500]'>Customers Reviews</h2>
                                    <div className="scroll reviewscroll  mt-1 w-full max-h-[200px] overflow-y-scroll overflow-x-hidden">
                                        <div className="mt-5 mb-5 pr-2 pb-2 border-b border-[rgba(197,197,197,0.7)] reviews w-full flex items-center justify-between">
                                            <div className="info w-[60%] flex items-center gap-3">
                                                <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">

                                                    <img className='w-full ' src="data:image/jpeg;base64,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" alt="" srcset="" />



                                                </div>
                                                <div className="w-[80%]">
                                                    <h4 className='text-[16px]'>UserName</h4>
                                                    <h5 className='text-[13px] mb-0'>Date of review</h5>
                                                    <p className='text-[14px] mb-0 mt-0 '>Review</p>
                                                </div>

                                            </div>
                                            <Rating name='size-small' defaultValue={4} readOnly />
                                        </div>
                                        <div className="mt-5 mb-5 pr-2 pb-2 border-b border-[rgba(197,197,197,0.7)] reviews w-full flex items-center justify-between">
                                            <div className="info w-[60%] flex items-center gap-3">
                                                <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">

                                                    <img className='w-full ' src="data:image/jpeg;base64,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" alt="" srcset="" />



                                                </div>
                                                <div className="w-[80%]">
                                                    <h4 className='text-[16px]'>UserName</h4>
                                                    <h5 className='text-[13px] mb-0'>Date of review</h5>
                                                    <p className='text-[14px] mb-0 mt-0 '>Review</p>
                                                </div>

                                            </div>
                                            <Rating name='size-small' defaultValue={4} readOnly />
                                        </div>


                                    </div>
                                    <br />
                                    <div className="reviewform p-4 rounded-md bg-[#ebebeb]">
                                        <h2 className='text-[18px]'> Add a Review</h2>
                                        <form className='w-full mt-5' action=''>
                                            <TextField
                                                id="outlined-multiline-static"
                                                label="Write a review...."
                                                multiline
                                                rows={5}

                                                className='w-full'
                                            />
                                            <br />
                                            <br />
                                            <Rating name='size-small' defaultValue={0} />
                                            <div className="flex items-center mt-5">
                                                <Button className='btn-org'>Submit Review</Button>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>)
                    }


                </div>
                <div className="container mt-5">
                    <h2 className="text-[20px] font-[600] ">Related Product</h2>
                    <ProductSlider item={6} />
                </div>
            </section>
        </>

    );
}

export default ProductDetail;
