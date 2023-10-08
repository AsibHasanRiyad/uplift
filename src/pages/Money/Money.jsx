import React from "react";
import { Pie } from "../../components/Pie/Pie";

const Money = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 items-center px-4 lg:px-28">
      <div>
        <h1 className=" text-5xl text-[#17174a] font-body">Where the money goes?</h1>
        <p className=" py-4 text-base text-gray-700">
          Charity law within the UK varies among England and Wales, Scotland and
          Northern Ireland, but the fundamental principles are the same. Most
          organizations that are charities. Find out more about how Chariti
          works hard to ensure that your donations are delivered directly to
          those that need it most.
        </p>
        <button className=" text-white bg-[#3BCF92] px-5 py-2 rounded-md">Learn More</button>
      </div>
      <div>
        <Pie></Pie>
      </div>
    </div>
  );
};

export default Money;
