/* eslint-disable react/prop-types */
import { FaDollarSign, FaHandHoldingHeart } from "react-icons/fa";

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";


const Service = ({service}) => {
 const {service_name, description, area,price, donation_goal, palce_name, image_url} = service
    return (
        <div>
    <Card className="mt-6 ">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
        className=" w-full h-full"
          src={image_url}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
         {service_name}
        </Typography>
        <Typography>
          {description.slice(0,200)} 
        </Typography>
      <div className=" flex justify-between pt-3">
        <h1 className=" flex justify-center items-center gap-1">Donate: {price} <FaDollarSign></FaDollarSign> </h1>
        <h1 className=" flex justify-center items-center gap-2"> <FaHandHoldingHeart></FaHandHoldingHeart> {area} </h1>
      </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button className=" bg-[#3BCF92]">See Details</Button>
      </CardFooter>
    </Card>
        </div>
    );
};

export default Service;