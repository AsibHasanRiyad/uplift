/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Pie } from "../../components/Pie/Pie";
import Aos from "aos";
import 'aos/dist/aos.css'

const Money = () => {
  useEffect(() =>{
    Aos.init();
  },[])
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 items-center px-4 lg:px-28 ">
      <div  data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" >
        <h1 className=" text-3xl lg:text-5xl text-[#17174a] font-bold">Where the money goes?</h1>
        <p className=" py-4 text-lg text-gray-700 text-justify">
          Charity law within the UK varies among England and Wales, Scotland and
          Northern Ireland, but the fundamental principles are the same. Most
          organizations that are charities. Find out more about how Chariti
          works hard to ensure that your donations are delivered directly to
          those that need it most.
        </p>
        <button className=" text-white bg-[#3BCF92] px-5 py-2 rounded-md">Learn More</button>
      </div>
      <div data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" >
        <Pie></Pie>
      </div>
    </div>
  );
};

export default Money;
