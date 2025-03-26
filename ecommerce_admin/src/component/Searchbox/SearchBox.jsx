import React from 'react';

import { CiSearch } from "react-icons/ci";
const SearchBox = () => {
    return (
        <>
            <div className="w-full h-auto mb-[0px] rounded-md border border-[rgba(0,0,0,0.1)] bg-[#f1f1f1] relative">
                <input
                    className='w-full h-[30px] border border-[rgba(0,0,0,0.4)] bg-[#f1f1f1] p-5 pl-7 focus:outline-none focus:border-[rgba(0,0,0,0.8)] rounded-md text-[12px]'
                    type="text"
                    name=""
                    id=""
                />
                <CiSearch className='absolute top-[10px] left-1 text-[20px] z-50 pointer-events-none' />
            </div>

        </>
    );
}

export default SearchBox;
