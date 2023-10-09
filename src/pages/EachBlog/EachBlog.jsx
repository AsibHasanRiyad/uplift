/* eslint-disable react/prop-types */
import { Progress } from "@material-tailwind/react";
import React from "react";
import { FaDollarSign, FaHandHoldingHeart } from "react-icons/fa";

const EachBlog = ({ service }) => {
  const {
    service_name,
    description,
    area,
    price,
    donation_goal,
    total_donation,
    palce_name,
    image_url,
  } = service;
  return (
    <div>
      <div className=" grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-5  my-10 border shadow-xl p-4 rounded-md">
        <div className=" col-span-2">
          <img className=" h-full w-full rounded-md" src={image_url} alt="" />
        </div>
        <div className=" col-span-3">
          <h1 className=" text-2xl  font-bold text-[#3BCF92] ">
            {service_name}
          </h1>
          <div className=" flex justify-between my-4">
            <button className=" bg-[#3BCF92] px-3 py-1 rounded-lg text-white flex justify-center items-center gap-1">
              Donate: {price} <FaDollarSign></FaDollarSign>{" "}
            </button>
            <h1 className=" flex justify-center items-center gap-2 bg-[#208FEC] px-3 py-1 rounded-full text-white">
              {" "}
              <FaHandHoldingHeart></FaHandHoldingHeart> {area}{" "}
            </h1>
          </div>
          <p className=" text-base text-gray-700 text-justify">
            {description.slice(0, 500)}{" "}
            <span className=" text-[#3BCF92] font-body cursor-pointer">
              See Details
            </span>
          </p>
          <p className=" mt-2 text-2xl text-gray-700">
            <span className=" text-[#3BCF92] font-body cursor-pointer">
              Target:{" "}
            </span>
            {donation_goal}$
          </p>
          <p className=" my-3 text-2xl text-gray-700">
            <span className=" text-[#3BCF92] font-body cursor-pointer">
              Fund Raised:{" "}
            </span>
            {total_donation}$
          </p>
          <Progress
            value={((total_donation / donation_goal) * 100).toFixed(2)}
            label="Raised"
            size="lg"
            className=" bg-[#3BCF92] "
            color="blue"
            variant="Donation Raised"
          />
        </div>
      </div>
    </div>
  );
};

export default EachBlog;
