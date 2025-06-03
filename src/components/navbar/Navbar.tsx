import { useMediaQuery } from "react-responsive";
import Navbar_Desktop from "./Navbar_Desktop";
import Navbar_Tablet from "./Navbar_tablet";
import Navbar_Mobile from "./Navbar_Mobile";

const Navbar = () => {
    const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1024px)'
  })
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1024px)",
  });
  return (
    <>{isDesktopOrLaptop ? <Navbar_Desktop /> : isTablet ? <Navbar_Tablet /> : <Navbar_Mobile />}</>
  )
}

export default Navbar
