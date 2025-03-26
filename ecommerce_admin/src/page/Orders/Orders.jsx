import React, { useState } from 'react';
import Badge from '../../component/Badge/Badge';
import { Button } from '@mui/material';
Badge
Button
useState
Link
import { IoAddOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
useState
Link

import { MdKeyboardArrowUp } from "react-icons/md";
import { Link } from 'react-router-dom';
import SearchBox from '../../component/Searchbox/SearchBox';
const Orders = () => {
    const [isOpenOrder, setisOpenOrder] = useState(null)
    const isshowOrderedProduct = (index) => {
        if (isOpenOrder === index) {

            setisOpenOrder(null);
        }
        else {
            setisOpenOrder(index)
        }
    }
    return (
        <>
            <div className="card my-4 shadow-md sm:rounded-lg   border border-[rbga(0,0,0,0.1)] bg-white">

                <div className="flex items-center justify-between px-5 py-5">
                    <h2 className='text-[20px] font-[600] '>Recent Order</h2>
                    <div className="w-[30%]">   <SearchBox /></div>
                </div>

                <div class="relative overflow-x-auto mt-2  pb-3 ">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3  whitespace-nowrap">
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Order Id
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Payment Id
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Products
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Phone
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Address
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Pincode
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Total Amount
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    User Id
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Order Status
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Date
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                <td class="px-6 py-4  text-[#393939] font-[500]">
                                    <Button onClick={() => isshowOrderedProduct(0)} className='!w-[35px] !h-[35px] !min-w-[40px] !rounded-full !bg-[#f1f1f1] text-black'>
                                        {
                                            isOpenOrder === 0 ? <MdKeyboardArrowUp className='text-[23px] text-black' /> : <MdKeyboardArrowDown className='text-[23px] text-black' />
                                        }
                                    </Button>

                                </td>
                                <td class="px-6 py-4  text-[#393939] font-[500]">
                                    <span className="text-primary">  ord_id24ne0n40d3n93en322</span>
                                </td>
                                <td className="px-6 py-4 text-[#393939] font-[500]">
                                    payment_id244ceir3e93db29
                                </td>
                                <td className="px-6 py-4 text-[#393939] font-[500]">
                                    Gucci Denim Blue Jacket
                                </td>
                                <td class="px-6 py-4 text-[#393939] font-[500] whitespace-nowrap">
                                    Rocky Bhai
                                </td>
                                <td class="px-6 py-4 text-[#393939] font-[500] whitespace-nowrap">
                                    rocky@gmail.com
                                </td>
                                <td className="px-6 py-4 text-[#393939] font-[500]">
                                    9894639873
                                </td>
                                <td className="px-6 py-4 text-[#393939] font-[500]">
                                    <span className='block w-[200px]'>Ram Colony Near Radison Hotel  Indore</span>
                                </td>
                                <td className="px-6 py-4 text-[#393939] font-[500]">
                                    452010
                                </td>
                                <td className="px-6 py-4 text-[#393939] font-[500]">
                                    ₹ 500
                                </td>
                                <td className="px-6 py-4 text-[#393939] font-[500]">
                                    uid393n8dh3
                                </td>
                                <td className="px-6 py-4 text-[#393939] font-[500]">
                                    <Badge status='Confirm' />
                                </td>
                                <td className="px-6 py-4 text-[#393939] font-[500] whitespace-nowrap">
                                    2/04/2025
                                </td>
                            </tr>
                            {isOpenOrder === 0 &&
                                <tr>
                                    <td className=' pl-20' colSpan='6'>

                                        <div class="relative overflow-x-auto mt-2 border border-[rbga(0,0,0,0.1)] mb-1">
                                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                    <tr>

                                                        <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                            Product Id
                                                        </th>
                                                        <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                            Product Title
                                                        </th>
                                                        <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                            Image
                                                        </th>
                                                        <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                            Quantity
                                                        </th>
                                                        <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                            Price
                                                        </th>
                                                        <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                            Sub Total
                                                        </th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200" colSpan>

                                                        <td class="px-6 py-4  text-[#393939] font-[500]">
                                                            <span className="text-primary">  ord_id24ne0n40d3n93en322</span>
                                                        </td>
                                                        <td className="px-6 py-4 text-[#393939] font-[500]">
                                                            Gucci Denim Blue Jacket
                                                        </td>
                                                        <td className="px-6 py-4 text-[#393939] font-[500]">
                                                            <img className='w-[60px] h-[60px] object-cover rounded-sm' src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781298/1736781294264_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-1-202311201747.jpg" alt="" srcset="" />
                                                        </td>
                                                        <td class="px-6 py-4 text-[#393939] font-[500] whitespace-nowrap">
                                                            2
                                                        </td>
                                                        <td class="px-6 py-4 text-[#393939] font-[500] whitespace-nowrap">
                                                            ₹500
                                                        </td>
                                                        <td className="px-6 py-4 text-[#393939] font-[500]">
                                                            ₹530
                                                        </td>

                                                    </tr>

                                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200" colSpan>

                                                        <td class="px-6 py-4  text-[#393939] font-[500]">
                                                            <span className="text-primary">  ord_id24ne0n40d3n93en322</span>
                                                        </td>
                                                        <td className="px-6 py-4 text-[#393939] font-[500]">
                                                            Gucci Denim Blue Jacket
                                                        </td>
                                                        <td className="px-6 py-4 text-[#393939] font-[500]">
                                                            <img className='w-[60px] h-[60px] object-cover rounded-sm' src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781298/1736781294264_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-1-202311201747.jpg" alt="" srcset="" />
                                                        </td>
                                                        <td class="px-6 py-4 text-[#393939] font-[500] whitespace-nowrap">
                                                            2
                                                        </td>
                                                        <td class="px-6 py-4 text-[#393939] font-[500] whitespace-nowrap">
                                                            ₹500
                                                        </td>
                                                        <td className="px-6 py-4 text-[#393939] font-[500]">
                                                            ₹530
                                                        </td>

                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>

                                    </td>
                                </tr>
                            }
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                <td class="px-6 py-4  text-[#393939] font-[500]">
                                    <Button onClick={() => isshowOrderedProduct(1)} className='!w-[35px] !h-[35px] !min-w-[40px] !rounded-full !bg-[#f1f1f1] text-black'>
                                        {
                                            isOpenOrder === 1 ? <MdKeyboardArrowUp className='text-[23px] text-black' /> : <MdKeyboardArrowDown className='text-[23px] text-black' />
                                        }
                                    </Button>

                                </td>
                                <td class="px-6 py-4  text-[#393939] font-[500]">
                                    <span className="text-primary">  ord_id24ne0n40d3n93en322</span>
                                </td>
                                <td className="px-6 py-4 text-[#393939] font-[500]">
                                    payment_id244ceir3e93db29
                                </td>
                                <td className="px-6 py-4 text-[#393939] font-[500]">
                                    Gucci Denim Blue Jacket
                                </td>
                                <td class="px-6 py-4 text-[#393939] font-[500] whitespace-nowrap">
                                    Rocky Bhai
                                </td>
                                <td class="px-6 py-4 text-[#393939] font-[500] whitespace-nowrap">
                                    rocky@gmail.com
                                </td>
                                <td className="px-6 py-4 text-[#393939] font-[500]">
                                    9894639873
                                </td>
                                <td className="px-6 py-4 text-[#393939] font-[500]">
                                    <span className='block w-[200px]'>Ram Colony Near Radison Hotel  Indore</span>
                                </td>
                                <td className="px-6 py-4 text-[#393939] font-[500]">
                                    452010
                                </td>
                                <td className="px-6 py-4 text-[#393939] font-[500]">
                                    ₹500
                                </td>
                                <td className="px-6 py-4 text-[#393939] font-[500]">
                                    uid393n8dh3
                                </td>
                                <td className="px-6 py-4 text-[#393939] font-[500]">
                                    <Badge status='Confirm' />
                                </td>
                                <td className="px-6 py-4 text-[#393939] font-[500] whitespace-nowrap">
                                    2/04/2025
                                </td>
                            </tr>
                            {isOpenOrder === 1 &&
                                <tr>
                                    <td className=' pl-20' colSpan='6'>

                                        <div class="relative overflow-x-auto mt-2 border border-[rbga(0,0,0,0.1)] mb-1">
                                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                    <tr>

                                                        <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                            Product Id
                                                        </th>
                                                        <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                            Product Title
                                                        </th>
                                                        <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                            Image
                                                        </th>
                                                        <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                            Quantity
                                                        </th>
                                                        <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                            Price
                                                        </th>
                                                        <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                            Sub Total
                                                        </th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200" colSpan>

                                                        <td class="px-6 py-4  text-[#393939] font-[500]">
                                                            <span className="text-primary">  ord_id24ne0n40d3n93en322</span>
                                                        </td>
                                                        <td className="px-6 py-4 text-[#393939] font-[500]">
                                                            Gucci Denim Blue Jacket
                                                        </td>
                                                        <td className="px-6 py-4 text-[#393939] font-[500]">
                                                            <img className='w-[60px] h-[60px] object-cover rounded-sm' src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781298/1736781294264_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-1-202311201747.jpg" alt="" srcset="" />
                                                        </td>
                                                        <td class="px-6 py-4 text-[#393939] font-[500] whitespace-nowrap">
                                                            2
                                                        </td>
                                                        <td class="px-6 py-4 text-[#393939] font-[500] whitespace-nowrap">
                                                            ₹500
                                                        </td>
                                                        <td className="px-6 py-4 text-[#393939] font-[500]">
                                                            ₹530
                                                        </td>

                                                    </tr>

                                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200" colSpan>

                                                        <td class="px-6 py-4  text-[#393939] font-[500]">
                                                            <span className="text-primary">  ord_id24ne0n40d3n93en322</span>
                                                        </td>
                                                        <td className="px-6 py-4 text-[#393939] font-[500]">
                                                            Gucci Denim Blue Jacket
                                                        </td>
                                                        <td className="px-6 py-4 text-[#393939] font-[500]">
                                                            <img className='w-[60px] h-[60px] object-cover rounded-sm' src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781298/1736781294264_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-1-202311201747.jpg" alt="" srcset="" />
                                                        </td>
                                                        <td class="px-6 py-4 text-[#393939] font-[500] whitespace-nowrap">
                                                            2
                                                        </td>
                                                        <td class="px-6 py-4 text-[#393939] font-[500] whitespace-nowrap">
                                                            ₹500
                                                        </td>
                                                        <td className="px-6 py-4 text-[#393939] font-[500]">
                                                            ₹530
                                                        </td>

                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>

                                    </td>
                                </tr>
                            }






                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Orders;
