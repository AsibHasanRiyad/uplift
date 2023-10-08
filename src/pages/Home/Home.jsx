
import { Helmet } from "react-helmet-async";
import Slider from "../../components/Slider/Slider";
import SwiperSlider from "../../components/Swiper/SwiperSlider";
import Money from "../Money/Money";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Uplift | Home</title>
      </Helmet>
      <Slider></Slider>
      {/* <div
        style={{
          backgroundImage: `url("https://i.ibb.co/N1LD1TT/larm-rmah-AEa-TUnvneik-unsplash.jpg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          //   height:'screen'
        }}
      >
        <div className=" bg-black bg-opacity-60">
        <h1 className=" h-[100vh] flex justify-center items-center">
        This is the home section
      </h1>
        </div>
      </div> */}
      <Services></Services>
      <div className=" px-4 md:px-8  lg:px-24 my-20">
      <h1 className=" text-3xl md:text-5xl text-center px-0 md:px-10 xl:px-36 font-bold text-[#17174a]">
          We’ve funded <span className=" text-[#3BCF92]">1200 charity projects</span> for <span className=" text-[#208FEC]">200000</span> people around the world.
        </h1>
      <SwiperSlider></SwiperSlider>
      </div>
      <Money></Money>
    </div>
  );
};

export default Home;
