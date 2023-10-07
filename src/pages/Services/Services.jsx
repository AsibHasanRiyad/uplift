import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";


const Services = () => {
    const [services, setServices] = ([]);
    useEffect(() =>{
        fetch('services.json')
        .then( res => res.json())
        .then(data => setServices(data))
    },[setServices])
    // const services = useLoaderData();
    console.log(services);
    return (
        <div>
            <h1 className=" text-white text-6xl">This is the serices page </h1>
        </div>
    );
};

export default Services;