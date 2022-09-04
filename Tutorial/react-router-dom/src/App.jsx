import { Routes, Link, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import BlogLayout from "./components/blog";
import Blog from "./components/blog/Blog";
import BlogCategories from "./components/blog/Categories";
import BlogPost from "./components/blog/Post";
import Contact from "./components/Contact";
import NotFoundPage from "./components/404";
function App() {
  return (
    <>
      <nav className='main-navbar'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/blog'>Blog</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<BlogLayout />}>
          <Route index={true} element={<Blog />} />
          <Route path='categories' element={<BlogCategories />} />
          <Route path='post/:baslikId/:baslik' element={<BlogPost />} />
        </Route>
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
