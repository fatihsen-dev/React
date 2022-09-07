import { Routes, Navigate, Route } from "react-router-dom";
import Home from "./components/Home";
import BlogLayout from "./components/blog";
import Blog from "./components/blog/Blog";
import BlogCategories from "./components/blog/Categories";
import BlogPost from "./components/blog/Post";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import AuthLayout from "./components/auth/AuthLayout";
import Login from "./components/auth/Login";
import HomeLayout from "./components/HomeLayout";
import NotFoundPage from "./components/404";
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomeLayout />}>
          <Route index={true} element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<BlogLayout />}>
            <Route index={true} element={<Blog />} />
            <Route path='categories' element={<BlogCategories />} />
            <Route path='post/:baslikId/:baslik' element={<BlogPost />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
          <Route
            path='/profile'
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path='/auth' element={<AuthLayout />}>
          <Route path='login' element={<Login />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
