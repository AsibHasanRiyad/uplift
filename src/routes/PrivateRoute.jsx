/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";


const PrivateRoute = ({children}) => {
    const location = useLocation()
    // console.log(location);
    const {user, loading} = useContext(AuthContext)
//     if (loading) {
//       return <div className=" h-screen flex justify-center items-center">
//           <Spinner className="h-12 w-12" />
//       </div>
//   }
    if (user) {
        return children
    }
    else return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;