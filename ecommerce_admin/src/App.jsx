
import React from 'react';
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
RouterProvider
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Dashboard from './page/Dashboard/Dashboard'
import Header from './component/Header/Header'
import Sidebar from './component/Sidebar/Sidebar'
import { createContext } from 'react'
import Login from './page/Login/Login'
import Signup from './page/Signup/Signup'
import Products from './page/Products/Products'
import HomeSliderBanner from './page/HomeSliderBanner/HomeSliderBanner';
import Category from './page/Category/Category';
import SubCategory from './page/Category/SubCategory';
import User from './page/User/User';
import Orders from './page/Orders/Orders';
import ForgotPassword from './page/Forgot Password/Forgotpassword';
import Verify from './page/Verify/Verify';
import PasswordChange from './page/PasswordChange/PasswordChange';
Verify

PasswordChange



const Mycontext = createContext()
function App() {

  const [issidebarexpend, setissidebarexpend] = useState(true)
  const [isLogin, setisLogin] = useState(false)
  const [isopenfullscreenpanel, setisopenfullscreenpanel] = useState({
    open: false,
    modal: ''
  })




  const values = {
    issidebarexpend,
    setissidebarexpend,
    isLogin,
    setisLogin,
    isopenfullscreenpanel,
    setisopenfullscreenpanel,
  }
  const router = createBrowserRouter([
    {
      path: '/',
      exact: true,
      element:
        (<>
          <section className='main'>
            <Header />
            <div className="contentMain flex">

              <div className={`sidebarWrapper  ${issidebarexpend === true && 'w-[18%]'} ${issidebarexpend === false && 'w-[0%]'}`} >

                <Sidebar />
              </div>
              <div className="contentRight py-4 px-5 w-[82%] bg-[#f1f1f1]">
                <Dashboard />
              </div>
            </div>

          </section>
        </>)
    },

    {
      path: '/login',
      exact: true,
      element: (<>
        <Login />
      </>),

    },
    {
      path: '/forgotpassword',
      exact: true,
      element: (<>
        <ForgotPassword />
      </>),

    },
    {
      path: '/passwordchange',
      exact: true,
      element: (<>
        <PasswordChange />
      </>),

    },
    {
      path: '/signup',
      exact: true,
      element: (<>
        <Signup />
      </>),

    },
    {
      path: '/verify',
      exact: true,
      element: (<>
        <Verify />
      </>),

    },
    {
      path: '/product',
      exact: true,
      element:
        (<>
          <section className='main'>
            <Header />
            <div className="contentMain flex">

              <div className={`sidebarWrapper  ${issidebarexpend === true && 'w-[18%]'} ${issidebarexpend === false && 'w-[0%]'}`} >

                <Sidebar />
              </div>
              <div className="contentRight py-4 px-5 w-[82%] bg-[#f1f1f1]">
                <Products />
              </div>
            </div>

          </section>
        </>)
    },
    {
      path: '/homeslider/list',
      exact: true,
      element:
        (<>
          <section className='main'>
            <Header />
            <div className="contentMain flex">

              <div className={`sidebarWrapper  ${issidebarexpend === true && 'w-[18%]'} ${issidebarexpend === false && 'w-[0%]'}`} >

                <Sidebar />
              </div>
              <div className="contentRight py-4 px-5 w-[82%] bg-[#f1f1f1]">
                <HomeSliderBanner />
              </div>
            </div>

          </section>
        </>)
    },
    {
      path: '/Category/list',
      exact: true,
      element:
        (<>
          <section className='main'>
            <Header />
            <div className="contentMain flex">

              <div className={`sidebarWrapper  ${issidebarexpend === true && 'w-[18%]'} ${issidebarexpend === false && 'w-[0%]'}`} >

                <Sidebar />
              </div>
              <div className="contentRight py-4 px-5 w-[82%] bg-[#f1f1f1]">
                <Category />
              </div>
            </div>

          </section>
        </>)
    },
    {
      path: '/SubCategory/list',
      exact: true,
      element:
        (<>
          <section className='main'>
            <Header />
            <div className="contentMain flex">

              <div className={`sidebarWrapper  ${issidebarexpend === true && 'w-[18%]'} ${issidebarexpend === false && 'w-[0%]'}`} >

                <Sidebar />
              </div>
              <div className="contentRight py-4 px-5 w-[82%] bg-[#f1f1f1]">
                <SubCategory />
              </div>
            </div>

          </section>
        </>)
    },
    {
      path: '/User/list',
      exact: true,
      element:
        (<>
          <section className='main'>
            <Header />
            <div className="contentMain flex">

              <div className={`sidebarWrapper  ${issidebarexpend === true && 'w-[18%]'} ${issidebarexpend === false && 'w-[0%]'}`} >

                <Sidebar />
              </div>
              <div className="contentRight py-4 px-5 w-[82%] bg-[#f1f1f1]">
                <User />
              </div>
            </div>

          </section>
        </>)
    },
    {
      path: '/Orders/list',
      exact: true,
      element:
        (<>
          <section className='main'>
            <Header />
            <div className="contentMain flex">

              <div className={`sidebarWrapper  ${issidebarexpend === true && 'w-[18%]'} ${issidebarexpend === false && 'w-[0%]'}`} >

                <Sidebar />
              </div>
              <div className="contentRight py-4 px-5 w-[82%] bg-[#f1f1f1]">
                <Orders />
              </div>
            </div>

          </section>
        </>)
    },
  ])

  return (
    <>
      <Mycontext.Provider value={values}>
        <RouterProvider router={router}>

        </RouterProvider>
      </Mycontext.Provider>
    </>
  )
}

export default App;
export { Mycontext };