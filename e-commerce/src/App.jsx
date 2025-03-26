import React from 'react'
import { createContext, useState } from 'react'
BrowserRouter
Button

import './App.css'
import Header from './components/Header/Header'
Footer

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './components/Footer/Footer'
import Productlist from './Pages/ProductList/Productlist'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
Home
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material'
import ProductZoom from './components/ProductZoom/ProductZoom'
import { RxCross2 } from "react-icons/rx";
import ProductDetailsec from './components/ProductDetailsec/ProductDetailsec'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
Register


import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ShoppingCartpanel from './components/ShoppingCartPanel/ShoppingCartpanel'
import Cartpage from './Pages/Cartpage/Cartpage'
import Verify from './Pages/Verify/Verify'
import toast, { Toaster } from 'react-hot-toast';
import ForgotPassword from './Pages/Forgotpassword/Forgotpassword'
import CheckoutPage from './Pages/CheckOutpage/CheckoutPage'
import Myaccount from './Pages/Myaccount/myaccount'
import MyList from './Pages/MyList/MyList'
import OrderPage from './Pages/Order/OrderPage'
const notify = () => toast('Here is your toast.');

// yaha par context api bana rhe hai
const myContext = createContext()
function App() {
  const [isLogin, setisLogin] = useState(true)
  const [openProductDetailsModal, setopenProductDetailsModal] = useState(false);
  const [maxWidth, setmaxwidth] = useState('lg')
  const [fullWidth, setfullWidth] = useState(true);
  const [opencartpanel, setopencartpanel] = useState(false)

  const toggleopencartpanel = (newOpen) => () => {
    setopencartpanel(newOpen);
  };
  const handleCloseopenProductDetailsModal = () => {
    setopenProductDetailsModal(false);
  };
  const openAlertBox = (status, msg) => {
    if (status === 'success') {
      toast.success(msg)
    }
    else if (status === 'error') {
      toast.error(msg)
    }
  }
  const values = {
    setopenProductDetailsModal,
    setopencartpanel,
    toggleopencartpanel,
    opencartpanel,
    openAlertBox,
    isLogin,
    setisLogin
  }
  return (
    <>
      <BrowserRouter>
        <myContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path={"/"} exact={true} element={<Home />}></Route>
            <Route path={"/productListing"} exact={true} element={<Productlist />}></Route>
            <Route path={"/productdetail/:id"} exact={true} element={<ProductDetail />}></Route>
            <Route path={"/login"} exact={true} element={<Login />}></Route>
            <Route path={"/register"} exact={true} element={<Register />}></Route>
            <Route path={"/cartpage"} exact={true} element={<Cartpage />}></Route>
            <Route path={"/verify"} exact={true} element={<Verify />}></Route>
            <Route path={"/forgotpassword"} exact={true} element={<ForgotPassword />}></Route>
            <Route path={"/checkoutpage"} exact={true} element={<CheckoutPage />}></Route>
            <Route path={"/myaccount"} exact={true} element={<Myaccount />}></Route>
            <Route path={"/mylist"} exact={true} element={<MyList />}></Route>
            <Route path={"/myorder"} exact={true} element={<OrderPage />}></Route>

          </Routes>
          <Footer />
        </myContext.Provider>
      </BrowserRouter>
      <Toaster />
      {/* modal */}
      <Dialog
        open={openProductDetailsModal}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        onClose={handleCloseopenProductDetailsModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >

        <DialogContent>
          <div className="flex items-center w-full productdetailModalcontainer relative">
            <Button className='!w-[40px] !h-[40px] !min-w-[30px] !rounded-full !text-black !absolute top-[0px] right-[0px]' onClick={handleCloseopenProductDetailsModal}><RxCross2 className='text-[22px]' /></Button>
            <div className="col1 w-[40%]">
              <ProductZoom />
            </div>
            <div className="col2 w-[60%] py-5 px-5 pt-0 productcontain">
              <ProductDetailsec />
            </div>
          </div>
        </DialogContent>

      </Dialog>
      {/* modal */}


      {/* Cart panel */}

      {/* Cart panel */}
    </>
  )
}

export default App;
export { myContext };
