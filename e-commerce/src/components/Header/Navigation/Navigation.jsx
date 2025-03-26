import React, { useState } from 'react';
import { Button } from '@mui/material';
import { RiMenu2Fill } from "react-icons/ri";
import { TfiAngleDown } from "react-icons/tfi";
import { Link } from 'react-router-dom';  // Only import once
import { CiDeliveryTruck } from "react-icons/ci";
import CategoryPanel from './CategoryPanel';

const Navigation = () => {
    const [isopencatpanel, setopencategorypanel] = useState(false)
    const opencategorypanel = () => {
        setopencategorypanel(true);
    }
    return (
        <>
            <nav className=''>
                <div className="container flex items-center justify-end gap-8">
                    <div className="col_1 w-[21%]">
                        <Button className='!text-black gap-1 w-full' onClick={opencategorypanel}>
                            <RiMenu2Fill className='text-[18px]' />Shop By Category
                            <TfiAngleDown className='ml-auto  font-[15px]' />

                        </Button>
                    </div>
                    <div className="col_2 w-[62%]">
                        <ul className="flex items-center gap-3 nav">
                            <li className="list-none">
                                <Link to={'/'} className='link transtion text-[14px] font-[500]'>
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>
                                        Home  </Button></Link>

                            </li>
                            <li className="list-none relative">
                                <Link to={'/'} className='link transtion text-[14px] font-[500]'> <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Fashion </Button></Link>

                                <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                                    <ul>

                                        <li className="list-none w-full">
                                            <Link to={'/'}>
                                                <Button className='!text-[rbga(0,0,0,0.8)] !text-black w-full !text-left !justify-start !rounded-none'>Men</Button>
                                            </Link>
                                            <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                                                <ul>

                                                    <li className="list-none w-full">
                                                        <Link to={'/'}>
                                                            <Button className='!text-[rbga(0,0,0,0.8)] !text-black w-full !text-left !justify-start !rounded-none'>Shirt</Button>
                                                        </Link>
                                                    </li>
                                                    <li className="list-none w-full">
                                                        <Link to={'/'}>
                                                            <Button className='!text-[rbga(0,0,0,0.8)] !text-black w-full !text-left !justify-start !rounded-none'>Pants</Button>
                                                        </Link>
                                                    </li>
                                                    <li className="list-none w-full">
                                                        <Link to={'/'}>
                                                            <Button className='!text-[rbga(0,0,0,0.8)] !text-black w-full !text-left !justify-start !rounded-none'>Jackets</Button>
                                                        </Link>
                                                    </li>
                                                    <li className="list-none w-full">
                                                        <Link to={'/'}>
                                                            <Button className='!text-[rbga(0,0,0,0.8)] !text-black w-full !text-left !justify-start !rounded-none'>Innerwear</Button>
                                                        </Link>
                                                    </li>
                                                    <li className="list-none w-full">
                                                        <Link to={'/'}>
                                                            <Button className='!text-[rbga(0,0,0,0.8)] !text-black w-full !text-left !justify-start !rounded-none'>Caps</Button>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="list-none w-full">
                                            <Link to={'/'}>
                                                <Button className='!text-[rbga(0,0,0,0.8)] !text-black w-full !text-left !justify-start !rounded-none'>Women</Button>
                                            </Link>
                                        </li>
                                        <li className="list-none w-full">
                                            <Link to={'/'}>
                                                <Button className='!text-[rbga(0,0,0,0.8)] !text-black w-full !text-left !justify-start !rounded-none'>Kids</Button>
                                            </Link>
                                        </li>
                                        <li className="list-none w-full">
                                            <Link to={'/'}>
                                                <Button className='!text-[rbga(0,0,0,0.8)] !text-black w-full !text-left !justify-start !rounded-none'>Boy</Button>
                                            </Link>
                                        </li>
                                        <li className="list-none w-full">
                                            <Link to={'/'}>
                                                <Button className='!text-[rbga(0,0,0,0.8)] !text-black w-full !text-left !justify-start !rounded-none'>Girl</Button>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                            </li>
                            <li className="list-none">
                                <Link to={'/'} className='link transtion text-[14px] font-[500]'> <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Electronic </Button></Link>

                            </li>
                            <li className="list-none">
                                <Link to={'/'} className='link transtion text-[14px] font-[500]'> <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Bags </Button></Link>

                            </li>
                            <li className="list-none">
                                <Link to={'/'} className='link transtion text-[14px] font-[500]'> <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Footwear </Button></Link>

                            </li>
                            <li className="list-none">
                                <Link to={'/'} className='link transtion text-[14px] font-[500]'> <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Groceries </Button></Link>

                            </li>
                            <li className="list-none">
                                <Link to={'/'} className='link transtion text-[14px] font-[500]'> <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Beauty </Button></Link>

                            </li>
                            <li className="list-none">
                                <Link to={'/'} className='link transtion text-[14px] font-[500]'> <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Wellness </Button></Link>

                            </li>
                            <li className="list-none">
                                <Link to={'/'} className='link transtion text-[14px] font-[500]'> <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Jewelry </Button></Link>
                                {/* Fixed typo: "Jwellery" to "Jewelry" */}
                            </li>
                        </ul>
                    </div>
                    <div className="col_3 w-[18%]">
                        <p className='text-[13px] flex items-center gap-1'><CiDeliveryTruck className='text-[18px] font-[19px]' />Free Delivery</p>
                    </div>
                </div>
            </nav>
            <CategoryPanel setopencategorypanel={setopencategorypanel} isopencatpanel={isopencatpanel} />

        </>
    );
}

export default Navigation;
