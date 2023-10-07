import React, { useEffect, useState } from "react";
import EachBlog from "../EachBlog/EachBlog";

const Blog = () => {
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    })
  return (
    <div>
        <div className="my-20 mx-20">
            {
                services.map(service => <EachBlog service={service} key={service.service_id}></EachBlog> )
            }
            </div>
    </div>
  );
};

export default Blog;
