import {Link, useLocation} from "react-router-dom"

const Navbar_Desktop = () => {
  const location = useLocation()
  const path = location.pathname;
  return (
    <header className="mx-auto px-4 md:px-8 lg:px-5 xl:px-10 flex  justify-between items-center py-5">
        <img src="/assets/shared/logo.svg" alt="logo" className="max-w-full h-auto mr-10 " />
        <div className="z-10 -mr-8 md:-mr-6 h-1 w-full border-b-2 border-white/10"></div>
        <ul className="flex h-full w-full items-center  text-white justify-evenly px-8  xl:text-lg  gap-10 bg-white/1 lg:text-sm text-lg uppercase backdrop-blur-xl ">
          <li className="flex h-full font-doto gap-2 tracking-[4px]">
            <Link
              to="/"
              className={`${path === "/" ? "border-white" : "border-transparent"} flex h-full items-center gap-2 whitespace-nowrap border-b-4 py-10 font-light tracking-widest transition-colors duration-300 ease-in-out hover:border-white`}
            >
            <span className="font-bold ">00 </span>Home
            </Link>
          </li>
          <li className="flex h-full font-doto gap-2 tracking-[4px]">
            <Link
              to="/destination"
              className={`${path === "/destination" ? "border-white" : "border-transparent"} flex h-full items-center gap-2 whitespace-nowrap border-b-4 py-10 font-light tracking-widest transition-colors duration-300 ease-in-out hover:border-white`}
            >
            <span className="font-bold">01 </span>Destination
            </Link>
          </li>
          <li className="flex h-full font-doto gap-2 tracking-[4px]">
            <Link
              to="/crew"
              className={`${path === "/crew" ? "border-white" : "border-transparent"} flex h-full items-center gap-2 whitespace-nowrap border-b-4 py-10 font-light tracking-widest transition-colors duration-300 ease-in-out hover:border-white`}
            >
            <span className="font-bold">02</span> Crew
            </Link>
          </li>
          <li className="flex h-full font-doto gap-2 tracking-[4px]">
            <Link
              to="/technology"
              className={`${path === "/technology" ? "border-white" : "border-transparent"} flex h-full items-center gap-2 whitespace-nowrap border-b-4 py-10 font-light tracking-widest transition-colors duration-300 ease-in-out hover:border-white`}
            >
            <span className="font-bold">03</span> Technology
            </Link>
          </li>
        </ul>
    </header>
  );
};

export default Navbar_Desktop;
