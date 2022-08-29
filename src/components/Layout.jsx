import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <div>Navbar</div>
        <Outlet/>
        <div className="">
            Footer
        </div>
    </>
  )
}

export default Layout