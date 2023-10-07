import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import { Login } from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Services from "../pages/Services/Services";
import Donate from "../pages/Donate/Donate";
import Blog from "../pages/Blog/Blog";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/about',
            element: <AboutUs></AboutUs>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/register',
            element: <Register></Register>
        },
        {
            path:'/services',
            element: <Services></Services>,
        },
        {
            path:'/donate',
            element: <Donate></Donate>
        },
        {
            path:'/blog',
            element: <Blog></Blog>
        },
    ]
  },
]);

export default MainRouter
