import Navbar from "../../components/navbar/Navbar"
import Technology_data from "./Technology_data"

const Technology = () => {
  return (
    <>
    <div
        className="bg-cover bg-no-repeat bg-center
    min-h-screen w-full bg-[url('/assets/technology/background-technology-mobile.jpg')] 
    mb:bg-[url('/assets/technology/background-technology-tablet.jpg')] 
    lg:bg-[url('/assets/technology/background-technology-desktop.jpg')]"
      ><Navbar/>
      <Technology_data />
      </div>
      
    </>
  )
}

export default Technology
