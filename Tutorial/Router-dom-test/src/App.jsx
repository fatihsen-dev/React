import { Routes, Route, NavLink } from "react-router-dom";
import Navbar from "./pages/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Post from "./pages/Post/Post";
import Profile from "./pages/Profile/Profile";
import YourPost from "./pages/Post/YourPost";
import AllPost from "./pages/Post/AllPost";
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./pages/404/404";
import AuthLayout from "./pages/auth/AuthLayout";
import Login from "./pages/auth/Login";
export default function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className='page-container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/post' element={<Post />}>
            <Route path='allpost/:id/:username' element={<AllPost />} />
            <Route path='yourpost' element={<YourPost />} />
          </Route>
          <Route path='*' element={<NotFound />} />

          <Route path='/auth' element={<AuthLayout />}>
            <Route index={true} element={<Login />} />
          </Route>
          {/* Private Root */}
          <Route
            path='/profile'
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}
