import React, { PureComponent, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import DashboardBox from '../../component/DashboardBox/BadhboardBox';
import { MdWavingHand } from "react-icons/md";
import { Button, Rating } from '@mui/material';
import { GoPlus } from "react-icons/go";
import { IoAddOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
useState
Link
import Badge from '../../component/Badge/Badge'
import { MdKeyboardArrowUp } from "react-icons/md";
Button
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Progressbar from '../../component/Progressbar/Progressbar';
Rating
Progressbar
import { BsEye } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
// import Tooltip from '@mui/material/Tooltip'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { MdOutlineDeleteOutline } from "react-icons/md";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { PiExport } from "react-icons/pi";
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Dashboard = () => {
    const [isOpenOrder, setisOpenOrder] = useState(null)
    const isshowOrderedProduct = (index) => {
        if (isOpenOrder === index) {

            setisOpenOrder(null);
        }
        else {
            setisOpenOrder(index)
        }
    }



    //table  material ui
    const columns = [

        { id: 'Product', label: 'Product', minWidth: 100 },
        { id: 'category', label: 'Category', minWidth: 100 },
        {
            id: 'subcategory',
            label: 'Sub Category',
            minWidth: 150,

        },
        {
            id: 'brand',
            label: 'Brand',
            minWidth: 130,

        },
        {
            id: 'price',
            label: 'Price',
            minWidth: 130,

        },
        {
            id: 'rating',
            label: 'Rating',
            minWidth: 150,

        },
        {
            id: 'sales',
            label: 'Sales',
            minWidth: 150,

        },
        {
            id: 'action',
            label: 'Action',
            minWidth: 150,

        },
    ];

    function createData(name, code, population, size) {
        const density = population / size;
        return { name, code, population, size, density };
    }

    const rows = []


    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const [filtercategory, setfiltercategory] = useState('All');
    const handleChangefiltercategory = (event) => {
        setfiltercategory(event.target.value);
    };

    const [char1data, chart2data] = useState(
        [
            {
                name: 'Jan',
                total_sales: 4000,
                total_user: 2400,
                amt: 2400,
            },
            {
                name: 'Feb',
                total_sales: 3000,
                total_user: 1398,
                amt: 2210,
            },
            {
                name: 'Mar',
                total_sales: 2000,
                total_user: 9800,
                amt: 2290,
            },
            {
                name: 'April',
                total_sales: 2780,
                total_user: 3908,
                amt: 2000,
            },
            {
                name: 'May',
                total_sales: 1890,
                total_user: 4800,
                amt: 2181,
            },
            {
                name: 'June',
                total_sales: 2390,
                total_user: 3800,
                amt: 2500,
            },
            {
                name: 'July',
                total_sales: 3490,
                total_user: 3300,
                amt: 2100,
            },
            {
                name: 'Aug',
                total_sales: 3490,
                total_user: 2300,
                amt: 2100,
            },
            {
                name: 'Sep',
                total_sales: 3490,
                total_user: 4000,
                amt: 2100,
            },
            {
                name: 'Oct',
                total_sales: 3490,
                total_user: 1300,
                amt: 2100,
            },
            {
                name: 'Nov',
                total_sales: 3490,
                total_user: 4900,
                amt: 2100,
            },
            {
                name: 'Dec',
                total_sales: 3490,
                total_user: 4000,
                amt: 2100,
            },
        ]


    )

    return (
        <>
            <div className="w-full p-5 bg-white  border border-[rbga(0,0,0,0.1)] flex items-center gap-6 mb-5 justify-between  rounded-md  overflow-visible ">
                <div className="info">
                    <h1 className='text-[30px] font-[600] mb-2'>Good Morning,
                        <br /> <span className='flex gap-2'>  Admin <MdWavingHand className='text-yellow-400 mt-2' /></span>
                    </h1>
                    <p className='leading-5 text-[14px] mb-2'>Here's What happening on your store today.See the statistics at one</p>
                    <Button className='btn-blue'><GoPlus className='text-[22px]' />Add Product</Button>
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLi9sMf9qsXX11gTga0LFCsya_SZh-aiZTowRTjogLbufm0Q7xmkTK7E7GfRwptHUm9eE&usqp=CAU" className='w-[300px] h-[200px] rounded-lg' alt="" srcset="" />
            </div>
            <div className='overflow-visible'>
                <DashboardBox />
            </div>


            {/* Tailwind css table */}
            <div className="card my-4 shadow-md sm:rounded-lg   border border-[rbga(0,0,0,0.1)] bg-white">

                <div className="flex items-center justify-between px-5 py-5">
                    <h2 className='text-[20px] font-[600] '>Products <span className='text-[11px] font-[300] '>(Tailwind css table)</span></h2>

                </div>

                <div class="relative overflow-x-auto mt-2  pb-3 ">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3  whitespace-nowrap">
                                    <div className="w-[60px]">
                                        <Checkbox {...label} size='small' />
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3  whitespace-nowrap">
                                    Products
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Sub Category
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Brand
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Rating
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Sales
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Action
                                </th>

                            </tr>
                        </thead>
                        <tbody>

                            <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200'>
                                <td className='px-6 py-3'>
                                    <div className="ww-[60px]">
                                        <Checkbox {...label} size='small' />
                                    </div>
                                </td>
                                <td className='flex items-center mt-1 gap-2 w-[300px]'>
                                    <div className="img w-[60px] h-[50px]  rounded-md overflow-hidden group">
                                        <img className='w-full group-hover:scale-105 transition-all' src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781298/1736781294264_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-1-202311201747.jpg" alt="" srcset="" />
                                    </div>
                                    <div className="info w-[75%]">
                                        <Link to='/product/12'>
                                            <h3 className='text-[14px] font-[500] hover:text-primary'>Denim Blue Jacket</h3></Link>
                                        <span className='text-[12px] font-[300]'>Clothing</span>
                                    </div>
                                </td>
                                <td className='px-6 py-3'>
                                    Clothing
                                </td>
                                <td className='px-6 py-3'>
                                    Men
                                </td>
                                <td className='px-6 py-3 '>
                                    Gucci
                                </td>
                                <td className='px-6 py-3'>
                                    <div className="flex items-center  flex-col">
                                        <span className='oldPrice line-through text-gray-500 text-[14px] font-[500]'>₹900</span>

                                        <span className="Price text-red-500 text-[15px] font-[500]">&#8377;500</span>
                                    </div>
                                </td>
                                <td className='px-6 py-3'>
                                    <Rating name="small-small" defaultValue={4} size='small' readOnly />

                                </td>
                                <td className='px-6 py-3'>
                                    <p className="text-[14px] w-[150px]">
                                        <span className="font-[500]">
                                            234 Sale

                                        </span>
                                    </p>
                                    <Progressbar value={80} type='warning' />
                                </td>
                                <td className='px-6 py-3'>
                                    <div className="flex items-center gap-2">
                                        <Tooltip title="Edit Product">
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#ed2020] !border border-[rbga(0,0,0,0.3)]'><CiEdit className='text-black text-[20px]  hover:text-green-500' />
                                            </Button>
                                        </Tooltip>
                                        <Tooltip title="View Product">
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#ed2020] border border-[rbga(0,0,0,0.1)]'><BsEye className='text-black text-[20px] hover:text-blue-500' />
                                            </Button>
                                        </Tooltip>
                                        <Tooltip title="Delete Product">
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#ed2020] border border-[rbga(0,0,0,0.1)]'><MdOutlineDeleteOutline className='text-black text-[20px] hover:text-red-500' />
                                            </Button>
                                        </Tooltip>
                                    </div>
                                </td>
                            </tr>
                            <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200'>
                                <td className='px-6 py-3'>
                                    <div className="ww-[60px]">
                                        <Checkbox {...label} size='small' />
                                    </div>
                                </td>
                                <td className='flex items-center mt-1 gap-2 w-[300px]'>
                                    <div className="img w-[60px] h-[50px]  rounded-md overflow-hidden group">
                                        <img className='w-full group-hover:scale-105 transition-all' src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781298/1736781294264_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-1-202311201747.jpg" alt="" srcset="" />
                                    </div>
                                    <div className="info w-[75%]">
                                        <Link to='/product/12'>
                                            <h3 className='text-[14px] font-[500] hover:text-primary'>Denim Blue Jacket</h3></Link>
                                        <span className='text-[12px] font-[300]'>Clothing</span>
                                    </div>
                                </td>
                                <td className='px-6 py-3'>
                                    Clothing
                                </td>
                                <td className='px-6 py-3'>
                                    Men
                                </td>
                                <td className='px-6 py-3 '>
                                    Gucci
                                </td>
                                <td className='px-6 py-3'>
                                    <div className="flex items-center  flex-col">
                                        <span className='oldPrice line-through text-gray-500 text-[14px] font-[500]'>₹900</span>

                                        <span className="Price text-red-500 text-[15px] font-[500]">&#8377;500</span>
                                    </div>
                                </td>
                                <td className='px-6 py-3'>
                                    <Rating name="small-small" defaultValue={4} size='small' readOnly />

                                </td>
                                <td className='px-6 py-3'>
                                    <p className="text-[14px] w-[150px]">
                                        <span className="font-[500]">
                                            234 Sale

                                        </span>
                                    </p>
                                    <Progressbar value={80} type='warning' />
                                </td>
                                <td className='px-6 py-3'>
                                    <div className="flex items-center gap-2">
                                        <Tooltip title="Edit Product">
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#ed2020] !border border-[rbga(0,0,0,0.3)]'><CiEdit className='text-black text-[20px]  hover:text-green-500' />
                                            </Button>
                                        </Tooltip>
                                        <Tooltip title="View Product">
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#ed2020] border border-[rbga(0,0,0,0.1)]'><BsEye className='text-black text-[20px] hover:text-blue-500' />
                                            </Button>
                                        </Tooltip>
                                        <Tooltip title="Delete Product">
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#ed2020] border border-[rbga(0,0,0,0.1)]'><MdOutlineDeleteOutline className='text-black text-[20px] hover:text-red-500' />
                                            </Button>
                                        </Tooltip>
                                    </div>
                                </td>
                            </tr>
                            <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200'>
                                <td className='px-6 py-3'>
                                    <div className="ww-[60px]">
                                        <Checkbox {...label} size='small' />
                                    </div>
                                </td>
                                <td className='flex items-center mt-1 gap-2 w-[300px]'>
                                    <div className="img w-[60px] h-[50px]  rounded-md overflow-hidden group">
                                        <img className='w-full group-hover:scale-105 transition-all' src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781298/1736781294264_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-1-202311201747.jpg" alt="" srcset="" />
                                    </div>
                                    <div className="info w-[75%]">
                                        <Link to='/product/12'>
                                            <h3 className='text-[14px] font-[500] hover:text-primary'>Denim Blue Jacket</h3></Link>
                                        <span className='text-[12px] font-[300]'>Clothing</span>
                                    </div>
                                </td>
                                <td className='px-6 py-3'>
                                    Clothing
                                </td>
                                <td className='px-6 py-3'>
                                    Men
                                </td>
                                <td className='px-6 py-3 '>
                                    Gucci
                                </td>
                                <td className='px-6 py-3'>
                                    <div className="flex items-center  flex-col">
                                        <span className='oldPrice line-through text-gray-500 text-[14px] font-[500]'>₹900</span>

                                        <span className="Price text-red-500 text-[15px] font-[500]">&#8377;500</span>
                                    </div>
                                </td>
                                <td className='px-6 py-3'>
                                    <Rating name="small-small" defaultValue={4} size='small' readOnly />

                                </td>
                                <td className='px-6 py-3'>
                                    <p className="text-[14px] w-[150px]">
                                        <span className="font-[500]">
                                            234 Sale

                                        </span>
                                    </p>
                                    <Progressbar value={80} type='warning' />
                                </td>
                                <td className='px-6 py-3'>
                                    <div className="flex items-center gap-2">
                                        <Tooltip title="Edit Product">
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#ed2020] !border border-[rbga(0,0,0,0.3)]'><CiEdit className='text-black text-[20px]  hover:text-green-500' />
                                            </Button>
                                        </Tooltip>
                                        <Tooltip title="View Product">
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#ed2020] border border-[rbga(0,0,0,0.1)]'><BsEye className='text-black text-[20px] hover:text-blue-500' />
                                            </Button>
                                        </Tooltip>
                                        <Tooltip title="Delete Product">
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#ed2020] border border-[rbga(0,0,0,0.1)]'><MdOutlineDeleteOutline className='text-black text-[20px] hover:text-red-500' />
                                            </Button>
                                        </Tooltip>
                                    </div>
                                </td>
                            </tr>
                            <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200'>
                                <td className='px-6 py-3'>
                                    <div className="ww-[60px]">
                                        <Checkbox {...label} size='small' />
                                    </div>
                                </td>
                                <td className='flex items-center mt-1 gap-2 w-[300px]'>
                                    <div className="img w-[60px] h-[50px]  rounded-md overflow-hidden group">
                                        <img className='w-full group-hover:scale-105 transition-all' src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781298/1736781294264_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-1-202311201747.jpg" alt="" srcset="" />
                                    </div>
                                    <div className="info w-[75%]">
                                        <Link to='/product/12'>
                                            <h3 className='text-[14px] font-[500] hover:text-primary'>Denim Blue Jacket</h3></Link>
                                        <span className='text-[12px] font-[300]'>Clothing</span>
                                    </div>
                                </td>
                                <td className='px-6 py-3'>
                                    Clothing
                                </td>
                                <td className='px-6 py-3'>
                                    Men
                                </td>
                                <td className='px-6 py-3 '>
                                    Gucci
                                </td>
                                <td className='px-6 py-3'>
                                    <div className="flex items-center  flex-col">
                                        <span className='oldPrice line-through text-gray-500 text-[14px] font-[500]'>₹900</span>

                                        <span className="Price text-red-500 text-[15px] font-[500]">&#8377;500</span>
                                    </div>
                                </td>
                                <td className='px-6 py-3'>
                                    <Rating name="small-small" defaultValue={4} size='small' readOnly />

                                </td>
                                <td className='px-6 py-3'>
                                    <p className="text-[14px] w-[150px]">
                                        <span className="font-[500]">
                                            234 Sale

                                        </span>
                                    </p>
                                    <Progressbar value={80} type='warning' />
                                </td>
                                <td className='px-6 py-3'>
                                    <div className="flex items-center gap-2">
                                        <Tooltip title="Edit Product">
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#ed2020] !border border-[rbga(0,0,0,0.3)]'><CiEdit className='text-black text-[20px]  hover:text-green-500' />
                                            </Button>
                                        </Tooltip>
                                        <Tooltip title="View Product">
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#ed2020] border border-[rbga(0,0,0,0.1)]'><BsEye className='text-black text-[20px] hover:text-blue-500' />
                                            </Button>
                                        </Tooltip>
                                        <Tooltip title="Delete Product">
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#ed2020] border border-[rbga(0,0,0,0.1)]'><MdOutlineDeleteOutline className='text-black text-[20px] hover:text-red-500' />
                                            </Button>
                                        </Tooltip>
                                    </div>
                                </td>
                            </tr>
                            <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200'>
                                <td className='px-6 py-3'>
                                    <div className="ww-[60px]">
                                        <Checkbox {...label} size='small' />
                                    </div>
                                </td>
                                <td className='flex items-center mt-1 gap-2 w-[300px]'>
                                    <div className="img w-[60px] h-[50px]  rounded-md overflow-hidden group">
                                        <img className='w-full group-hover:scale-105 transition-all' src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781298/1736781294264_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-1-202311201747.jpg" alt="" srcset="" />
                                    </div>
                                    <div className="info w-[75%]">
                                        <Link to='/product/12'>
                                            <h3 className='text-[14px] font-[500] hover:text-primary'>Denim Blue Jacket</h3></Link>
                                        <span className='text-[12px] font-[300]'>Clothing</span>
                                    </div>
                                </td>
                                <td className='px-6 py-3'>
                                    Clothing
                                </td>
                                <td className='px-6 py-3'>
                                    Men
                                </td>
                                <td className='px-6 py-3 '>
                                    Gucci
                                </td>
                                <td className='px-6 py-3'>
                                    <div className="flex items-center  flex-col">
                                        <span className='oldPrice line-through text-gray-500 text-[14px] font-[500]'>₹900</span>

                                        <span className="Price text-red-500 text-[15px] font-[500]">&#8377;500</span>
                                    </div>
                                </td>
                                <td className='px-6 py-3'>
                                    <Rating name="small-small" defaultValue={4} size='small' readOnly />

                                </td>
                                <td className='px-6 py-3'>
                                    <p className="text-[14px] w-[150px]">
                                        <span className="font-[500]">
                                            234 Sale

                                        </span>
                                    </p>
                                    <Progressbar value={80} type='warning' />
                                </td>
                                <td className='px-6 py-3'>
                                    <div className="flex items-center gap-2">
                                        <Tooltip title="Edit Product">
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#ed2020] !border border-[rbga(0,0,0,0.3)]'><CiEdit className='text-black text-[20px]  hover:text-green-500' />
                                            </Button>
                                        </Tooltip>
                                        <Tooltip title="View Product">
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#ed2020] border border-[rbga(0,0,0,0.1)]'><BsEye className='text-black text-[20px] hover:text-blue-500' />
                                            </Button>
                                        </Tooltip>
                                        <Tooltip title="Delete Product">
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#ed2020] border border-[rbga(0,0,0,0.1)]'><MdOutlineDeleteOutline className='text-black text-[20px] hover:text-red-500' />
                                            </Button>
                                        </Tooltip>
                                    </div>
                                </td>
                            </tr>
                            <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200'>
                                <td className='px-6 py-3'>
                                    <div className="ww-[60px]">
                                        <Checkbox {...label} size='small' />
                                    </div>
                                </td>
                                <td className='flex items-center mt-1 gap-2 w-[300px]'>
                                    <div className="img w-[60px] h-[50px]  rounded-md overflow-hidden group">
                                        <img className='w-full group-hover:scale-105 transition-all' src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781298/1736781294264_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-1-202311201747.jpg" alt="" srcset="" />
                                    </div>
                                    <div className="info w-[75%]">
                                        <Link to='/product/12'>
                                            <h3 className='text-[14px] font-[500] hover:text-primary'>Denim Blue Jacket</h3></Link>
                                        <span className='text-[12px] font-[300]'>Clothing</span>
                                    </div>
                                </td>
                                <td className='px-6 py-3'>
                                    Clothing
                                </td>
                                <td className='px-6 py-3'>
                                    Men
                                </td>
                                <td className='px-6 py-3 '>
                                    Gucci
                                </td>
                                <td className='px-6 py-3'>
                                    <div className="flex items-center  flex-col">
                                        <span className='oldPrice line-through text-gray-500 text-[14px] font-[500]'>₹900</span>

                                        <span className="Price text-red-500 text-[15px] font-[500]">&#8377;500</span>
                                    </div>
                                </td>
                                <td className='px-6 py-3'>
                                    <Rating name="small-small" defaultValue={4} size='small' readOnly />

                                </td>
                                <td className='px-6 py-3'>
                                    <p className="text-[14px] w-[150px]">
                                        <span className="font-[500]">
                                            234 Sale

                                        </span>
                                    </p>
                                    <Progressbar value={80} type='warning' />
                                </td>
                                <td className='px-6 py-3'>
                                    <div className="flex items-center gap-2">
                                        <Tooltip title="Edit Product">
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#ed2020] !border border-[rbga(0,0,0,0.3)]'><CiEdit className='text-black text-[20px]  hover:text-green-500' />
                                            </Button>
                                        </Tooltip>
                                        <Tooltip title="View Product">
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#ed2020] border border-[rbga(0,0,0,0.1)]'><BsEye className='text-black text-[20px] hover:text-blue-500' />
                                            </Button>
                                        </Tooltip>
                                        <Tooltip title="Delete Product">
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#ed2020] border border-[rbga(0,0,0,0.1)]'><MdOutlineDeleteOutline className='text-black text-[20px] hover:text-red-500' />
                                            </Button>
                                        </Tooltip>
                                    </div>
                                </td>
                            </tr>




                        </tbody>

                    </table>
                    <div className="flex items-center justify-center mt-3 mb-2"> <Stack spacing={2}>
                        <Pagination count={10} />
                    </Stack>
                    </div>
                </div>
            </div>



            {/* Table material ui */}
            <div className="card my-4 shadow-md sm:rounded-lg   border border-[rbga(0,0,0,0.1)] bg-white">

                <div className="flex items-center justify-between px-5 py-5">
                    <h2 className='text-[20px] font-[600] '>Products <span className='text-[11px] font-[300] '>(Material ui table)</span></h2>
                </div>
                <div className="flex items-center w-full pl-5 justify-between pr-2 ">
                    <div className="col w-[20%]">
                        <h4 className='font-[500] text-[13px] mb-2'>Category By</h4>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={filtercategory}
                            className='w-full'
                            size='small'
                            onChange={handleChangefiltercategory}
                            label="Category"
                        >
                            <MenuItem value="All">
                                All
                            </MenuItem>

                            <MenuItem value='10'>Men</MenuItem>
                            <MenuItem value='20'>Women</MenuItem>
                            <MenuItem value='30'>Kids</MenuItem>
                        </Select>

                    </div>
                    <div className="col w-fit ml-auto flex items-center gap-3">
                        <Button className='btn-green btn-sm '><PiExport className='text-[18px] gap-1' />Export</Button>

                        <Button className='btn-blue  btn-sm'><IoAddOutline className='text-[20px]' />Add Product</Button>
                    </div>
                </div>
                <div class="relative overflow-x-auto mt-2  pb-3 ">
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead className='bg-[#f1f1f1]'>
                                <TableRow>
                                    <TableCell padding="" style={{ minWidth: 10 }}>

                                        <Checkbox {...label} size='small' />
                                    </TableCell>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                <TableRow>
                                    <TableCell style={{ minWidth: 10 }}>
                                        <Checkbox {...label} size='small' />
                                    </TableCell>

                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <div className="flex items-center gap-4 w-[200px]">


                                            <div className="img w-[60px] h-[50px]  rounded-md overflow-hidden group">
                                                <img className='w-full group-hover:scale-105 transition-all' src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781298/1736781294264_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-1-202311201747.jpg" alt="" srcset="" />
                                            </div>
                                            <div className="info w-[75%]">
                                                <Link to='/product/12'>
                                                    <h3 className='text-[14px] font-[500] hover:text-primary'>Denim Blue Jacket</h3></Link>
                                                <span className='text-[12px] font-[300]'>Clothing</span>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        Clothing
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        Men
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        Gucci
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <div className="flex   flex-col">
                                            <span className='oldPrice line-through text-gray-500 text-[14px] font-[500]'>₹900</span>

                                            <span className="Price text-red-500 text-[15px] font-[500]">&#8377;500</span>
                                        </div>
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <Rating name="small-small" defaultValue={4} size='small' readOnly />
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <p className="text-[14px] w-[150px]">
                                            <span className="font-[500]">
                                                234 Sale

                                            </span>
                                        </p>
                                        <Progressbar value={80} type='warning' />
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <div className="flex  gap-2">
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#ed2020] !border border-[rbga(0,0,0,0.3)]'><CiEdit className='text-black text-[20px]  hover:text-green-500' />
                                            </Button>
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#ed2020] border border-[rbga(0,0,0,0.1)]'><BsEye className='text-black text-[20px] hover:text-blue-500' />
                                            </Button>
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#ed2020] border border-[rbga(0,0,0,0.1)]'><MdOutlineDeleteOutline className='text-black text-[20px] hover:text-red-500' />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ minWidth: 10 }}>
                                        <Checkbox {...label} size='small' />
                                    </TableCell>

                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <div className="flex items-center gap-4 w-[200px]">


                                            <div className="img w-[60px] h-[50px]  rounded-md overflow-hidden group">
                                                <img className='w-full group-hover:scale-105 transition-all' src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781298/1736781294264_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-1-202311201747.jpg" alt="" srcset="" />
                                            </div>
                                            <div className="info w-[75%]">
                                                <Link to='/product/12'>
                                                    <h3 className='text-[14px] font-[500] hover:text-primary'>Denim Blue Jacket</h3></Link>
                                                <span className='text-[12px] font-[300]'>Clothing</span>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        Clothing
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        Men
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        Gucci
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <div className="flex   flex-col">
                                            <span className='oldPrice line-through text-gray-500 text-[14px] font-[500]'>₹900</span>

                                            <span className="Price text-red-500 text-[15px] font-[500]">&#8377;500</span>
                                        </div>
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <Rating name="small-small" defaultValue={4} size='small' readOnly />
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <p className="text-[14px] w-[150px]">
                                            <span className="font-[500]">
                                                234 Sale

                                            </span>
                                        </p>
                                        <Progressbar value={80} type='warning' />
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <div className="flex  gap-2">
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#ed2020] !border border-[rbga(0,0,0,0.3)]'><CiEdit className='text-black text-[20px]  hover:text-green-500' />
                                            </Button>
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#ed2020] border border-[rbga(0,0,0,0.1)]'><BsEye className='text-black text-[20px] hover:text-blue-500' />
                                            </Button>
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#ed2020] border border-[rbga(0,0,0,0.1)]'><MdOutlineDeleteOutline className='text-black text-[20px] hover:text-red-500' />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ minWidth: 10 }}>
                                        <Checkbox {...label} size='small' />
                                    </TableCell>

                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <div className="flex items-center gap-4 w-[200px]">


                                            <div className="img w-[60px] h-[50px]  rounded-md overflow-hidden group">
                                                <img className='w-full group-hover:scale-105 transition-all' src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781298/1736781294264_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-1-202311201747.jpg" alt="" srcset="" />
                                            </div>
                                            <div className="info w-[75%]">
                                                <Link to='/product/12'>
                                                    <h3 className='text-[14px] font-[500] hover:text-primary'>Denim Blue Jacket</h3></Link>
                                                <span className='text-[12px] font-[300]'>Clothing</span>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        Clothing
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        Men
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        Gucci
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <div className="flex   flex-col">
                                            <span className='oldPrice line-through text-gray-500 text-[14px] font-[500]'>₹900</span>

                                            <span className="Price text-red-500 text-[15px] font-[500]">&#8377;500</span>
                                        </div>
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <Rating name="small-small" defaultValue={4} size='small' readOnly />
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <p className="text-[14px] w-[150px]">
                                            <span className="font-[500]">
                                                234 Sale

                                            </span>
                                        </p>
                                        <Progressbar value={80} type='warning' />
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <div className="flex  gap-2">
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#ed2020] !border border-[rbga(0,0,0,0.3)]'><CiEdit className='text-black text-[20px]  hover:text-green-500' />
                                            </Button>
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#ed2020] border border-[rbga(0,0,0,0.1)]'><BsEye className='text-black text-[20px] hover:text-blue-500' />
                                            </Button>
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#ed2020] border border-[rbga(0,0,0,0.1)]'><MdOutlineDeleteOutline className='text-black text-[20px] hover:text-red-500' />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ minWidth: 10 }}>
                                        <Checkbox {...label} size='small' />
                                    </TableCell>

                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <div className="flex items-center gap-4 w-[200px]">


                                            <div className="img w-[60px] h-[50px]  rounded-md overflow-hidden group">
                                                <img className='w-full group-hover:scale-105 transition-all' src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781298/1736781294264_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-1-202311201747.jpg" alt="" srcset="" />
                                            </div>
                                            <div className="info w-[75%]">
                                                <Link to='/product/12'>
                                                    <h3 className='text-[14px] font-[500] hover:text-primary'>Denim Blue Jacket</h3></Link>
                                                <span className='text-[12px] font-[300]'>Clothing</span>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        Clothing
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        Men
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        Gucci
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <div className="flex   flex-col">
                                            <span className='oldPrice line-through text-gray-500 text-[14px] font-[500]'>₹900</span>

                                            <span className="Price text-red-500 text-[15px] font-[500]">&#8377;500</span>
                                        </div>
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <Rating name="small-small" defaultValue={4} size='small' readOnly />
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <p className="text-[14px] w-[150px]">
                                            <span className="font-[500]">
                                                234 Sale

                                            </span>
                                        </p>
                                        <Progressbar value={80} type='warning' />
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <div className="flex  gap-2">
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#ed2020] !border border-[rbga(0,0,0,0.3)]'><CiEdit className='text-black text-[20px]  hover:text-green-500' />
                                            </Button>
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#ed2020] border border-[rbga(0,0,0,0.1)]'><BsEye className='text-black text-[20px] hover:text-blue-500' />
                                            </Button>
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#ed2020] border border-[rbga(0,0,0,0.1)]'><MdOutlineDeleteOutline className='text-black text-[20px] hover:text-red-500' />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ minWidth: 10 }}>
                                        <Checkbox {...label} size='small' />
                                    </TableCell>

                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <div className="flex items-center gap-4 w-[200px]">


                                            <div className="img w-[60px] h-[50px]  rounded-md overflow-hidden group">
                                                <img className='w-full group-hover:scale-105 transition-all' src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781298/1736781294264_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-1-202311201747.jpg" alt="" srcset="" />
                                            </div>
                                            <div className="info w-[75%]">
                                                <Link to='/product/12'>
                                                    <h3 className='text-[14px] font-[500] hover:text-primary'>Denim Blue Jacket</h3></Link>
                                                <span className='text-[12px] font-[300]'>Clothing</span>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        Clothing
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        Men
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        Gucci
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <div className="flex   flex-col">
                                            <span className='oldPrice line-through text-gray-500 text-[14px] font-[500]'>₹900</span>

                                            <span className="Price text-red-500 text-[15px] font-[500]">&#8377;500</span>
                                        </div>
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <Rating name="small-small" defaultValue={4} size='small' readOnly />
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <p className="text-[14px] w-[150px]">
                                            <span className="font-[500]">
                                                234 Sale

                                            </span>
                                        </p>
                                        <Progressbar value={80} type='warning' />
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <div className="flex  gap-2">
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#ed2020] !border border-[rbga(0,0,0,0.3)]'><CiEdit className='text-black text-[20px]  hover:text-green-500' />
                                            </Button>
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#ed2020] border border-[rbga(0,0,0,0.1)]'><BsEye className='text-black text-[20px] hover:text-blue-500' />
                                            </Button>
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#ed2020] border border-[rbga(0,0,0,0.1)]'><MdOutlineDeleteOutline className='text-black text-[20px] hover:text-red-500' />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ minWidth: 10 }}>
                                        <Checkbox {...label} size='small' />
                                    </TableCell>

                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <div className="flex items-center gap-4 w-[200px]">


                                            <div className="img w-[60px] h-[50px]  rounded-md overflow-hidden group">
                                                <img className='w-full group-hover:scale-105 transition-all' src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781298/1736781294264_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-1-202311201747.jpg" alt="" srcset="" />
                                            </div>
                                            <div className="info w-[75%]">
                                                <Link to='/product/12'>
                                                    <h3 className='text-[14px] font-[500] hover:text-primary'>Denim Blue Jacket</h3></Link>
                                                <span className='text-[12px] font-[300]'>Clothing</span>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        Clothing
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        Men
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        Gucci
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <div className="flex   flex-col">
                                            <span className='oldPrice line-through text-gray-500 text-[14px] font-[500]'>₹900</span>

                                            <span className="Price text-red-500 text-[15px] font-[500]">&#8377;500</span>
                                        </div>
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <Rating name="small-small" defaultValue={4} size='small' readOnly />
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <p className="text-[14px] w-[150px]">
                                            <span className="font-[500]">
                                                234 Sale

                                            </span>
                                        </p>
                                        <Progressbar value={80} type='warning' />
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <div className="flex  gap-2">
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#ed2020] !border border-[rbga(0,0,0,0.3)]'><CiEdit className='text-black text-[20px]  hover:text-green-500' />
                                            </Button>
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#ed2020] border border-[rbga(0,0,0,0.1)]'><BsEye className='text-black text-[20px] hover:text-blue-500' />
                                            </Button>
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#ed2020] border border-[rbga(0,0,0,0.1)]'><MdOutlineDeleteOutline className='text-black text-[20px] hover:text-red-500' />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ minWidth: 10 }}>
                                        <Checkbox {...label} size='small' />
                                    </TableCell>

                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <div className="flex items-center gap-4 w-[200px]">


                                            <div className="img w-[60px] h-[50px]  rounded-md overflow-hidden group">
                                                <img className='w-full group-hover:scale-105 transition-all' src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781298/1736781294264_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-1-202311201747.jpg" alt="" srcset="" />
                                            </div>
                                            <div className="info w-[75%]">
                                                <Link to='/product/12'>
                                                    <h3 className='text-[14px] font-[500] hover:text-primary'>Denim Blue Jacket</h3></Link>
                                                <span className='text-[12px] font-[300]'>Clothing</span>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        Clothing
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        Men
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        Gucci
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <div className="flex   flex-col">
                                            <span className='oldPrice line-through text-gray-500 text-[14px] font-[500]'>₹900</span>

                                            <span className="Price text-red-500 text-[15px] font-[500]">&#8377;500</span>
                                        </div>
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <Rating name="small-small" defaultValue={4} size='small' readOnly />
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <p className="text-[14px] w-[150px]">
                                            <span className="font-[500]">
                                                234 Sale

                                            </span>
                                        </p>
                                        <Progressbar value={80} type='warning' />
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <div className="flex  gap-2">
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#ed2020] !border border-[rbga(0,0,0,0.3)]'><CiEdit className='text-black text-[20px]  hover:text-green-500' />
                                            </Button>
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#ed2020] border border-[rbga(0,0,0,0.1)]'><BsEye className='text-black text-[20px] hover:text-blue-500' />
                                            </Button>
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#ed2020] border border-[rbga(0,0,0,0.1)]'><MdOutlineDeleteOutline className='text-black text-[20px] hover:text-red-500' />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />

                </div>

            </div>





            <div className="card my-4 shadow-md sm:rounded-lg   border border-[rbga(0,0,0,0.1)] bg-white">

                <div className="flex items-center justify-between px-5 py-5">
                    <h2 className='text-[20px] font-[600] '>Recent Order</h2>
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
            <div className="card my-4 shadow-md sm:rounded-lg  w-full  border border-[rbga(0,0,0,0.1)] bg-white">
                <div className="flex items-center justify-between px-5 py-5">
                    <h2 className='text-[18px] font-[600] '>Total Users & Total Sales</h2>
                </div>
                <div className="flex items-center gap-3 px-5 py-5 pt-0">
                    <span className="flex items-center gap-1 text-[14px]"> <span className="block w-[8px] h-[8px] rounded-full bg-green-400"></span>Total User</span>
                    <span className="flex items-center gap-1 text-[14px]"> <span className="block w-[8px] h-[8px] rounded-full bg-primary"></span>Total Sales</span>


                </div>
                <LineChart
                    className='!w-fit'
                    width={1000}

                    height={500}
                    data={char1data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke='none' />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="total_user" stroke="#3872fa" strokeWidth={3} activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="total_sales" strokeWidth={3} stroke="#82ca9d" />
                </LineChart>
            </div>
        </>
    );
}

export default Dashboard;
