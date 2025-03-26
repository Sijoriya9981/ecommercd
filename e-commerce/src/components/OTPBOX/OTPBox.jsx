import React from 'react';
import { useState } from 'react';
useState
const OTPBox = ({ length, onChange }) => {
    const [otp, setotp] = useState(new Array(length).fill(""));
    const handlechange = (element, index) => {
        const value = element.value;
        if (isNaN(value)) return;


        //update otp value
        const newotp = [...otp];
        newotp[index] = value;
        setotp(newotp);
        onChange(newotp.join(""));


        // focus on next input
        if (value && index < length - 1) {
            document.getElementById(`otp-input-${index + 1}`).focus();

        }
    }
    const handleKeydown = (event, index) => {
        if (event.key === "Backspace" && !otp[index] && index > 0) {
            document.getElementById(`otp-input-${index - 1}`).focus();
        }
    }
    return (
        <>
            <div className="otpBox"  >
                {otp.map((data, index) => (
                    <input key={index}
                        id={`otp-input-${index}`}
                        type='text'
                        maxLength='1'
                        value={otp[index]}
                        onChange={(e) => handlechange(e.target, index)}
                        onKeyDown={(e) => handleKeydown(e, index)}

                        className='w-[45px] h-[45px] text-center  text-[15px]'

                    />
                ))}
            </div>
        </>
    );
}

export default OTPBox;
