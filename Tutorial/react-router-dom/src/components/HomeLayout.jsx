import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <>
      <nav className='main-navbar'>
        <div>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/blog'>Blog</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </div>
        <NavLink to='/profile'>Profile</NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default HomeLayout;
