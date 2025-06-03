import {useState} from "react";
import Mobile_Menue from "./Mobile_Menue";


const Navbar_Mobile = () => {
    const[navbar,setNavbar] = useState(false);

  const toggleNavbar = () => {
    setNavbar(prev => !prev);
  }
  return (
    <header className="mx-auto flex justify-between items-center py-5">
        <img src="/assets/shared/logo.svg" alt="logo" className="max-w-full h-auto ml-8 " />
        <button onClick={toggleNavbar} aria-expanded={navbar}><img src="/assets/shared/icon-hamburger.svg" alt="menu-icon"  className="max-w-full h-auto  mr-8" /></button>
        <Mobile_Menue isOpen={navbar} onClose={() => setNavbar(false)}/>
    </header>
  )
}

export default Navbar_Mobile
