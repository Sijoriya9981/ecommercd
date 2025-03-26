import { Button } from '@mui/material';
import React, { useState } from 'react';
Button
import { GoPlus } from "react-icons/go";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

const QtyBox = () => {
    const [qtyval, setqytval] = useState(1);
    const plus = () => {
        setqytval(qtyval + 1);
    }
    const minus = () => {
        if (qtyval > 1) {

            setqytval(qtyval - 1);
        }
    }
    return (
        <>
            <div className="qty flex items-center relative ">
                <input type="number" name="" min='1' value={qtyval} id="" defaultValue={1} className='w-full h-[45px] rounded-md p-2 text-[15px] focus:outline-none !border border-[rgba(0,0,0,0.2)]' />
                <div className="flex items-center flex-col justify-between absolute top-0 right-0 z-50 gap-1">

                    <Button className='text-black !min-w-[10px]  !p-0   !w-[10px]!h-[10px] rounded-md'>
                        <MdKeyboardArrowUp className='text-[20px] text-black' onClick={plus} /></Button>
                    <Button className='text-black !min-w-[10px] !p-0 !w-[10px]!h-[10px] rounded-md'>
                        <MdKeyboardArrowDown className='text-[22px] text-black' onClick={minus} /></Button>
                </div>


            </div>
        </>
    );
}

export default QtyBox;
