
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
import AddCategory from './AddCategory';

Button


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


Link
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Category = () => {


    const context = useContext(Mycontext);
    const columns = [

        { id: 'image', label: 'Image', minWidth: 100 },
        { id: 'category', label: 'Category Name', minWidth: 200 },


        {
            id: 'action',
            label: 'Action',
            minWidth: 150,

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

    const [filtercategory, setfiltercategory] = useState('All');
    const handleChangefiltercategory = (event) => {
        setfiltercategory(event.target.value);
    };
    return (
        <>

            <Dialog
                fullScreen
                open={context.isopenfullscreenpanel.open}
                onClose={() => setisopenfullscreenpanel({
                    open: false
                })}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={() => context.setisopenfullscreenpanel({
                                open: false
                            })}
                            aria-label="close"
                        >
                            <IoCloseOutline className='text-gray-800 text-[25px]' />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            <span className='text-gray-800'> {context.isopenfullscreenpanel?.modal}</span>
                        </Typography>

                    </Toolbar>
                </AppBar>
                {
                    context.isopenfullscreenpanel?.modal === 'Add Category' &&
                    <>
                        <AddCategory />
                    </>
                }

            </Dialog>




            <div className="flex items-center justify-end px-2  pr-0 py-0 mt-2">
                <h2 className='text-[20px] font-[600] '>Category </h2>
                <div className="col w-fit  ml-auto flex items-center gap-3">
                    <Button className='btn-green btn-sm ' ><PiExport className='text-[18px] gap-1' />Export</Button>

                    <Button className='btn-blue  btn-sm' onClick={() => {
                        context.setisopenfullscreenpanel({
                            open: true,
                            modal: 'Add Category'
                        });
                    }}><IoAddOutline className='text-[20px]' />Add Category</Button>
                </div>
            </div>
            <div className="card my-4 shadow-md sm:rounded-lg   border border-[rbga(0,0,0,0.1)] bg-white pt-5">

                {/* <div className="flex items-center w-full px-5 justify-between pr-4 ">
                    <div className="col w-[20%]">
                        <h4 className='font-[500] text-[14px] mb-2'>Category By</h4>
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
                    <div className="w-[20%] ml-auto">
                        <SearchBox />
                    </div>

                </div> */}

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
                                            width={column.minWidth}
                                            key={column.id}
                                            align={column.align}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                <TableRow>
                                    <TableCell width={60}>
                                        <Checkbox {...label} size='small' />
                                    </TableCell>

                                    <TableCell width={100}>
                                        <div className="flex items-center gap-4 w-[100px]">


                                            <div className="img w-[60px] h-[60px]  rounded-md overflow-hidden group">
                                                <img className='w-full h-full object-cover group-hover:scale-105 transition-all' src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107649/1737107647134_ele.png" alt="" srcset="" />
                                            </div>

                                        </div>
                                    </TableCell>
                                    <TableCell width={150}>Electronics</TableCell>

                                    <TableCell width={100}>
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
        </>
    );
}

export default Category;
