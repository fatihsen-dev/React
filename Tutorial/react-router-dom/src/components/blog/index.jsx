import { Outlet, NavLink } from "react-router-dom";

function Blog() {
  return (
    <div>
      <h3>Blog Page</h3>
      <Outlet />
    </div>
  );
}

export default Blog;
