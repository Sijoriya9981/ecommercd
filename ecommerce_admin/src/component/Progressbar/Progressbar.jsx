import React from 'react';

const Progressbar = ({ value, type }) => {
    return (
        <div className='w-[100px] h-auto overflow-hidden rounded-md bg-[#f1f1f1]'>
            <span className={`flex items-center w-[${value}%] h-[8px]  ${type === 'success' && 'bg-green-500'} ${type === 'error' && 'bg-red-500'} ${type === 'warning' && 'bg-yellow-400'}  `} style={{ width: `${value}%` }}>
            </span>
        </div>
    );
}

export default Progressbar;
