import React, { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
Button
import './style.css'
import { Collapse } from 'react-collapse'
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { Button } from '@mui/material';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Rating from '@mui/material/Rating';
const Sidebar = () => {
    const [isopencategoryfilter, setisopencategoryfilter] = useState(false)
    const [isopenavailablityfilter, setisopenavailablityfilter] = useState(false)
    const [isopensizefilter, setisopensizefilter] = useState(false)

    return (
        <>
            <aside className='sidebar py-5'>
                <div className="box ">
                    <h3 className='mb-3 text-[18px] font-[500] flex items-center pr-4'>Shop by Category
                        <Button className='!w-[30px] !h-[30px] !ml-auto !min-w-[30px] !rounded-full !text-black  ' onClick={() => setisopencategoryfilter(!isopencategoryfilter)}> {isopencategoryfilter ? <FaAngleUp /> : <FaAngleDown />}</Button>
                    </h3>

                    <Collapse isOpened={isopencategoryfilter}>
                        <div className="scroll px-3 relative -left-[0%]">
                            <FormGroup>
                                <FormControlLabel control={<Checkbox size='small' />} label="Fashion" className='w-full' />
                                <FormControlLabel control={<Checkbox size='small' />} label="Electronics" className='w-full' />
                                <FormControlLabel control={<Checkbox size='small' />} label="Bags" className='w-full' />
                                <FormControlLabel control={<Checkbox size='small' />} label="Footwear" className='w-full' />
                                <FormControlLabel control={<Checkbox size='small' />} label="Groceries" className='w-full' />
                                <FormControlLabel control={<Checkbox size='small' />} label="Beauty" className='w-full' />
                                <FormControlLabel control={<Checkbox size='small' />} label="Wellness" className='w-full' />
                                <FormControlLabel control={<Checkbox size='small' />} label="Jwellery" className='w-full' />


                            </FormGroup>
                        </div>
                    </Collapse>
                </div>
                <div className="box " >
                    <h3 className='mb-3 text-[18px] font-[500] flex items-center pr-4'>Availability
                        <Button className='!w-[30px] !h-[30px] !ml-auto !min-w-[30px] !rounded-full !text-black  ' onClick={() => setisopenavailablityfilter(!isopenavailablityfilter)}> {isopencategoryfilter ? <FaAngleUp /> : <FaAngleDown />}</Button>
                    </h3>

                    <Collapse isOpened={isopenavailablityfilter}>
                        <div className="scroll px-3 relative -left-[0%]">
                            <FormGroup>
                                <FormControlLabel control={<Checkbox size='small' />} label="Available (100)" className='w-full' />
                                <FormControlLabel control={<Checkbox size='small' />} label="In Stock (70)" className='w-full' />
                                <FormControlLabel control={<Checkbox size='small' />} label="Not Available (60)" className='w-full' />



                            </FormGroup>
                        </div>
                    </Collapse>
                </div>
                <div className="box mt-3">
                    <h3 className='mb-3 text-[18px] font-[500] flex items-center pr-4'>Size
                        <Button className='!w-[30px] !h-[30px] !ml-auto !min-w-[30px] !rounded-full !text-black  ' onClick={() => setisopensizefilter(!isopensizefilter)}> {isopencategoryfilter ? <FaAngleUp /> : <FaAngleDown />}</Button>
                    </h3>

                    <Collapse isOpened={isopensizefilter}>
                        <div className="scroll px-3 relative -left-[0%]">
                            <FormGroup>
                                <FormControlLabel control={<Checkbox size='small' />} label="Small  (100)" className='w-full' />
                                <FormControlLabel control={<Checkbox size='small' />} label="Medium (70)" className='w-full' />
                                <FormControlLabel control={<Checkbox size='small' />} label="Large  (60)" className='w-full' />
                                <FormControlLabel control={<Checkbox size='small' />} label="XL     (60)" className='w-full' />
                                <FormControlLabel control={<Checkbox size='small' />} label="XXL    (60)" className='w-full' />



                            </FormGroup>
                        </div>
                    </Collapse>
                </div>

                <div className="box mt-4">
                    <h3 className='mb-3 text-[18px] font-[500] flex items-center pr-4'>Filter by Price
                    </h3>
                    <RangeSlider />
                    <div className="flex pt-2 pb-2 priceRange">
                        <span className='text-[13px]'>From: <strong className='text-dark'>Rs:{100}</strong></span>
                        <span className='text-[13px] ml-auto'>To: <strong className='text-dark'>Rs:{1000}</strong></span>
                    </div>
                </div>
                <div className="box mt-4">
                    <h3 className='mb-3 text-[18px] font-[500] flex items-center pr-4'>Filter by Rating
                    </h3>
                    <div className="w-full cursor-pointer">

                        <Rating name="small-rating" defaultValue={5} size='small' readOnly className='w-full cursor-pointer' />
                    </div>
                    <div className="w-full cursor-pointer">

                        <Rating name="small-rating" defaultValue={4} size='small' readOnly className='w-full cursor-pointer' />
                    </div>
                    <div className="w-full cursor-pointer">
                        <Rating name="small-rating" defaultValue={3} size='small' readOnly className='w-full cursor-pointer' />
                    </div>
                    <div className="w-full cursor-pointer">
                        <Rating name="small-rating" defaultValue={2} size='small' readOnly className='w-full cursor-pointer' />
                    </div>
                    <div className="w-full cursor-pointer">
                        <Rating name="small-rating" defaultValue={1} size='small' readOnly className='w-full cursor-pointer' />
                    </div>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;
