import React from 'react';
import { PiKeyReturnLight } from "react-icons/pi";
import { BsTruck } from "react-icons/bs";
Link
import { RiCustomerService2Line } from "react-icons/ri";
import { LiaGiftSolid } from "react-icons/lia";
import { CiWallet } from "react-icons/ci";
import { GrChatOption } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { TiSocialFacebook } from "react-icons/ti";
import { RiTwitterXLine } from "react-icons/ri";
import { AiOutlineYoutube } from "react-icons/ai";

import { FaInstagram } from "react-icons/fa";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { useContext } from 'react';
import { myContext } from '../../App';
import { RxCross2 } from "react-icons/rx";

import ShoppingCartpanel from '../ShoppingCartPanel/ShoppingCartpanel';
ShoppingCartpanel
const Footer = () => {
    const context = useContext(myContext);
    return (
        <>
            <footer className='py-6 bg-[#fafafa]'>
                <div className="container">
                    <div className="flex items-center justify-center gap-2 py-8 pb-8">
                        <div className="col flex items-center justify-end flex-col group w-[20%]">
                            <BsTruck className='text-[40px]  transition-all duration-300 group-hover:text-primary group-hover:translate-y-2' />
                            <h3 className='text-[14px] font-[500] mt-2'> Free Shipping
                            </h3>
                            <p className='text-[12px] text-[rbga(0,0,0,0.8)]'>For all Order Over ₹500</p>
                        </div>
                        <div className="col flex items-center justify-end flex-col group w-[20%]">
                            <PiKeyReturnLight className='text-[40px]  transition-all duration-300 group-hover:text-primary group-hover:translate-y-2' />
                            <h3 className='text-[14px] font-[500] mt-2'> 30 Days Returns
                            </h3>
                            <p className='text-[12px] text-[rbga(0,0,0,0.8)]'>For an Exchange Product</p>
                        </div>
                        <div className="col flex items-center justify-end flex-col group w-[20%]">
                            <CiWallet className='text-[40px]  transition-all duration-300 group-hover:text-primary group-hover:translate-y-2' />
                            <h3 className='text-[14px] font-[500] mt-2'> Secured Payment
                            </h3>
                            <p className='text-[12px] text-[rbga(0,0,0,0.8)]'>Payment Cards Accepted</p>
                        </div>
                        <div className="col flex items-center justify-end flex-col group w-[20%]">
                            <LiaGiftSolid className='text-[40px]  transition-all duration-300 group-hover:text-primary group-hover:translate-y-2' />
                            <h3 className='text-[14px] font-[500] mt-2'> Special Gifts
                            </h3>
                            <p className='text-[12px] text-[rbga(0,0,0,0.8)]'>Our First Product Order</p>
                        </div>

                        <div className="col flex items-center justify-end flex-col group w-[20%]">
                            <RiCustomerService2Line className='text-[40px]  transition-all duration-300 group-hover:text-primary group-hover:translate-y-2' />
                            <h3 className='text-[14px] font-[500] mt-2'> Support 24/7
                            </h3>
                            <p className='text-[12px] text-[rbga(0,0,0,0.8)]'>Contact us Anytime</p>
                        </div>
                    </div>

                    <hr />
                    <div className="footer flex  py-8">
                        <div className="part1 w-[25%] border-r border-[rbga(0,0,0,0.9)] border-gray-500">
                            <h2 className='text-[18px] font-[600] mb-1'>Contact us</h2>
                            <p className='text-[16px] font-[400]'>Apki Dukaan <br /> Floor A -IT Park Indore </p>
                            <p className='text-[16px] font-[400]'><Link className='link' to='mailto:someon@example.com'>sales@ApkiDukann.com</Link></p>
                            <span className='text-[15px] font-[600] w-full  block text-primary'>(+91) 1800 234 289</span>
                            <div className="flex items-center gap-2 mt-3">
                                <GrChatOption className='text-[40px]' />
                                <span className='text-[13px] font-[500]'>
                                    Online Chat<br />Get Expert Help
                                </span>
                            </div>
                        </div>

                        <div className="part2 w-[40%] flex  pl-5">
                            <div className="part2_col-2 w-[50%]">
                                <h2 className="text-[20px] font-[600] mb-4">
                                    Products
                                </h2>
                                <ul className='list'>
                                    <li className='list-none text-[14px] w-full mb-1'>
                                        <Link to='' className='link'>
                                            Prices drop
                                        </Link>
                                    </li>
                                    <li className='list-none text-[14px] w-full mb-1'>
                                        <Link to='' className='link'>
                                            New products
                                        </Link>
                                    </li>
                                    <li className='list-none text-[14px] w-full mb-1'>
                                        <Link to='' className='link'>
                                            Best sales
                                        </Link>
                                    </li>
                                    <li className='list-none text-[14px] w-full mb-1'>
                                        <Link to='' className='link'>
                                            Contact us
                                        </Link>
                                    </li>
                                    <li className='list-none text-[14px] w-full mb-1'>
                                        <Link to='' className='link'>
                                            Sitemap
                                        </Link>
                                    </li>
                                    <li className='list-none text-[14px] w-full mb-1'>
                                        <Link to='' className='link'>
                                            Stores
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="part2 w-[50%] flex pl-2 ">
                                <div className="part2_col-3">
                                    <h2 className="text-[20px] font-[600] mb-4">
                                        Our Company

                                    </h2>
                                    <ul className='list'>
                                        <li className='list-none text-[14px] w-full mb-1'>
                                            <Link to='' className='link'>
                                                Delivery
                                            </Link>
                                        </li>
                                        <li className='list-none text-[14px] w-full mb-1'>
                                            <Link to='' className='link'>
                                                Terms & conditions of use
                                            </Link>
                                        </li>
                                        <li className='list-none text-[14px] w-full mb-1'>
                                            <Link to='' className='link'>
                                                About us
                                            </Link>
                                        </li>
                                        <li className='list-none text-[14px] w-full mb-1'>
                                            <Link to='' className='link'>
                                                Contact us
                                            </Link>
                                        </li>
                                        <li className='list-none text-[14px] w-full mb-1'>
                                            <Link to='' className='link'>
                                                Secure payment
                                            </Link>
                                        </li>
                                        <li className='list-none text-[14px] w-full mb-1'>
                                            <Link to='' className='link'>
                                                Login
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="part3 w-[35%] flex pl-8 flex-col pr-8">
                            <h2 className="text-[20px] font-[600] mb-4">
                                Subscribe to newsletter
                            </h2>
                            <p className='text-[13px]'>Subscribe to our latest newsletter to get news about special discounts.</p>
                            <form action="" className='mt-5'>
                                <input type="text" placeholder='Enter Email Address' name="" id="" className='w-full h-[40px] border outline-none pl-4 pr-4 rounded-sm mb-3 focus:border-gray-400' />
                                <Button className='btn-org !mb-2'>SUBSCRIBE</Button>
                                <FormControlLabel required className='text-[12px]' control={<Checkbox />} label="
I agree to the terms and conditions and the privacy policy" />
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="bottomStrip border-t border-gray-500 py-3 bg-white ">
                <div className="container flex items-center justify-between">
                    <ul className='flex items-center gap-2'>
                        <li className="list-none">
                            <Link to='' target='_blank' className='w-[35px] h-[35px] rounded-full border border-gray-400  flex items-center justify-center group group hover:bg-primary'> <TiSocialFacebook /></Link>
                        </li>
                        <li className="list-none">
                            <Link to='' target='_blank' className='w-[35px] h-[35px] rounded-full border border-gray-400  flex items-center justify-center group group hover:bg-primary'> <RiTwitterXLine /></Link>
                        </li>
                        <li className="list-none">
                            <Link to='' target='_blank' className='w-[35px] h-[35px] rounded-full border border-gray-400  flex items-center justify-center group group hover:bg-primary'> <AiOutlineYoutube /></Link>
                        </li>
                        <li className="list-none">
                            <Link to='' target='_blank' className='w-[35px] h-[35px] rounded-full border border-gray-400  flex items-center justify-center group group hover:bg-primary'><FaInstagram /></Link>
                        </li>
                    </ul>
                    <p class="text-[13px] text-center mb-0">© 2025 Apki Dukaan.com</p>
                    <div class="flex items-center gap-1"><img src="https://ecommerce-frontend-view.netlify.app/carte_bleue.png" alt="image" /><img src="https://ecommerce-frontend-view.netlify.app/visa.png" alt="image" /><img src="	https://ecommerce-frontend-view.netlify.app/master_card.png" alt="image" /><img src="https://ecommerce-frontend-view.netlify.app/american_express.png" alt="image" /><img src="	https://ecommerce-frontend-view.netlify.app/paypal.png" alt="image" /></div>
                </div>
            </div>














            <Drawer className='shoppingcartpanel' anchor='right' open={context.opencartpanel} onClose={context.toggleopencartpanel(false)}>
                <div className="flex items-center justify-between py-3 px-4 gap-3 border-b border-[rgba(0,0,0,0.2)] ">
                    <h2>Shopping cart(1)</h2>
                    <RxCross2 onClick={context.toggleopencartpanel(false)} className='text-[20px] cursor-pointer ' />
                </div>
                <ShoppingCartpanel />

            </Drawer>
        </>
    );
}

export default Footer;
