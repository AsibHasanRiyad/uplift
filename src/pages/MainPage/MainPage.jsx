import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
const MainPage = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      data-aos="fade-down"
      data-aos-offset="100"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
      className=" bg-gray-100"
    >
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        {/* Same as */}
        <ToastContainer />
        <NavBar></NavBar>
        <Outlet></Outlet>
        {/* <Services></Services> */}
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainPage;
