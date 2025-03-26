import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Homeslider = () => {
    return (
        <>
            <div className="homeSlider py-t py-8">
                <div className="container">
                    <Swiper
                        navigation={true}
                        loop={true}
                        spaceBetween={10}
                        modules={[Navigation, Autoplay]}

                        className="mySwiper sliderhome"
                        autoplay={{ delay: 2500, disableOnInteraction: false }}>
                        <SwiperSlide>
                            <div className="item rounded-[20px] overflow-hidden">
                                <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1739165904/1739165903970_file_1734525014348_NewProject_7.jpg" alt="Banner" srcset="" className='w-full h-64' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item rounded-[20px] overflow-hidden">
                                <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1739165930/1739165929706_file_1734525002307_1723967638078_slideBanner1.6bbeed1a0c8ffb494f7c.jpg" alt="Banner" srcset="" className='w-full h-64' />
                            </div> </SwiperSlide>
                        <SwiperSlide>
                            <div className="item rounded-[20px] overflow-hidden">
                                <img src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/216a7fdaa66c8d0f.jpg?q=20" alt="Banner" srcset="" className='w-full h-64' />
                            </div></SwiperSlide>
                        <SwiperSlide>
                            <div className="item rounded-[20px] overflow-hidden">                            <img src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/912c93218db5310a.jpeg?q=20" alt="Banner" srcset="" className='w-full h-64' />
                            </div></SwiperSlide>
                        <SwiperSlide>
                            <div className="item rounded-[20px] overflow-hidden">                            <img src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/1ef81f497320ac22.jpeg?q=20" alt="Banner" srcset="" className='w-full h-64' />
                            </div>  </SwiperSlide>


                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default Homeslider;
