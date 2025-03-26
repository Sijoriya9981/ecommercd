import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
BannerBox
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css/navigation';
import BannerBox from '../BannerBox/BannerBox';


const AdsBannerSlider = ({ item }) => {
    return (
        <div className='py-5 pb-0 pl-8 w-full'>
            <Swiper
                slidesPerView={item}
                spaceBetween={20}
                navigation={true}
                modules={[Navigation]}
                className="smlbtn"
            >


                <SwiperSlide>
                    <BannerBox link={''} img={'https://img.freepik.com/free-vector/sales-promo-with-abstract-shapes_79603-1400.jpg?ga=GA1.1.130481975.1739469743&semt=ais_authors_boost'} />
                </SwiperSlide>

                <SwiperSlide>
                    <BannerBox link={''} img={'https://img.freepik.com/free-vector/realistic-sale-background-with-ripped-paper_52683-57681.jpg?ga=GA1.1.130481975.1739469743&semt=ais_authors_boost'} />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBox link={''} img={'https://img.freepik.com/free-vector/sales-promo-with-abstract-shapes_79603-1399.jpg?ga=GA1.1.130481975.1739469743&semt=ais_authors_boost'} />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBox link={''} img={'https://img.freepik.com/free-vector/sale-background-with-ripped-paper_23-2148829908.jpg?ga=GA1.1.130481975.1739469743&semt=ais_authors_boost'} />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBox link={''} img={'https://img.freepik.com/free-vector/realistic-sale-background-with-ripped-paper_52683-56933.jpg?ga=GA1.1.130481975.1739469743&semt=ais_authors_boost'} />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBox link={''} img={'https://img.freepik.com/free-vector/realistic-sale-background-with-ripped-paper_23-2148864543.jpg?ga=GA1.1.130481975.1739469743&semt=ais_authors_boost'} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default AdsBannerSlider;
