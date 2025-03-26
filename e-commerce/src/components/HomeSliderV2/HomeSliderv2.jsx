import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Button } from '@mui/material';

const HomeSliderv2 = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                loop={true}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                className="HomeSliderv2"
            >
                <SwiperSlide>
                    <div className="item w-full rounded-md overflow-hidden relative">

                        <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737036776/1737036773579_sample-1.jpg" />
                        <div className="info absolute top-0 right-[-100%] w-[50%] h-[100%] z-50 p-8 flex items-center flex-col justify-center duration-200 opacity-0 transition-all">
                            <h4 className='text-[18px] font-[500] text-left w-full mb-3 relative right-[-100%] opacity-0 duration-500'>Big Saving Days Sale</h4>
                            <h2 className='text-[30px] font-[700] w-full relative right-[-100%] opacity-0 duration-500 '>Women Solid Round Green T-shirt</h2>
                            <h3 className='flex items-center gap-3 text-[18px] font-[500] w-full text-left mt-3 mb-3 relative right-[-100%] opacity-0 duration-500'>Starting At Only <span className='text-primary text-[30px] font-[500] '>₹300</span> </h3>
                            <div className="w-full relative bottom-[-100%] opacity-0 duration-500 btn_">


                                <Button className='btn-org '>SHOP NOW</Button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737037698/1737037696161_New_Project_45.jpg" />
                    <div className="info absolute top-0 right-[-100%] w-[50%] h-[100%] z-50 p-8 flex items-center flex-col justify-center duration-200 opacity-0 transition-all">
                        <h4 className='text-[18px] font-[500] text-left w-full mb-3 relative right-[-100%] opacity-0 duration-500'>Big Saving Days Sale</h4>
                        <h2 className='text-[30px] font-[700] w-full relative right-[-100%] opacity-0 duration-500 '>Apple iPhone 15 256GB Pink</h2>
                        < h3 className='flex items-center gap-3 text-[18px] font-[500] w-full text-left mt-3 mb-3 relative right-[-100%] opacity-0 duration-500'>Starting At Only <span className='text-primary text-[30px] font-[500]'>₹30000</span> </h3>
                        <div className="w-full relative bottom-[-100%] opacity-0 duration-500 btn_">


                            <Button className='btn-org '>SHOP NOW</Button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737085794/1737085794016_New_Project_49.jpg" />
                    <div className="info absolute top-0 right-[-100%] w-[50%] h-[100%] z-50 p-8 flex  items-center flex-col justify-center duration-200 opacity-0 transition-all">
                        <h4 className='text-[18px] font-[500] text-left w-full mb-3'>Big Saving Days Sale</h4>
                        <h2 className='text-[30px] font-[700] w-full relative right-[-100%] opacity-0 duration-500 '>Men Round Toe Lace-Up Lightweight PU Sneakers</h2>
                        <h3 className='flex items-center gap-3 text-[18px] font-[500] w-full text-left mt-3 mb-3 relative right-[-100%] opacity-0 duration-500'>Starting At Only <span className='text-primary text-[30px] font-[500]'>₹500</span> </h3>
                        <div className="w-full relative bottom-[-100%] opacity-0 duration-500 btn_">

                            <Button className='btn-org '>SHOP NOW</Button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div >
    );
}

export default HomeSliderv2;
