/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../../assets/images/logo.png";
import css from './NavBar.css'
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 hover:text-[#3BCF92] font-normal"
      >
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
      </Typography>
      <span className=" hidden lg:block">|</span>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal hover:text-[#3BCF92]"
      >
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          About Us
        </NavLink>
      </Typography>
      <span className=" hidden lg:block">|</span>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal hover:text-[#3BCF92]"
      >
                <NavLink
          to="/services"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Services
        </NavLink>
      </Typography>
      <span className=" hidden lg:block">|</span>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal hover:text-[#3BCF92]"
      >
                <NavLink
          to="/messages"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Blog
        </NavLink>
      </Typography>
      <span className=" hidden lg:block">|</span>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal hover:text-[#3BCF92]"
      >
                <NavLink
          to="/messages"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Contact Us
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <Navbar className=" min-w-full bg-black bg-opacity-60 rounded-none border-none">
      <div className="container mx-auto flex items-center justify-between ">
        {/* <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          Material Tailwind
        </Typography> */}
        <img className=" w-32" src={logo} alt="" />
        <div className="hidden lg:block">{navList}</div>
        <NavLink to={'/login'}>
        <Button
        
        variant=""
        size=""
        className="hidden lg:inline-block bg-[#3BCF92] px-6 py-3"
      >
        <span>Login</span>
      </Button>
        </NavLink>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <NavLink to={'/login'}>
          <Button variant="" size="" fullWidth className="mb-2 bg-[#3BCF92] ">
            <span>Login</span>
          </Button>
          </NavLink>
        </div>
      </MobileNav>
    </Navbar>
  );
}
