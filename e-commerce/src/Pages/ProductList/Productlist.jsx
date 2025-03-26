import React, { useContext, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ProductItem from '../../components/ProductItem/ProductItem';
import { Button } from '@mui/material';
import { BsGrid1X2Fill } from "react-icons/bs";
import { BsFillGridFill } from "react-icons/bs";
import { MdOutlineMenu } from "react-icons/md";
Button
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import ProductItemlistview from '../../components/ProductItemlistview/ProductItemlistview';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
useContext
const Productlist = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isitemview, setisitemview] = useState('grid')
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <section className='ProductListing py-5 pb-0'>
                <div className="container">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/" className='link transition-all'>
                            Home
                        </Link>
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/"
                            className='link transition-all'
                        >
                            Fashion
                        </Link>
                    </Breadcrumbs>
                </div>
                <div className="bg-white p-2 mt-4">
                    <div className="container flex gap-3">

                        <div className="sidebarwrapper w-[20%] h-full bg-white p-3">
                            <Sidebar />
                        </div>

                        <div className="rightContent w-[80%] py-3">
                            <div className="bg-[#f1f1f1] p-2 w-full mb-4 rounded-md flex items-center justify-between">
                                <div className="col1 flex items-center itemviewaction ">
                                    <Button onClick={() => setisitemview('list')} className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-black ${isitemview === 'list' && 'active'} `}><MdOutlineMenu className='text-[19px]' /></Button>
                                    <Button onClick={() => setisitemview('grid')} className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-black ${isitemview === 'grid' && 'active'}  `}><BsFillGridFill className='text-[14px]' /></Button>
                                    <span className='text-[14px] font-[500] pl-5 text-gray-600 '>There are 27 Products</span>
                                </div>
                                <div className="col2 ml-auto flex items-center justify-end gap-3 pr-4">
                                    <span className='text-[14px] font-[500] pl-5 text-gray-600 '>Sort By</span>

                                    <Button
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                        className='!bg-white !text-[13px] !text-black !capitalize !border-2 !border-[#000]'
                                    >
                                        Sales, highest to lowest
                                    </Button>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose} className=' !text-[12px] !text-black !capitalize'>Sales, highest to lowest</MenuItem>
                                        <MenuItem onClick={handleClose} className=' !text-[12px] !text-black !capitalize'>Relevance</MenuItem>
                                        <MenuItem onClick={handleClose} className=' !text-[12px] !text-black !capitalize'>Name, A to Z</MenuItem>
                                        <MenuItem onClick={handleClose} className=' !text-[12px] !text-black !capitalize'>Name, Z to A</MenuItem>
                                        <MenuItem onClick={handleClose} className=' !text-[12px] !text-black !capitalize'>Price, high to low</MenuItem>
                                        <MenuItem onClick={handleClose} className=' !text-[12px] !text-black !capitalize'>Price, low to high</MenuItem>
                                    </Menu>

                                </div>
                            </div>
                            <div className={`grid ${isitemview === 'grid' ? 'grid-cols-4 md:grid-cols-4 gap-3 ' : 'grid-cols-1 md:grid-cols-1 gap-3 '}`}>
                                {
                                    isitemview === 'grid' ? <>
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                    </> : <>
                                        <ProductItemlistview />
                                        <ProductItemlistview />
                                        <ProductItemlistview />
                                        <ProductItemlistview />
                                        <ProductItemlistview />
                                        <ProductItemlistview />
                                        <ProductItemlistview />
                                        <ProductItemlistview />
                                    </>
                                }

                            </div>
                            <div className="flex items-center justify-center mt-10">
                                <Stack spacing={2}>
                                    <Pagination count={10} size="small" />
                                </Stack>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </>
    );
}

export default Productlist;
