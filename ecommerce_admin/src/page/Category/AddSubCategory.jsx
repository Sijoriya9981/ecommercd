import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import UploadBox from '../../component/UploadBox/UploadBox';
import { MdClose } from "react-icons/md";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';
Button
import { FaCloudUploadAlt } from "react-icons/fa";
Button
const AddSubCategory = () => {
    const [parentcategory, setparentcategory] = useState('')
    return (
        <>
            <section className="p-5  bg-gray-50">
                <form action="" className='form p-8 py-3 '>
                    <div className="scroll max-h-[70vh] overflow-y-scroll overflow-x-hidden pr-4">


                        <div className=" grid grid-cols-4 mb-4 gap-4 ">

                            <div className="col">
                                <h3 className='text-[14px] font-[600] mb-1'>Parent Category</h3>

                                <Select
                                    size='small'
                                    labelId="demo-simple-select-label"
                                    id="ProductCatDropDown"
                                    value={parentcategory}
                                    className='w-full h-[40px] !border !border-[rgba(0,0,0,0.3)] focus:!outline-none focus:!border-[rgba(0,0,0,0.6)] rounded-sm '
                                    label="Category"
                                    onChange={(e) => setparentcategory(e.target.value)}
                                >
                                    <MenuItem value={''}>None</MenuItem>

                                    <MenuItem value={10}>Fashion</MenuItem>
                                    <MenuItem value={20}>Beauty</MenuItem>
                                    <MenuItem value={30}>Electroinc</MenuItem>
                                </Select>
                            </div>
                        </div>
                        <div className=" grid grid-cols-1 mb-6">

                            <div className="col w-[25%]">
                                <h3 className='text-[14px] font-[600] mb-1'>Sub Category Name</h3>
                                <input type="text" name="" id="" className='w-full h-[40px] border border-[rgba(0,0,0,0.3)] focus:outline-none focus:border-[rgba(0,0,0,0.6)] rounded-sm p-3 text-sm' />
                            </div>
                        </div>

                    </div>
                    <hr />

                    <br />
                    <div className="w-[250px]">

                        <Button type='submit' className='pt-10 btn-blue btn-lg flex gap-2'><FaCloudUploadAlt className='text-[14px]' />Publish & View</Button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default AddSubCategory;
