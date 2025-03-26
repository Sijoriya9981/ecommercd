import { Button } from '@mui/material';
import React from 'react';
import { RiUploadCloud2Line } from "react-icons/ri";
Button

import { NavLink } from 'react-router-dom';
import TextField from '@mui/material/TextField'
import AccountSidebar from '../../components/AccountSidebar/AccountSidebar';
NavLink

const Myaccount = () => {
    return (
        <>
            <section className="py-10 w-full">
                <div className="container flex gap-5">
                    <div className="col1 w-[20%]">
                        <AccountSidebar />
                    </div>
                    <div className="col2 w-[50%]">
                        <div className="card bg-white p-5 shadow-md rounded-md">
                            <h2 className="pb-3">
                                My Profile
                            </h2>
                            <hr />
                            <form action="" className='mt-5'>
                                <div className="flex items-center gap-5">
                                    <div className="w-[50%]">
                                        <TextField label="Full Name" className='w-full' size='small' variant="outlined" />
                                    </div>
                                    <div className="w-[50%]">
                                        <TextField label="Email" className='w-full' size='small' variant="outlined" />
                                    </div>

                                </div>
                                <div className="flex items-center mt-4 gap-5">
                                    <div className="w-[50%]">
                                        <TextField label="Phone Number" className='w-full' size='small' variant="outlined" />
                                    </div>


                                </div>
                                <br />
                                <div className="flex items-center gap-4" >
                                    <Button className='btn-org w-[100px]'>Save</Button>
                                    <Button className='btn-org w-[100px] btn-border'>Cancel</Button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Myaccount;
