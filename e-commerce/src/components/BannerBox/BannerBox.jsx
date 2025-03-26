import React from 'react';
import { Link } from 'react-router-dom';
Link
const BannerBox = ({ img, link }) => {
    return (
        <div>
            <div className="box bannerBox overflow-hidden rounded-md group">
                <Link to={Link}>
                    <img src={img} alt="" className='w-full group-hover:scale-100' srcset="" /></Link>
            </div>
        </div>
    );
}

export default BannerBox;
