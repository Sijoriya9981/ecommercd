import React from 'react';

const Badge = ({ status }) => {
    return (
        <>
            <span className={`inline-block py-1 px-3 text-[14px] capitalize !rounded-full ${status === "Pending" && 'bg-yellow-400 text-white'}
             ${status === "Delivered" && 'bg-primary text-white'}   ${status === "Confirm" && 'bg-green-600 text-white'}
            `}>
                {status}
            </span>
        </>
    );
}

export default Badge;
