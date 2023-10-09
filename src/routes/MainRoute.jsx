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
import Details from "../components/Detais/Details";
import ErrorPage from "../pages/ErrorPage.jsx/ErrorPage";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    errorElement: <ErrorPage></ErrorPage>,
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
            element: <PrivateRoute><Donate></Donate></PrivateRoute>
        },
        {
            path:'/blog',
            element: <PrivateRoute><Blog></Blog></PrivateRoute>
        },
        {
            path:'/details/:id',
            element: <PrivateRoute><Details></Details></PrivateRoute>,
            loader: () => fetch('/services.json')
        },
    ]
  },
]);

export default MainRouter
