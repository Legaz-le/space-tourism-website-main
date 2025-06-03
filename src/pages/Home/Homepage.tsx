import Navbar from "../../components/navbar/Navbar";
import Hero from "./Hero";

const Homepage = () => {

  return (
    <div className="bg-cover bg-no-repeat bg-center
    min-h-screen w-full bg-[url('/assets/home/background-home-mobile.jpg')] 
    mb:bg-[url('/assets/home/background-home-tablet.jpg')] 
    lg:bg-[url('/assets/home/background-home-desktop.jpg')]">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Homepage;
