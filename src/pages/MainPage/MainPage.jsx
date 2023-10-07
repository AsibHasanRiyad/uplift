import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import bgimg from '../../assets/images/wave-haikei.svg'
// import bgimg from '../../assets/images/cool-background.png'

const MainPage = () => {
  return (
        <div>
                <div style={{
        // backgroundImage: `url(${bgimg})`,
        //     backgroundSize:'cover'
        background:'black'
    }}>
      <NavBar></NavBar>
      <Outlet></Outlet>
      {/* <Services></Services> */}
      <Footer></Footer>
    </div>
        </div>
  );
};

export default MainPage;
