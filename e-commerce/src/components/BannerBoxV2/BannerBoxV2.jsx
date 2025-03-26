import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';
Link
const BannerBoxV2 = ({ info, img }) => {
    return (
        <div className='bannerBoxV2 w-full overflow-hidden rounded-md group relative'>
            <img src={img} alt="" srcset="" className='w-full transition-all duration-150 group-hover:scale-105' />

            <div className={`info absolute p-5 top-0 ${info === 'left' ? 'left-0' : 'right-0 pl-14'} w-[70%] h-[100%] z-50 flex items-center justify-center flex-col gap-2`}>
                <h2 className='text-[20px] font-[500]'>Buy Men Bags with very low price</h2>
                <span className='text-[20px] font-[600] w-full text-primary'>₹400</span>
                <div className="w-full">

                    <Link to={'/'} className='text-[15px] font-[500] link underline linkbanner'>SHOP NOW</Link>
                </div>
            </div>
        </div>
    );
}

export default BannerBoxV2;
