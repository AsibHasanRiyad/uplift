import { useEffect, useState } from "react";
import Service from "./Service";
import { Helmet } from "react-helmet-async";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  });
  return (
    <div className=" mx-4 lg:mx-20">
      <Helmet>
        <title>Uplift | About Us</title>
      </Helmet>
      <div></div>
      <h1 className=" text-[#17174a] text-6xl font-extrabold text-center py-10">
        Our Services{" "}
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
        {services.map((service) => (
          <Service service={service} key={service.service_id}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
