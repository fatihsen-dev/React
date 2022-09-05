import { NavLink, Outlet } from "react-router-dom";

export default function Post() {
  return (
    <>
      <nav className='navbar-2'>
        <NavLink to='/post/allpost/15/fatihydrm'>All Post</NavLink>
        <NavLink to='/post/yourpost'>Your Post</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
