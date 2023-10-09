import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import { Login } from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Services from "../pages/Services/Services";
import Donate from "../pages/Donate/Donate";
import Blog from "../pages/Blog/Blog";
import PrivateRoute from "./PrivateRoute";
import TestPage from "../pages/TestPage/TestPage";
import Details from "../components/Detais/Details";

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
            path:'/test',
            element: <TestPage></TestPage>,
        },
        {
            path:'/donate',
            element: <PrivateRoute><Donate></Donate></PrivateRoute>
        },
        {
            path:'/blog',
            element: <PrivateRoute><Blog></Blog></PrivateRoute>
        },
        {
            path:'/details/:id',
            element: <Details></Details>,
            loader: () => fetch('/services.json')
        },
    ]
  },
]);

export default MainRouter
