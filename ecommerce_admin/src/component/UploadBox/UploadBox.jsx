import React from 'react';
import { BsImages } from "react-icons/bs";
const UploadBox = ({ multiple }) => {
    return (
        <>
            <div className="uploadBox p-3 rounded-md overflow-hidden border border-dashed  border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex items-center justify-center flex-col relative">
                <BsImages className='text-[50px] opacity-35 pointer-events-none' />
                <h4 className='text-[14px]  pointer-events-none'>Image Upload</h4>
                <input type="file" name="" multiple={multiple !== undefined ? multiple : false} id="" className='absolute top-0 left-0 w-full h-full z-50  opacity-0' />
            </div>
        </>
    );
}

export default UploadBox;
