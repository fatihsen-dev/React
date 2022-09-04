import { NavLink } from "react-router-dom";
export default function Blog() {
  return (
    <nav className='navbar'>
      <NavLink to='categories'>Categories</NavLink>
      <NavLink to='post/10/bu-bir-test-urlsidir'>Post</NavLink>
    </nav>
  );
}
