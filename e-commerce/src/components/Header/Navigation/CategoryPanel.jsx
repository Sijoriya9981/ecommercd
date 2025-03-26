import Box from '@mui/material/Box';
import React, { useState } from 'react';
import { MdOutlineAddBox } from "react-icons/md";
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { RxCross1 } from "react-icons/rx";
import { CiSquarePlus } from "react-icons/ci";
import '../Navigation/style.css'
import { CiSquareMinus } from "react-icons/ci";
import { Link } from 'react-router-dom';
import CategoryCollapse from '../../CategoryCollapse/CategoryCollapse';

Link
const CategoryPanel = ({ setopencategorypanel, isopencatpanel }) => {


    const toggleDrawer = (newOpen) => () => {
        setopencategorypanel(newOpen);
    };




    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" className='categoryPanel' >
            <h3 className='p-3 text-[16 px] font-[500] flex items-center justify-between'>Shop By Categories <RxCross1 className='cursor-pointer' onClick={toggleDrawer(false)} /></h3>

            <Divider />
            <CategoryCollapse />

        </Box>
    );


    return (
        <>
            <div>
                <Drawer open={isopencatpanel} onClose={toggleDrawer(false)}>
                    {DrawerList}
                </Drawer>
            </div>
        </>
    );
}

export default CategoryPanel;
