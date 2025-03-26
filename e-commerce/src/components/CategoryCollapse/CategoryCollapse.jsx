import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
Link
import { CiSquarePlus } from "react-icons/ci";
Button
import { CiSquareMinus } from "react-icons/ci";
useState
const CategoryCollapse = () => {
    const [submenuIndex, setsubmenuIndex] = useState(null);
    const [subinnsermenuIndex, setinnersubmenuIndex] = useState(null);
    const openSubmenu = (index) => {
        if (submenuIndex === index) {
            setsubmenuIndex(null)
        }
        else {

            setsubmenuIndex(index)
        }
    }
    const openInner_Submenu = (index) => {
        if (subinnsermenuIndex === index) {
            setinnersubmenuIndex(null)
        }
        else {

            setinnersubmenuIndex(index)
        }
    }
    return (
        <>
            <div className="scroll categorycollapsewebkit">
                <ul className='w-full'>
                    <li className="list-none flex items-center relative flex-col">
                        <Link to={''} className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-black !text-[14px]' > Fashion </Button></Link>
                        {
                            submenuIndex === 0 ? (<CiSquareMinus className='cursor-pointer text-[22px] absolute top-[5px] right-[8px]' onClick={() => openSubmenu(0)} />) : (<CiSquarePlus className='cursor-pointer text-[22px] absolute top-[5px] right-[8px]' onClick={() => openSubmenu(0)} />)
                        }

                        {submenuIndex == 0 && (<ul className='submenu  w-full pl-3'>
                            <li className="list-none relative ">
                                <Link to={''} className='w-full'>
                                    <Button className='w-full !text-left !justify-start !px-3 !text-black !text-[13px]'> Apparel </Button></Link>
                                {
                                    subinnsermenuIndex === 0 ? (<CiSquareMinus className='cursor-pointer text-[22px] absolute top-[5px] right-[8px]' onClick={() => openInner_Submenu(0)} />) : (<CiSquarePlus className='cursor-pointer text-[22px] absolute top-[5px] right-[8px]' onClick={() => openInner_Submenu(0)} />)
                                }
                                {subinnsermenuIndex == 0 && (<ul className='inner_submenu flex-col w-full pl-3 '>
                                    <li className="list-none relative mb-1">
                                        <Link to={'/'} className='link w-full !text-left !justify-start !px-3 transition !text-[13px]'> Smart Tablet </Link>
                                    </li>
                                    <li className="list-none relative mb-1">
                                        <Link to={'/'} className='link w-full !text-left !justify-start !px-3 transition !text-[13px]'> Crepe T-shirt </Link>
                                    </li>
                                    <li className="list-none relative mb-1">
                                        <Link to={'/'} className='link w-full !text-left !justify-start !px-3 transition !text-[13px]'> Leather Watch </Link>
                                    </li>
                                    <li className="list-none relative mb-1">
                                        <Link to={'/'} className='link w-full !text-left !justify-start !px-3 transition !text-[13px]'> Rolling Diamond </Link>
                                    </li>
                                </ul>)}

                            </li>
                            <li className="list-none relative">
                                <Link to={''} className='w-full'>
                                    <Button className='w-full !text-left !justify-start !px-3 !text-black !text-[13px]'> Outwear </Button></Link>
                                {
                                    subinnsermenuIndex === 1 ? (<CiSquareMinus className='cursor-pointer text-[22px] absolute top-[5px] right-[8px]' onClick={() => openInner_Submenu(1)} />) : (<CiSquarePlus className='cursor-pointer text-[22px] absolute top-[5px] right-[8px]' onClick={() => openInner_Submenu(1)} />)
                                }
                                {subinnsermenuIndex == 1 && (<ul className='inner_submenu flex-col w-full pl-3 '>
                                    <li className="list-none relative mb-1">
                                        <Link to={'/'} className='link w-full !text-left !justify-start !px-3 transition !text-[13px]'> Smart Tablet </Link>
                                    </li>
                                    <li className="list-none relative mb-1">
                                        <Link to={'/'} className='link w-full !text-left !justify-start !px-3 transition !text-[13px]'> Crepe T-shirt </Link>
                                    </li>
                                    <li className="list-none relative mb-1">
                                        <Link to={'/'} className='link w-full !text-left !justify-start !px-3 transition !text-[13px]'> Leather Watch </Link>
                                    </li>
                                    <li className="list-none relative mb-1">
                                        <Link to={'/'} className='link w-full !text-left !justify-start !px-3 transition !text-[13px]'> Rolling Diamond </Link>
                                    </li>
                                </ul>)}

                            </li>
                            <li className="list-none relative">
                                <Link to={''} className='w-full'>
                                    <Button className='w-full !text-left !justify-start !px-3 !text-black !text-[13px]'> Footwear </Button></Link>
                                {
                                    subinnsermenuIndex === 2 ? (<CiSquareMinus className='cursor-pointer text-[22px] absolute top-[5px] right-[8px]' onClick={() => openInner_Submenu(2)} />) : (<CiSquarePlus className='cursor-pointer text-[22px] absolute top-[5px] right-[8px]' onClick={() => openInner_Submenu(2)} />)
                                }
                                {subinnsermenuIndex == 2 && (<ul className='inner_submenu flex-col w-full pl-3 '>
                                    <li className="list-none relative mb-1">
                                        <Link to={'/'} className='link w-full !text-left !justify-start !px-3 transition !text-[13px]'> Smart Tablet </Link>
                                    </li>
                                    <li className="list-none relative mb-1">
                                        <Link to={'/'} className='link w-full !text-left !justify-start !px-3 transition !text-[13px]'> Crepe T-shirt </Link>
                                    </li>
                                    <li className="list-none relative mb-1">
                                        <Link to={'/'} className='link w-full !text-left !justify-start !px-3 transition !text-[13px]'> Leather Watch </Link>
                                    </li>
                                    <li className="list-none relative mb-1">
                                        <Link to={'/'} className='link w-full !text-left !justify-start !px-3 transition !text-[13px]'> Rolling Diamond </Link>
                                    </li>
                                </ul>)}

                            </li>
                        </ul>)
                        }

                    </li>
                    <li className="list-none flex items-center relative flex-col">
                        <Link to={''} className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-black !text-[14px]' > Jwellery </Button></Link>


                    </li>
                    <li className="list-none flex items-center relative flex-col">
                        <Link to={''} className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-black !text-[14px]' > Watches </Button></Link>


                    </li>
                    <li className="list-none flex items-center relative flex-col">
                        <Link to={''} className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-black !text-[14px]' > Outerwear </Button></Link>
                        {
                            submenuIndex === 1 ? (<CiSquareMinus className='cursor-pointer text-[22px] absolute top-[5px] right-[8px]' onClick={() => openSubmenu(1)} />) : (<CiSquarePlus className='cursor-pointer text-[22px] absolute top-[5px] right-[8px]' onClick={() => openSubmenu(1)} />)
                        }

                        {submenuIndex == 1 && (<ul className='submenu   w-full pl-3'>
                            <li className="list-none relative">
                                <Link to={''} className='w-full'>
                                    <Button className='w-full !text-left !justify-start !px-3 !text-black !text-[13px]'> Apparel </Button></Link>
                                {
                                    subinnsermenuIndex === 0 ? (<CiSquareMinus className='cursor-pointer text-[22px] absolute top-[5px] right-[8px]' onClick={() => openInner_Submenu(0)} />) : (<CiSquarePlus className='cursor-pointer text-[22px] absolute top-[5px] right-[8px]' onClick={() => openInner_Submenu(0)} />)
                                }
                                {subinnsermenuIndex == 0 && (<ul className='inner_submenu flex-col w-full pl-3 '>
                                    <li className="list-none relative mb-1">
                                        <Link to={'/'} className='link w-full !text-left !justify-start !px-3 transition !text-[13px]'> Smart Tablet </Link>
                                    </li>
                                    <li className="list-none relative mb-1">
                                        <Link to={'/'} className='link w-full !text-left !justify-start !px-3 transition !text-[13px]'> Crepe T-shirt </Link>
                                    </li>
                                    <li className="list-none relative mb-1">
                                        <Link to={'/'} className='link w-full !text-left !justify-start !px-3 transition !text-[13px]'> Leather Watch </Link>
                                    </li>
                                    <li className="list-none relative mb-1">
                                        <Link to={'/'} className='link w-full !text-left !justify-start !px-3 transition !text-[13px]'> Rolling Diamond </Link>
                                    </li>
                                </ul>)}

                            </li>
                            <li className="list-none relative">
                                <Link to={''} className='w-full'>
                                    <Button className='w-full !text-left !justify-start !px-3 !text-black !text-[13px]'> Apparel </Button></Link>
                                {
                                    subinnsermenuIndex === 1 ? (<CiSquareMinus className='cursor-pointer text-[22px] absolute top-[5px] right-[8px]' onClick={() => openInner_Submenu(1)} />) : (<CiSquarePlus className='cursor-pointer text-[22px] absolute top-[5px] right-[8px]' onClick={() => openInner_Submenu(1)} />)
                                }
                                {subinnsermenuIndex == 1 && (<ul className='inner_submenu flex-col w-full pl-3 '>
                                    <li className="list-none relative mb-1">
                                        <Link to={'/'} className='link w-full !text-left !justify-start !px-3 transition !text-[13px]'> Smart Tablet </Link>
                                    </li>
                                    <li className="list-none relative mb-1">
                                        <Link to={'/'} className='link w-full !text-left !justify-start !px-3 transition !text-[13px]'> Crepe T-shirt </Link>
                                    </li>
                                    <li className="list-none relative mb-1">
                                        <Link to={'/'} className='link w-full !text-left !justify-start !px-3 transition !text-[13px]'> Leather Watch </Link>
                                    </li>
                                    <li className="list-none relative mb-1">
                                        <Link to={'/'} className='link w-full !text-left !justify-start !px-3 transition !text-[13px]'> Rolling Diamond </Link>
                                    </li>
                                </ul>)}

                            </li>
                        </ul>)
                        }

                    </li>
                    <li className="list-none flex items-center relative flex-col">
                        <Link to={''} className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-black !text-[14px]' > Cosmetics </Button></Link>


                    </li>
                    <li className="list-none flex items-center relative flex-col">
                        <Link to={''} className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-black !text-[14px]' > Accessories </Button></Link>


                    </li>
                    <li className="list-none flex items-center relative flex-col">
                        <Link to={''} className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-black !text-[14px]' > Elctronic </Button></Link>


                    </li>
                    <li className="list-none flex items-center relative flex-col">
                        <Link to={''} className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-black !text-[14px]' > Furniture </Button></Link>


                    </li>
                    <li className="list-none flex items-center relative flex-col">
                        <Link to={''} className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-black !text-[14px]' > Sunglasses </Button></Link>


                    </li>
                    <li className="list-none flex items-center relative flex-col">
                        <Link to={''} className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-black !text-[14px]' > Rolling Diamond </Button></Link>


                    </li>
                    <li className="list-none flex items-center relative flex-col">
                        <Link to={''} className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-black !text-[14px]' > Xbox Controller </Button></Link>


                    </li>
                    <li className="list-none flex items-center relative flex-col">
                        <Link to={''} className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-black !text-[14px]' > Leather Watch </Button></Link>


                    </li>
                    <li className="list-none flex items-center relative flex-col">
                        <Link to={''} className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-black !text-[14px]' > Smart Tablets </Button></Link>


                    </li>
                </ul>
            </div>
        </>
    );
}

export default CategoryCollapse;
