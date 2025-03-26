import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import { Link } from 'react-router-dom';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
const CategorySlider = () => {
    return (
        <div className='CategorySlider mb-10'>
            <div className="container">
                <Swiper
                    slidesPerView={7}
                    spaceBetween={10}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Link to={'/'}>
                            <div className="item py-7 px-3 bg-white rounded-sm flex items-center justify-center flex-col">
                                <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107557/1737107555729_fash.png" alt="" className='w-[60px]' />
                                <h3 className='text-[14px] font-[500] mt-3'>Fashion</h3>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={'/'}>
                            <div className="item py-7 px-3 bg-white rounded-sm flex items-center justify-center flex-col">
                                <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107649/1737107647134_ele.png" alt="" className='w-[60px]' />
                                <h3 className='text-[14px] font-[500] mt-3'>Electronics</h3>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={'/'}>
                            <div className="item py-7 px-3 bg-white rounded-sm flex items-center justify-center flex-col">
                                <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107665/1737107663085_bag.png" alt="" className='w-[60px]' />
                                <h3 className='text-[14px] font-[500] mt-3'>Bags</h3>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={'/'}>
                            <div className="item py-7 px-3 bg-white rounded-sm flex items-center justify-center flex-col">
                                <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107678/1737107676260_foot.png" alt="" className='w-[60px]' />
                                <h3 className='text-[14px] font-[500] mt-3'>Footwear</h3>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={'/'}>
                            <div className="item py-7 px-3 bg-white rounded-sm flex items-center justify-center flex-col">
                                <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107705/1737107702876_beauty.png" alt="" className='w-[60px]' />
                                <h3 className='text-[14px] font-[500] mt-3'>Beauty Products</h3>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={'/'}>
                            <div className="item py-7 px-3 bg-white rounded-sm flex items-center justify-center flex-col">
                                <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107691/1737107689261_gro.png" alt="" className='w-[60px]' />
                                <h3 className='text-[14px] font-[500] mt-3'>Groceries</h3>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={'/'}>
                            <div className="item py-7 px-3 bg-white rounded-sm flex items-center justify-center flex-col">
                                <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107718/1737107715395_well.png" alt="" className='w-[60px]' />
                                <h3 className='text-[14px] font-[500] mt-3'>Wellness</h3>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={'/'}>
                            <div className="item py-7 px-3 bg-white rounded-sm flex items-center justify-center flex-col">
                                <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1739065363/1739065363328_jw.png" alt="" className='w-[60px]' />
                                <h3 className='text-[14px] font-[500] mt-3'>Jewellery</h3>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={'/'}>
                            <div className="item py-7 px-3 bg-white rounded-sm flex items-center justify-center flex-col">
                                <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1739166024/1739166024154_th.jpg" alt="" className='w-[60px]' />
                                <h3 className='text-[14px] font-[500] mt-3'>Sports</h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
}

export default CategorySlider;
