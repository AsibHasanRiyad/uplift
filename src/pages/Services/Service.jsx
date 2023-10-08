/* eslint-disable react/prop-types */
import { FaDollarSign, FaHandHoldingHeart } from "react-icons/fa";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Progress,
} from "@material-tailwind/react";

const Service = ({ service }) => {
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
      <Card className="mt-6 ">
        <CardHeader color="blue-gray" className="relative h-56">
          <img className=" w-full h-full" src={image_url} alt="card-image" />
        </CardHeader>
        <CardBody>
        <div className=" flex justify-between mb-4">
            <button className=" bg-[#3BCF92] px-3 py-1 rounded-lg text-white flex justify-center items-center gap-1">
              Donate: {price} <FaDollarSign></FaDollarSign>{" "}
            </button>
            <h1 className=" flex justify-center items-center gap-2 bg-[#208FEC] px-3 py-1 rounded-full text-white">
              {" "}
              <FaHandHoldingHeart></FaHandHoldingHeart> {area}{" "}
            </h1>
          </div>
          <Typography variant="h5" color="blue-gray" className="mb-2 text-[#3BCF92] text-2xl font-bold">
            {service_name}
          </Typography>
          <Typography>{description.slice(0, 200)} <span className=" text-[#3BCF92] font-bold">See More ...</span></Typography>
          <div className="flex h-full rounded-full flex-col gap-4 mt-2">
            <Progress
              value={((total_donation / donation_goal) * 100).toFixed(2)}
              label="Raised"
              size="lg"
              className=" bg-[#3BCF92] "
              color="blue"
              variant="Donation Raised"
            />
          </div>
        </CardBody>
        {/* <CardFooter className="pt-0">
          <Button className=" bg-[#3BCF92]">See Details</Button>
        </CardFooter> */}
      </Card>
    </div>
  );
};

export default Service;