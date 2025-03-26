import React from 'react';
import '../style.css';
import { Button } from '@mui/material';
import { IoIosSearch } from "react-icons/io";

const Seachbar = () => {
    return (
        <div className='searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative'>
            <input
                type="text"
                name=""
                placeholder='Search for products...'
                className='w-full h-[35px] focus:outline-none bg-inherit mt-2 p-2 text-[15px]'
                id=""
            />
            <Button className='!absolute top-[5px] right-[5px] z-50 !w-[35px] !min-w-[37px] h-[37px] !rounded-full !text-black'>
                <IoIosSearch className='text-[#4e4e4e] text-[22px]' />
            </Button>
        </div>
    );
}

export default Seachbar;
