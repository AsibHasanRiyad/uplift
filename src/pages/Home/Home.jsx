
import Slider from "../../components/Slider/Slider";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      {/* <div
        style={{
          backgroundImage: `url("https://i.ibb.co/N1LD1TT/larm-rmah-AEa-TUnvneik-unsplash.jpg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          //   height:'screen'
        }}
      >
        <div className=" bg-black bg-opacity-60">
        <h1 className=" h-[100vh] flex justify-center items-center">
        This is the home section
      </h1>
        </div>
      </div> */}
      <Services></Services>
    </div>
  );
};

export default Home;
