import {  useContext, useEffect, useState } from "react";
import SwiperSlider from "../../components/Swiper/SwiperSlider";
import { FaAngleDoubleRight } from "react-icons/fa";
import { EachCard } from "./EachCard";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../provider/AuthProvider";
import { Spinner } from "@material-tailwind/react";

import Aos from "aos";
import 'aos/dist/aos.css'

const AboutUs = () => {
  useEffect(() =>{
    Aos.init();
  },[])
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  });
  const {loading} = useContext(AuthContext)
  if (loading) {
    return <div className=" h-screen flex justify-center items-center">
        <Spinner className="h-12 w-12" />
    </div>
}
  return (
    <div className=" overflow-hidden">
      <Helmet>
        <title>Uplift | About Us</title>
      </Helmet>
      <div data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000"   >
      <SwiperSlider ></SwiperSlider>
      </div>

      <div data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"   className=" mx-4">
        <h1  className=" text-2xl md:text-3xl xl:text-5xl text-center px-0 md:px-10 xl:px-36 font-bold text-[#17174a] py-10">
          We are an Globian non-profit organization that{" "}
          <span className=" text-[#3BCF92]">supports</span> good causes and
          positive change all over the world.
        </h1>
        <div className="  px-4 mb-16 md:px-10 xl:px-32 pt-10">
        <h1 className="text-2xl md:text-4xl text-start text-[#17174a] font-bold">
          What We Do?
        </h1>
        <p className=" text-lg text-gray-800 my-4 text-justify">
          Providing quality education opportunities to underprivileged children
          and youth. Ending hunger and malnutrition in communities through
          nutritious meals. Offering essential healthcare services to improve
          well-being in underserved areas. Ensuring access to safe and clean
          drinking water for those in need. Join us in making a difference
          today.
        </p>
      </div>
        <div className=" grid grid-cols-1 gap-6 lg:gap-20 my-16 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto ">
          <div>
            <h1 className=" text-3xl text-[#17174a] font-bold mb-3">
              Our Mission
            </h1>
            <p className=" text-lg text-gray-800  text-justify">
              The CharityPress community was named a “Top 25 Best Global
              Philanthropist” by Barron’s. We beat Oprah. And, Mashable named
              CharityPress something like that.
            </p>
          </div>
          <div>
            <h1 className=" text-3xl text-[#17174a] font-bold mb-3">
              Our Vision
            </h1>
            <p className=" text-lg text-gray-800 text-justify">
              The Globian Fund for Charities seeks positive change around the
              world through support of non-profit organizations dedicated to
              social, cultural.
            </p>
          </div>
          <div>
            <h1 className=" text-3xl text-[#17174a] font-bold mb-3">
              Our Values
            </h1>
            <ul className=" text-lg text-gray-800 ">
              <li className=" flex items-center gap-2">
                {" "}
                <span className=" text-[#3BCF92]">
                  <FaAngleDoubleRight></FaAngleDoubleRight>{" "}
                </span>{" "}
                Accountability
              </li>
              <li className=" flex items-center gap-2">
                {" "}
                <span className=" text-[#3BCF92]">
                  <FaAngleDoubleRight></FaAngleDoubleRight>{" "}
                </span>{" "}
                Reliability
              </li>
              <li className=" flex items-center gap-2">
                {" "}
                <span className=" text-[#3BCF92]">
                  <FaAngleDoubleRight></FaAngleDoubleRight>{" "}
                </span>{" "}
                Cost-effectiveness
              </li>
              <li className=" flex items-center gap-2">
                {" "}
                <span className=" text-[#3BCF92]">
                  <FaAngleDoubleRight></FaAngleDoubleRight>{" "}
                </span>{" "}
                Personal service
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" m grid grid-cols-1 gap-6 my-16 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-4 md:mx-8 lg:mx-auto ">
        {data?.map((each) => (
          <EachCard each={each} key={each.slogan}></EachCard>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
