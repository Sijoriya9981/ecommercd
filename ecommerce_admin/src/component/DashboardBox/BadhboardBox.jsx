import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import { FiGift } from "react-icons/fi";
import { IoStatsChart } from "react-icons/io5";
import { AiOutlinePieChart } from "react-icons/ai";
import { BsBank } from "react-icons/bs";
import { LiaProductHunt } from "react-icons/lia";
const DashboardBox = () => {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className="DashboardBoxesSlider"
            >
                <SwiperSlide>
                    <div className="box bg-[#3872fa] p-5 rounded-md cursor-pointer   border border-[rbga(0,0,0,0.1)] flex items-center gap-4">
                        <FiGift className='text-[30px] !text-white' />
                        <div className="info w-[70%]  text-white">
                            <h3 className="text text-white">New Orders</h3>
                            <b>1,3390</b>
                        </div>
                        <IoStatsChart className='text-[50px] text-[#fff]' />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="box p-5 bg-[#38fa65] rounded-md cursor-pointer   border border-[rbga(0,0,0,0.1)] flex items-center gap-4">
                        <AiOutlinePieChart className='text-[40px] text-[#fff]' />
                        <div className="info w-[70%] text-white">
                            <h3 className="text">Sales</h3>
                            <b>$57839333</b>
                        </div>
                        <IoStatsChart className=' text-[50px] text-[#fff]' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="box p-5 bg-[#9c38fa] rounded-md cursor-pointer   border border-[rbga(0,0,0,0.1)] flex items-center gap-4">
                        <BsBank className='text-[30px] text-[#fff]' />
                        <div className="info w-[70%] ">
                            <h3 className="text text-white">Revenue</h3>
                            <b className='text-white'>$1,33903238</b>
                        </div>
                        <IoStatsChart className='text-[50px] text-[#9c38fa]' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="box p-5 bg-[#fa388f] rounded-md cursor-pointer   border border-[rbga(0,0,0,0.1)] flex items-center gap-4">
                        <LiaProductHunt className='text-[40px] text-[#fff]' />
                        <div className="info w-[70%] text-white ">
                            <h3 className="text">Total Prodcuts</h3>
                            <b>33338</b>
                        </div>
                        <IoStatsChart className='text-[50px] text-[#fff]' />
                    </div>
                </SwiperSlide>


            </Swiper>
        </>
    );
}

export default DashboardBox;
