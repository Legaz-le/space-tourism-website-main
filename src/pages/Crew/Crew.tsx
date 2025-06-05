import Navbar from "../../components/navbar/Navbar";
import Crew_data from "./Crew_data";

const Crew = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-center
    min-h-screen w-full bg-[url('/assets/crew/background-crew-mobile.jpg')] 
    mb:bg-[url('/assets/crew/background-crew-tablet.jpg')] 
    lg:bg-[url('/assets/crew/background-crew-desktop.jpg')]"
      ><Navbar/>
      <Crew_data />
      </div>
    </>
  );
};

export default Crew;
