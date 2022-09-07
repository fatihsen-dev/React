import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { url } from "./utils";

function HomeLayout() {
  return (
    <>
      <nav className='main-navbar'>
        <div>
          <NavLink to={url("home")}>Home</NavLink>
          <NavLink to={url("home.contact")}>Contact</NavLink>
          <NavLink to={url("home.blog")}>Blog</NavLink>
        </div>
        <NavLink to='/profile'>Profile</NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default HomeLayout;
