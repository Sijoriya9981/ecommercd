import React from 'react';
import { CiCalendarDate } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
Link
const BlogItem = () => {
    return (
        <div className="blogItem group cursor-pointer">
            <div className="imgWrapper w-full overflow-hidden rounded-md relative">
                <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737097090/1737097087465_blog-001-1536x872.webp" alt="" srcset="" className='w-full transition-all group-hover:scale-105 group-hover:rotate-1' />
                <span className="flex items-center justify-center text-white absolute bottom-[15px] right-[15px] z-50 bg-primary rounded-md p-1 text-[12px] font-[400] gap-1">
                    <CiCalendarDate className='text-[18px]' /> 5 APRIL ,2025
                </span>
            </div>
            <div className="info py-4">
                <h2 className='text-[16px] font-[500] text-black'  >  <Link to=''>Nullam ullamcorper ornare molestie</Link></h2>
                <p className='text-[14px] font-[300] text-[rgba(0,0,0,0.9)] mb-1'>Lorem ipsumalias unde explicabo deleniti! Consequatur porro, veniam blanditiis ullam alias, a soluta optio laudantium,
                </p>
                <Link className='link font-[500] text-[15px] flex items-center '>Read More <IoIosArrowForward /></Link>
            </div>

        </div>
    );
}
export default BlogItem;
