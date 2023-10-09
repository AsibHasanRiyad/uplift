import { useContext, useEffect, useState } from "react";
import EachBlog from "../EachBlog/EachBlog";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../provider/AuthProvider";
import { Spinner } from "@material-tailwind/react";

const Blog = () => {
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    })

  //   const {loading} = useContext(AuthContext)
  //   if (loading) {
  //     return <div className=" h-screen flex justify-center items-center">
  //         <Spinner className="h-12 w-12" />
  //     </div>
  // }
 
  return (
    <div>
        <div className="my-20 mx-20">
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
