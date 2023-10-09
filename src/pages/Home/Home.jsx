
import { Helmet } from "react-helmet-async";
import Slider from "../../components/Slider/Slider";
import SwiperSlider from "../../components/Swiper/SwiperSlider";
import Money from "../Money/Money";
import Services from "../Services/Services";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Spinner } from "@material-tailwind/react";

import Aos from "aos";
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(() =>{
    Aos.init();
  },[])
  const {loading} = useContext(AuthContext)
  if (loading) {
    return <div className=" h-screen flex justify-center items-center">
        <Spinner className="h-12 w-12" />
    </div>
}
  return (
    <div className=" overflow-hidden">
      <Helmet>
        <title>Uplift | Home</title>
      </Helmet>
      <Slider></Slider>
      <Services></Services>
      <div className=" px-4 md:px-8  lg:px-24 my-20">
      <h1 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="400"   className=" text-3xl md:text-5xl text-center px-0 md:px-10 xl:px-36 font-bold text-[#17174a]">
          We’ve funded <span className=" text-[#3BCF92]">1200 charity projects</span> for <span className=" text-[#208FEC]">200000</span> people around the world.
        </h1>
      <div data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000"  >
      <SwiperSlider ></SwiperSlider>
      </div>
      </div>
      <Money></Money>
    </div>
  );
};

export default Home;
