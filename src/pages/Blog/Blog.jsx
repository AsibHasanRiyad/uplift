import { useEffect, useState } from "react";
import EachBlog from "../EachBlog/EachBlog";
import { Helmet } from "react-helmet-async";
import 'aos/dist/aos.css'
import Aos from "aos";



const Blog = () => {
  useEffect(() =>{
    Aos.init();
  },[])
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    })
 
  return (
    <div data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"   >
        <div className="my-10 mx-4 lg:mx-20">
        <Helmet>
        <title>Uplift | Blog</title>
      </Helmet>
            {
                services.map(service => <EachBlog service={service} key={service.id}></EachBlog> )
            }
            </div>
    </div>
  );
};

export default Blog;
