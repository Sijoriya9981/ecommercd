import React from 'react';
import Homeslider from '../components/HomeSlider/Homeslider';
import CategorySlider from '../components/CategorySlider/CategorySlider';
import { FaTruckFast } from "react-icons/fa6";
import AdsBannerSlider from '../components/AdsBannerSlider/AdsBannerSlider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Box from '@mui/material/Box';
import ProductSlider from '../components/ProductSlider/ProductSlider';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles

import 'swiper/css';

import { Link } from 'react-router-dom';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import BlogItem from '../components/BlogItem/BlogItem';
import Footer from '../components/Footer/Footer';
import HomeSliderv2 from '../components/HomeSliderV2/HomeSliderv2';
import BannerBoxV2 from '../components/BannerBoxV2/BannerBoxV2';

const Home = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        < >
            <Homeslider />

            <CategorySlider />


            <section className='bg-white py-8 pb-0'>
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="leftSec w-[100%]">
                            <h2 className='text-[20px] font-[600]'>Popular Products</h2>
                            <p className='text-[18px] font-[400]'>Do not miss the current offers until the end of March</p>

                        </div>

                        <div className="rightSec w-[60%]">
                            <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    variant="scrollable"
                                    scrollButtons
                                    allowScrollButtonsMobile
                                    aria-label="scrollable force tabs example"
                                >
                                    <Tab label="Fashion" />
                                    <Tab label="Electronics" />
                                    <Tab label="Bags" />
                                    <Tab label="Footwear" />
                                    <Tab label="Beauty Products" />
                                    <Tab label="Groceries" />
                                    <Tab label="Wallness" />
                                    <Tab label="Jewellery" />
                                    <Tab label="Sports" />
                                </Tabs>
                            </Box>
                        </div>
                    </div>
                    <ProductSlider item={6} />
                </div>
            </section>
            <section className='py-6'>
                <div className="flex container  gap-5" >
                    <div className="part1 w-[70%]">
                        <HomeSliderv2 />
                    </div>
                    <div className="part2 w-[30%]  flex items-center justify-between flex-col gap-3">
                        <BannerBoxV2 info={"right"} img={'https://res.cloudinary.com/duqoh8gf5/image/upload/v1737022028/1737022025465_New_Project_55.jpg'} />
                        <BannerBoxV2 info={"left"} img={'https://res.cloudinary.com/duqoh8gf5/image/upload/v1737020760/1737020756772_New_Project_1.png'} />
                    </div>
                </div>
            </section>


            <section className='py-16 pt-5 bg-white '>
                <div className="container">
                    <div className="freeshipping w-[80%] m-auto  p-4  border border-[#ff5252] flex items-center justify-between rounded-[5px] mb-5">
                        <div className="col1 flex items-center gap-3 ">

                            <FaTruckFast className='text-[30px]' />
                            <span className='text-[15px] font-[500] uppercase'> Free Shipping</span>
                        </div>
                        <div className="col2">
                            <p className='mb-0 font-[500]'>Free Delivery Now On Your First Order and over ₹500</p>
                        </div>
                        <p className="font-bold text-[15p]">-Only ₹500*</p>
                    </div >
                    <AdsBannerSlider item={4} />

                </div>
            </section>

            <section className="py-5 pt-0 bg-white">
                <div className="container">
                    <h2 className="text-[20px] font-[600] ">Latest Product</h2>
                    <ProductSlider item={6} />
                    <AdsBannerSlider item={4} />

                </div>
            </section>
            <section className="py-5 pt-0 bg-white">
                <div className="container">
                    <h2 className="text-[20px] font-[600] ">Featured Product</h2>
                    <ProductSlider item={6} />
                    <AdsBannerSlider item={3} />

                </div>
            </section>
            <section className="py-5 pb-8  pt-0 bg-white blogSection">
                <div className=" container">
                    <h2 className="text-[20px] font-[600] mb-4">From the Blog</h2>

                    <Swiper
                        slidesPerView={4}
                        spaceBetween={20}
                        navigation={true}
                        modules={[Navigation]}
                        className="blogslider"
                    >

                        <SwiperSlide>
                            <BlogItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogItem />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>


        </>
    );
}

export default Home;
