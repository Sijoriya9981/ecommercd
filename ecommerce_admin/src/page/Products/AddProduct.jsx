import React, { useState } from 'react';
useState
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Rating from '@mui/material/Rating';
import UploadBox from '../../component/UploadBox/UploadBox';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { MdClose } from "react-icons/md";
import { FaCloudUploadAlt } from "react-icons/fa";
import { Button } from '@mui/material';
Button
const AddProduct = () => {
    const [Category, setCategory] = useState('');
    const [SubCategory, setSubCategory] = useState('');
    const [isFeatured, setisFeatured] = useState('');
    const [productrams, setproductrams] = useState('');
    const [productweight, setproductweight] = useState('');
    const [productsize, setproductsize] = useState('');


    return (
        <section className="p-5  bg-gray-50">
            <form action="" className='form p-8 py-3 '>
                <div className="scroll max-h-[70vh] overflow-y-scroll overflow-x-hidden">
                    <div className=" grid grid-cols-1 mb-4">

                        <div className="col">
                            <h3 className='text-[14px] font-[600] mb-1'>Product Name</h3>
                            <input type="text" name="" id="" className='w-full h-[40px] border border-[rgba(0,0,0,0.3)] focus:outline-none focus:border-[rgba(0,0,0,0.6)] rounded-sm p-3 text-sm' />
                        </div>
                    </div>
                    <div className=" grid grid-cols-1 mb-4">

                        <div className="col">
                            <h3 className='text-[14px] font-[600] mb-1'>Product Description</h3>
                            <textarea type="text" name="" id="" className='w-full h-[140px] border border-[rgba(0,0,0,0.3)] focus:outline-none focus:border-[rgba(0,0,0,0.6)] rounded-sm p-3 text-sm' />
                        </div>
                    </div>
                    <div className=" grid grid-cols-4 mb-4 gap-4 ">

                        <div className="col">
                            <h3 className='text-[14px] font-[600] mb-1'>Product Category</h3>

                            <Select
                                size='small'
                                labelId="demo-simple-select-label"
                                id="ProductCatDropDown"
                                value={Category}
                                className='w-full h-[40px] !border !border-[rgba(0,0,0,0.3)] focus:!outline-none focus:!border-[rgba(0,0,0,0.6)] rounded-sm '
                                label="Category"
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <MenuItem value={''}>None</MenuItem>

                                <MenuItem value={10}>Fashion</MenuItem>
                                <MenuItem value={20}>Beauty</MenuItem>
                                <MenuItem value={30}>Fashion</MenuItem>
                            </Select>
                        </div>
                        <div className="col">
                            <h3 className='text-[14px] font-[600] mb-1'>Product Sub Category</h3>

                            <Select
                                size='small'
                                labelId="demo-simple-select-label"
                                id="ProductCatDropDown"
                                value={SubCategory}
                                className='w-full h-[40px] !border !border-[rgba(0,0,0,0.3)] focus:!outline-none focus:!border-[rgba(0,0,0,0.6)] rounded-sm '
                                label="Category"
                                onChange={(e) => setSubCategory(e.target.value)}
                            >
                                <MenuItem value={''}>None</MenuItem>

                                <MenuItem value={10}>Men</MenuItem>
                                <MenuItem value={20}>Women</MenuItem>
                                <MenuItem value={30}>Kids</MenuItem>
                            </Select>
                        </div>
                        <div className="col">
                            <h3 className='text-[14px] font-[600] mb-1'>Product Price</h3>
                            <input type="number" name="" id="" className='w-full h-[40px] border border-[rgba(0,0,0,0.3)] focus:outline-none focus:border-[rgba(0,0,0,0.6)] rounded-sm p-3 text-sm' />
                        </div>
                        <div className="col">
                            <h3 className='text-[14px] font-[600] mb-1'>Product Old Price</h3>
                            <input type="number" name="" id="" className='w-full h-[40px] border border-[rgba(0,0,0,0.3)] focus:outline-none focus:border-[rgba(0,0,0,0.6)] rounded-sm p-3 text-sm' />
                        </div>
                    </div>

                    <div className=" grid grid-cols-4 mb-4 gap-4 ">

                        <div className="col">
                            <h3 className='text-[14px] font-[600] mb-1'>Is Featured</h3>

                            <Select
                                size='small'
                                labelId="demo-simple-select-label"
                                id="ProductCatDropDown"
                                value={isFeatured}
                                className='w-full h-[40px] !border !border-[rgba(0,0,0,0.3)] focus:!outline-none focus:!border-[rgba(0,0,0,0.6)] rounded-sm '
                                label="Category"
                                onChange={(e) => setisFeatured(e.target.value)}
                            >
                                <MenuItem value={''}>None</MenuItem>

                                <MenuItem value={10}>True</MenuItem>
                                <MenuItem value={20}>False</MenuItem>
                            </Select>
                        </div>
                        <div className="col">
                            <h3 className='text-[14px] font-[600] mb-1'>Product Stock</h3>
                            <input type="number" name="" id="" className='w-full h-[40px] border border-[rgba(0,0,0,0.3)] focus:outline-none focus:border-[rgba(0,0,0,0.6)] rounded-sm p-3 text-sm' />
                        </div>
                        <div className="col">
                            <h3 className='text-[14px] font-[600] mb-1'>Product Brand</h3>
                            <input type="text" name="" id="" className='w-full h-[40px] border border-[rgba(0,0,0,0.3)] focus:outline-none focus:border-[rgba(0,0,0,0.6)] rounded-sm p-3 text-sm' />
                        </div>
                        <div className="col">
                            <h3 className='text-[14px] font-[600] mb-1'>Product Discount</h3>
                            <input type="number" name="" id="" className='w-full h-[40px] border border-[rgba(0,0,0,0.3)] focus:outline-none focus:border-[rgba(0,0,0,0.6)] rounded-sm p-3 text-sm' />
                        </div>
                    </div>
                    <div className=" grid grid-cols-4 mb-4 gap-4 ">

                        <div className="col">
                            <h3 className='text-[14px] font-[600] mb-1'>Product Rams</h3>

                            <Select
                                size='small'
                                labelId="demo-simple-select-label"
                                id="ProductCatDropDown"
                                value={productrams}
                                className='w-full h-[40px] !border !border-[rgba(0,0,0,0.3)] focus:!outline-none focus:!border-[rgba(0,0,0,0.6)] rounded-sm '
                                label="Category"
                                onChange={(e) => setproductrams(e.target.value)}
                            >
                                <MenuItem value={''}>None</MenuItem>

                                <MenuItem value={'4GB'}>4GB</MenuItem>
                                <MenuItem value={'6GB'}>6GB</MenuItem>
                                <MenuItem value={'8GB'}>8GB</MenuItem>
                            </Select>
                        </div>
                        <div className="col">
                            <h3 className='text-[14px] font-[600] mb-1'>Product Weight</h3>

                            <Select
                                size='small'
                                labelId="demo-simple-select-label"
                                id="ProductCatDropDown"
                                value={productweight}
                                className='w-full h-[40px] !border !border-[rgba(0,0,0,0.3)] focus:!outline-none focus:!border-[rgba(0,0,0,0.6)] rounded-sm '
                                label="Category"
                                onChange={(e) => setproductweight(e.target.value)}
                            >
                                <MenuItem value={''}>None</MenuItem>

                                <MenuItem value={10}>2KG</MenuItem>
                                <MenuItem value={20}>4KG</MenuItem>
                                <MenuItem value={30}>5KG</MenuItem>
                            </Select>
                        </div>
                        <div className="col">
                            <h3 className='text-[14px] font-[600] mb-1'>Product Size</h3>

                            <Select
                                size='small'
                                labelId="demo-simple-select-label"
                                id="ProductCatDropDown"
                                value={productsize}
                                className='w-full h-[40px] !border !border-[rgba(0,0,0,0.3)] focus:!outline-none focus:!border-[rgba(0,0,0,0.6)] rounded-sm '
                                label="Category"
                                onChange={(e) => setproductsize(e.target.value)}
                            >
                                <MenuItem value={''}>None</MenuItem>

                                <MenuItem value={'S'}>S</MenuItem>
                                <MenuItem value={'M'}>M</MenuItem>
                                <MenuItem value={'L'}>L</MenuItem>
                            </Select>
                        </div>
                        <div className="col">
                            <h3 className='text-[14px] font-[600] mb-2'>Product Rating</h3>
                            <Rating name='half-rating' defaultValue={2.5} precision={0.5} />
                        </div>
                    </div>

                    <div className="col w-full p-5 px-0">
                        <h3 className='text-[18px] font-[600] mb-1'>Media & Images</h3>

                        <div className="grid grid-cols-7 gap-4">

                            <div className="uploadBoxWrapper relative">
                                <span className="absolute top-[-7px] right-[-10px] cursor-pointer  z-50 w-[20px] h-[20px] rounded-full overflow-hidden bg-red-600 flex justify-center items-center "><MdClose className='text-[14px] text-white' /></span>

                                <div className="uploadBox p-0 rounded-md overflow-hidden border border-dashed  border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex items-center justify-center flex-col relative">
                                    <LazyLoadImage
                                        alt={"image"}
                                        className='w-full h-full object-cover'
                                        effect="blur"
                                        wrapperProps={{
                                            // If you need to, you can tweak the effect transition using the wrapper style.
                                            style: { transitionDelay: "0.7s" },
                                        }}
                                        src={'https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781298/1736781294264_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-1-202311201747.jpg'} // use normal <img> attributes as props
                                    />

                                </div>


                            </div>
                            <div className="uploadBoxWrapper relative">
                                <span className="absolute top-[-7px] right-[-10px] cursor-pointer  z-50 w-[20px] h-[20px] rounded-full overflow-hidden bg-red-600 flex justify-center items-center "><MdClose className='text-[14px] text-white' /></span>

                                <div className="uploadBox p-0 rounded-md overflow-hidden border border-dashed  border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex items-center justify-center flex-col relative">
                                    <LazyLoadImage
                                        alt={"image"}
                                        className='w-full h-full object-cover'
                                        effect="blur"
                                        wrapperProps={{
                                            // If you need to, you can tweak the effect transition using the wrapper style.
                                            style: { transitionDelay: "0.7s" },
                                        }}
                                        src={'https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781298/1736781294264_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-1-202311201747.jpg'} // use normal <img> attributes as props
                                    />

                                </div>


                            </div>
                            <div className="uploadBoxWrapper relative">
                                <span className="absolute top-[-7px] right-[-10px] cursor-pointer  z-50 w-[20px] h-[20px] rounded-full overflow-hidden bg-red-600 flex justify-center items-center "><MdClose className='text-[14px] text-white' /></span>

                                <div className="uploadBox p-0 rounded-md overflow-hidden border border-dashed  border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex items-center justify-center flex-col relative">
                                    <LazyLoadImage
                                        alt={"image"}
                                        className='w-full h-full object-cover'
                                        effect="blur"
                                        wrapperProps={{
                                            // If you need to, you can tweak the effect transition using the wrapper style.
                                            style: { transitionDelay: "0.7s" },
                                        }}
                                        src={'https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781298/1736781294264_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-1-202311201747.jpg'} // use normal <img> attributes as props
                                    />

                                </div>


                            </div>
                            <div className="uploadBoxWrapper relative">
                                <span className="absolute top-[-7px] right-[-10px] cursor-pointer  z-50 w-[20px] h-[20px] rounded-full overflow-hidden bg-red-600 flex justify-center items-center "><MdClose className='text-[14px] text-white' /></span>

                                <div className="uploadBox p-0 rounded-md overflow-hidden border border-dashed  border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex items-center justify-center flex-col relative">
                                    <LazyLoadImage
                                        alt={"image"}
                                        className='w-full h-full object-cover'
                                        effect="blur"
                                        wrapperProps={{
                                            // If you need to, you can tweak the effect transition using the wrapper style.
                                            style: { transitionDelay: "0.7s" },
                                        }}
                                        src={'https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781298/1736781294264_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-1-202311201747.jpg'} // use normal <img> attributes as props
                                    />

                                </div>


                            </div>
                            <div className="uploadBoxWrapper relative">
                                <span className="absolute top-[-7px] right-[-10px] cursor-pointer  z-50 w-[20px] h-[20px] rounded-full overflow-hidden bg-red-600 flex justify-center items-center "><MdClose className='text-[14px] text-white' /></span>

                                <div className="uploadBox p-0 rounded-md overflow-hidden border border-dashed  border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex items-center justify-center flex-col relative">
                                    <LazyLoadImage
                                        alt={"image"}
                                        className='w-full h-full object-cover'
                                        effect="blur"
                                        wrapperProps={{
                                            // If you need to, you can tweak the effect transition using the wrapper style.
                                            style: { transitionDelay: "0.7s" },
                                        }}
                                        src={'https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781298/1736781294264_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-1-202311201747.jpg'} // use normal <img> attributes as props
                                    />

                                </div>


                            </div>
                            <UploadBox multiple={true} />
                        </div>

                    </div>
                    <hr />
                    <br />
                </div>
                <Button type='submit' className='pt-10 btn-blue btn-lg flex gap-2'><FaCloudUploadAlt className='text-[14px]' />Publish & View</Button>
            </form>
        </section>
    );
}

export default AddProduct;
