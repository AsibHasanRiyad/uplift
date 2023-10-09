import { useContext, useEffect, useState } from "react";
import Service from "./Service";
import { Helmet } from "react-helmet-async";
import { Spinner } from "@material-tailwind/react";
import { AuthContext } from "../../provider/AuthProvider";
import Aos from "aos";
import "aos/dist/aos.css";
const Services = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  });
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className=" h-screen flex justify-center items-center">
        <Spinner className="h-12 w-12" />
      </div>
    );
  }
  return (
    <div className=" mx-4 lg:mx-20">
      <Helmet>
        <title>Uplift | About Us</title>
      </Helmet>
      <div></div>
      <h1
        data-aos="fade-left"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        className=" text-[#17174a] text-3xl md:text-4xl lg:text-6xl font-extrabold text-center pt-10 pb-5"
      >
        Our Services{" "}
      </h1>
      <p className=" text-center pb-6 text-xl text-gray-700">
        The Charity Foundation Uplift Services offers essential support such as
        food aid, shelter, healthcare, education, and more to help individuals
        and communities in need. Their mission is to uplift lives and promote
        positive change.
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
        {services.map((service) => (
          <Service service={service} key={service.id}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
