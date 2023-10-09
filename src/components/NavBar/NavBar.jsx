/* eslint-disable no-unused-vars */

import React, { useContext, useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import css from "./NavBar.css";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Select,
  Option,
  Menu,
  MenuHandler,
  Avatar,
  MenuList,
  MenuItem,
  Tooltip,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

export default function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    // Handle menu item click logic here
    // For example, you can navigate to a different page or perform an action
    setMenuOpen(false); // Close the menu
  };

  const { user, logOut } = useContext(AuthContext);
  const [openNav, setOpenNav] = React.useState(false);

  const handelLogout = () => {
    logOut()
      .then((result) => console.log("kjskljdsaf", result))
      .catch((error) => console.log(error));
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  // console.log(user?.photoURL);

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
          to="/blog"
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
          to="/donate"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Donate
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <Navbar className=" min-w-full bg-black bg-opacity-100 rounded-none border-none">
      <div className="container mx-auto flex items-center justify-between ">
        <NavLink to={"/"}>
          <img className=" w-24 cursor-pointer" src={logo} alt="" />
        </NavLink>
        <div className="hidden lg:block">{navList}</div>
        {user ? (
          <div className=" hidden lg:block">
            <div className="  lg:flex justify-center items-center gap-3">
              <Menu>
                <MenuHandler>
                  <Avatar
                    withBorder={true}
                    color="green"
                    alt="tania andrew"
                    className="cursor-pointer p-0.5 w-10 h-10"
                    src={user.photoURL}
                  />
                </MenuHandler>
                <MenuList>
                  <MenuItem className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <Typography variant="small" className="font-normal">
                      <h1 className=" text-2xl">{user.displayName}</h1>
                    </Typography>
                  </MenuItem>
                  <MenuItem className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <Typography variant="small" className="font-normal">
                      Edit Profile
                    </Typography>
                  </MenuItem>
                  <MenuItem className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
                      />
                    </svg>
                    <Typography variant="small" className="font-normal">
                      Inbox
                    </Typography>
                  </MenuItem>
                  <MenuItem className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"
                      />
                    </svg>
                    <Typography variant="small" className="font-normal">
                      Help
                    </Typography>
                  </MenuItem>
                  <hr className="my-2 border-blue-gray-50" />
                </MenuList>
              </Menu>
              <Tooltip content="Log Out" placement="top">
                <button
                  className=" text-3xl font-light "
                  onClick={handelLogout}
                >
                  <div className=" border border-white rounded-full">
                    <svg
                      viewBox="0 0 64 64"
                      height="40px"
                      width="40px"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      transform="rotate(0)"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M31.52 8.55103C25.6805 8.55573 20.0548 10.7487 15.7526 14.6973C11.4504 18.6458 8.78426 24.0633 8.28 29.881H29.34L27.45 28.001C27.2634 27.8159 27.1151 27.5959 27.0136 27.3535C26.9121 27.111 26.8594 26.8509 26.8584 26.5881C26.8575 26.3253 26.9084 26.0648 27.0082 25.8217C27.108 25.5785 27.2547 25.3575 27.44 25.1711C27.6251 24.9844 27.8451 24.8361 28.0876 24.7346C28.33 24.6331 28.5901 24.5804 28.8529 24.5795C29.1158 24.5785 29.3762 24.6294 29.6194 24.7292C29.8625 24.829 30.0836 24.9757 30.27 25.161L35.6 30.461V30.471C35.7103 30.5794 35.8076 30.7002 35.89 30.831C35.9444 30.9168 35.9913 31.0071 36.03 31.101C36.04 31.121 36.05 31.131 36.05 31.151C36.0924 31.2581 36.1259 31.3685 36.15 31.481V31.501C36.1786 31.6256 36.1921 31.7532 36.19 31.881C36.1921 32.0089 36.1786 32.1365 36.15 32.261C36.1387 32.3645 36.1118 32.4657 36.07 32.561C36.061 32.596 36.0476 32.6296 36.03 32.661C36.0218 32.6851 36.0118 32.7085 36 32.731C35.9749 32.7953 35.9413 32.8558 35.9 32.911C35.877 32.9565 35.8503 33 35.82 33.041C35.7614 33.1274 35.6944 33.2078 35.62 33.281L35.6 33.301L30.27 38.661C30.0854 38.8473 29.8658 38.9953 29.6238 39.0966C29.3819 39.1978 29.1223 39.2503 28.86 39.251C28.5977 39.2503 28.3382 39.1978 28.0962 39.0966C27.8542 38.9953 27.6347 38.8473 27.45 38.661C27.2629 38.4773 27.114 38.2582 27.0121 38.0166C26.9102 37.7749 26.8573 37.5154 26.8563 37.2531C26.8554 36.9908 26.9065 36.731 27.0067 36.4886C27.1069 36.2462 27.2542 36.0261 27.44 35.841L29.39 33.881H8.28C8.78426 39.6987 11.4504 45.1162 15.7526 49.0648C20.0548 53.0134 25.6805 55.2063 31.52 55.211C37.7069 55.2063 43.6393 52.7471 48.0151 48.3732C52.3909 43.9993 54.8526 38.068 54.86 31.881C54.8526 25.6941 52.3909 19.7628 48.0151 15.3889C43.6393 11.015 37.7069 8.55579 31.52 8.55103Z"
                          fill="#3BCF92"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                </button>
              </Tooltip>
            </div>
          </div>
        ) : (
          <NavLink to={"/login"}>
            <Button
              variant=""
              size=""
              className="hidden lg:inline-block bg-[#3BCF92] px-6 py-3"
            >
              <span>Login</span>
            </Button>
          </NavLink>
        )}
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
          {user ? (
            <div className=" flex justify-center items-center gap-3">
              <Menu>
                <MenuHandler>
                  <Avatar
                    withBorder={true}
                    color="green"
                    alt="tania andrew"
                    className="cursor-pointer p-0.5 w-10 h-10"
                    src={user.photoURL}
                  />
                </MenuHandler>
                <MenuList>
                  <MenuItem className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <Typography variant="small" className="font-normal">
                      <h1 className=" text-2xl">{user.displayName}</h1>
                    </Typography>
                  </MenuItem>
                  <MenuItem className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <Typography variant="small" className="font-normal">
                      Edit Profile
                    </Typography>
                  </MenuItem>
                  <MenuItem className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
                      />
                    </svg>
                    <Typography variant="small" className="font-normal">
                      Inbox
                    </Typography>
                  </MenuItem>
                  <MenuItem className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"
                      />
                    </svg>
                    <Typography variant="small" className="font-normal">
                      Help
                    </Typography>
                  </MenuItem>
                  <hr className="my-2 border-blue-gray-50" />
                </MenuList>
              </Menu>
              <Tooltip content="Log Out" placement="top">
                <button
                  className=" text-3xl font-light "
                  onClick={handelLogout}
                >
                                   <div className=" border border-white rounded-full">
                    <svg
                      viewBox="0 0 64 64"
                      height="40px"
                      width="40px"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      transform="rotate(0)"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M31.52 8.55103C25.6805 8.55573 20.0548 10.7487 15.7526 14.6973C11.4504 18.6458 8.78426 24.0633 8.28 29.881H29.34L27.45 28.001C27.2634 27.8159 27.1151 27.5959 27.0136 27.3535C26.9121 27.111 26.8594 26.8509 26.8584 26.5881C26.8575 26.3253 26.9084 26.0648 27.0082 25.8217C27.108 25.5785 27.2547 25.3575 27.44 25.1711C27.6251 24.9844 27.8451 24.8361 28.0876 24.7346C28.33 24.6331 28.5901 24.5804 28.8529 24.5795C29.1158 24.5785 29.3762 24.6294 29.6194 24.7292C29.8625 24.829 30.0836 24.9757 30.27 25.161L35.6 30.461V30.471C35.7103 30.5794 35.8076 30.7002 35.89 30.831C35.9444 30.9168 35.9913 31.0071 36.03 31.101C36.04 31.121 36.05 31.131 36.05 31.151C36.0924 31.2581 36.1259 31.3685 36.15 31.481V31.501C36.1786 31.6256 36.1921 31.7532 36.19 31.881C36.1921 32.0089 36.1786 32.1365 36.15 32.261C36.1387 32.3645 36.1118 32.4657 36.07 32.561C36.061 32.596 36.0476 32.6296 36.03 32.661C36.0218 32.6851 36.0118 32.7085 36 32.731C35.9749 32.7953 35.9413 32.8558 35.9 32.911C35.877 32.9565 35.8503 33 35.82 33.041C35.7614 33.1274 35.6944 33.2078 35.62 33.281L35.6 33.301L30.27 38.661C30.0854 38.8473 29.8658 38.9953 29.6238 39.0966C29.3819 39.1978 29.1223 39.2503 28.86 39.251C28.5977 39.2503 28.3382 39.1978 28.0962 39.0966C27.8542 38.9953 27.6347 38.8473 27.45 38.661C27.2629 38.4773 27.114 38.2582 27.0121 38.0166C26.9102 37.7749 26.8573 37.5154 26.8563 37.2531C26.8554 36.9908 26.9065 36.731 27.0067 36.4886C27.1069 36.2462 27.2542 36.0261 27.44 35.841L29.39 33.881H8.28C8.78426 39.6987 11.4504 45.1162 15.7526 49.0648C20.0548 53.0134 25.6805 55.2063 31.52 55.211C37.7069 55.2063 43.6393 52.7471 48.0151 48.3732C52.3909 43.9993 54.8526 38.068 54.86 31.881C54.8526 25.6941 52.3909 19.7628 48.0151 15.3889C43.6393 11.015 37.7069 8.55579 31.52 8.55103Z"
                          fill="#3BCF92"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                </button>
              </Tooltip>
            </div>
          ) : (
            <NavLink to={"/login"}>
              <h1 className=" text-white cursor-pointer pl-1 text-sm font-normal">
                Login
              </h1>
            </NavLink>
          )}
        </div>
      </MobileNav>
    </Navbar>
  );
}
