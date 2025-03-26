
import { Button, Checkbox, Rating } from '@mui/material';
import React, { useContext, useState } from 'react';
import { IoAdd } from "react-icons/io5";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { BsEye } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { PiExport } from "react-icons/pi";
import { IoAddOutline } from "react-icons/io5";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Progressbar from '../../component/Progressbar/Progressbar';
import SearchBox from '../../component/Searchbox/SearchBox';
import { Mycontext } from '../../App';




import { SlCalender } from "react-icons/sl";
import { AiTwotoneMail } from "react-icons/ai";


import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography'
import { IoCloseOutline } from "react-icons/io5";
import Slide from '@mui/material/Slide';
Button
import { MdOutlineLocalPhone } from "react-icons/md";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


Link
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const User = () => {


    const context = useContext(Mycontext);
    const columns = [

        { id: 'userImg', label: 'User Image', minWidth: 100 },
        { id: 'userName', label: 'User Name', minWidth: 130 },
        {
            id: 'userEmail',
            label: 'User Email',
            minWidth: 150,

        },
        {
            id: 'userphone',
            label: 'User Phone',
            minWidth: 180,

        },
        {
            id: 'createddate',
            label: 'Created Date',
            minWidth: 180,

        },

    ];
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


    return (
        <>





            <div className="card my-4 shadow-md sm:rounded-lg   border border-[rbga(0,0,0,0.1)] bg-white pt-5">

                <div className="flex items-center w-full px-5 justify-between pr-4 ">
                    <div className="col w-[20%]">
                        <h2 className='text-[20px] font-[600] '>Users </h2>


                    </div>
                    <div className="w-[20%] ml-auto">
                        <SearchBox />
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


                                            <div className="img w-[60px] h-[60px]  rounded-md overflow-hidden group">
                                                <img className='w-full group-hover:scale-105 transition-all' src="data:image/jpeg;base64,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" alt="" srcset="" />
                                            </div>

                                        </div>
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        Rocky Bhai
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <span className="flex items-center gap-1"><AiTwotoneMail />RockyBhai@gmail.com</span>
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <span className="flex items-center gap-1"><MdOutlineLocalPhone />
                                            +91 9927382632</span>
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <span className="flex items-center gap-1"><SlCalender />12-03-25</span>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ minWidth: 10 }}>
                                        <Checkbox {...label} size='small' />
                                    </TableCell>

                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <div className="flex items-center gap-4 w-[200px]">


                                            <div className="img w-[60px] h-[60px]  rounded-md overflow-hidden group">
                                                <img className='w-full group-hover:scale-105 transition-all' src="data:image/jpeg;base64,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" alt="" srcset="" />
                                            </div>

                                        </div>
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        Rocky Bhai
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <span className="flex items-center gap-1"><AiTwotoneMail />RockyBhai@gmail.com</span>
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <span className="flex items-center gap-1"><MdOutlineLocalPhone />
                                            +91 9927382632</span>
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <span className="flex items-center gap-1"><SlCalender />12-03-25</span>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ minWidth: 10 }}>
                                        <Checkbox {...label} size='small' />
                                    </TableCell>

                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <div className="flex items-center gap-4 w-[200px]">


                                            <div className="img w-[60px] h-[60px]  rounded-md overflow-hidden group">
                                                <img className='w-full group-hover:scale-105 transition-all' src="data:image/jpeg;base64,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" alt="" srcset="" />
                                            </div>

                                        </div>
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        Rocky Bhai
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <span className="flex items-center gap-1"><AiTwotoneMail />RockyBhai@gmail.com</span>
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <span className="flex items-center gap-1"><MdOutlineLocalPhone />
                                            +91 9927382632</span>
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <span className="flex items-center gap-1"><SlCalender />12-03-25</span>
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
        </>
    );
}

export default User;
