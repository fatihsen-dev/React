import HomeLayout from "../HomeLayout";
import Home from "../Home";
import Contact from "../Contact";
import BlogLayout from "../blog/index";
import Blog from "../blog/Blog";
import BlogCategories from "../blog/Categories";
import BlogPost from "../blog/Post";
import NotFoundPage from "../404";
import PrivateRoute from "../PrivateRoute";
import Profile from "../Profile";
import AuthLayout from "../auth/AuthLayout";
import Login from "../auth/Login";

const routes = [
  {
    path: "/",
    element: <HomeLayout />,
    name: "home",
    children: [
      { index: true, element: <Home />, name: "index" },
      { path: "contact", element: <Contact />, name: "contact" },
      {
        path: "blog",
        name: "blog",
        element: <BlogLayout />,
        auth: true,
        children: [
          { index: true, element: <Blog />, name: "index" },
          {
            path: "categories",
            element: <BlogCategories />,
            name: "categories",
          },
          {
            name: "post",
            path: "post/:id/:url",
            element: <BlogPost />,
          },
        ],
      },
      {
        path: "/profile",
        element: <Profile />,
        name: "profile",
        auth: true,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    name: "auth",
    children: [
      {
        path: "login",
        name: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "*",
    name: "notFound",
    element: <NotFoundPage />,
  },
];

const authMap = (routes) =>
  routes.map((route) => {
    if (route?.auth) {
      route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    }
    if (route?.children) {
      route.children = authMap(route.children);
    }
    return route;
  });

export default authMap(routes);
