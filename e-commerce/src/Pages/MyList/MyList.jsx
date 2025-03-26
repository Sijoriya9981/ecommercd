import React, { useState } from 'react';
import { Link } from 'react-router-dom';
Link
import { RxCross2 } from "react-icons/rx";

Rating

import { Button, Rating } from '@mui/material';
import { GiShoppingBag } from "react-icons/gi";
AccountSidebar
import MyListItem from './MyListItem/MyListItem';
import AccountSidebar from '../../components/AccountSidebar/AccountSidebar';
const MyList = () => {

    return (
        <>


            <section className="py-10 w-full">
                <div className="container flex gap-5">
                    <div className="col1 w-[20%]">
                        <AccountSidebar />
                    </div>
                    <div className="col2 w-[70%]">
                        <div className="shadow-md rounded-md  bg-white ">
                            <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.1)]">
                                <h2>My List</h2>
                                <p className="mt-0">
                                    There are <span className='text-primary font-[500]'>2</span> products in your cart
                                </p>
                            </div>
                            <MyListItem />
                            <MyListItem />
                            <MyListItem />

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MyList;
