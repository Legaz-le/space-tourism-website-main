import Navbar from "../../components/navbar/Navbar";
import Destination_data from "./Destination_data";

const Desination = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-center
    min-h-screen w-full bg-[url('/assets/destination/background-destination-mobile.jpg')] 
    mb:bg-[url('/assets/destination/background-destination-tablet.jpg')] 
    lg:bg-[url('/assets/destination/background-destination-desktop.jpg')]"
      >
        <Navbar />
        <Destination_data />
      </div>
    </>
  );
};

export default Desination;
