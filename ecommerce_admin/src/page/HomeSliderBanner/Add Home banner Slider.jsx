import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import UploadBox from '../../component/UploadBox/UploadBox';
import { MdClose } from "react-icons/md";
import { Button } from '@mui/material';
Button
import { FaCloudUploadAlt } from "react-icons/fa";

UploadBox
const AddHomeBannerSlider = () => {
    return (
        <>
            <section className="p-5  bg-gray-50">
                <form action="" className='form p-8 py-3 '>
                    <div className="scroll max-h-[70vh] overflow-y-scroll overflow-x-hidden pr-4">
                        <div className="grid grid-cols-7 gap-4">

                            <div className="uploadBoxWrapper relative">
                                <span className="absolute top-[-1px] right-[-1px] cursor-pointer  z-50 w-[20px] h-[20px] rounded-full overflow-hidden bg-red-600 flex justify-center items-center "><MdClose className='text-[14px] text-white' /></span>

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
                    <div className="w-[250px]">

                        <Button type='submit' className='pt-10 btn-blue btn-lg flex gap-2'><FaCloudUploadAlt className='text-[14px]' />Publish & View</Button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default AddHomeBannerSlider;
