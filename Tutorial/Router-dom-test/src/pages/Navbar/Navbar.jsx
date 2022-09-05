import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className='main-nav'>
      <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/post'>Post</NavLink>
      </div>
      <NavLink to='/profile'>Profile</NavLink>
    </nav>
  );
}
