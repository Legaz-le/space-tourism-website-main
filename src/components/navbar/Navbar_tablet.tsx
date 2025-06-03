import {Link, useLocation} from "react-router-dom"

const Navbar_Tablet = () => {
  const location = useLocation()
  const path = location.pathname;
  return (
    <header className="flex h-24 w-full justify-between items-center ">
        <img src="/assets/shared/logo.svg" alt="logo" className="max-w-full h-auto ml-8 " />
        <ul className="flex h-full  items-center font-doto  text-white justify-evenly px-7   gap-4 bg-white/6 lg:text-sm text-lg uppercase backdrop-blur-xl tracking-widest ">
          <li className="flex h-full  tracking-[2px] items-end">
            <Link
              to="/"
              className={`${path === "/" ? "border-white" : "border-transparent"} flex h-full items-center border-b-4 transition-all duration-300  hover:border-white`}
            >
            Home
            </Link>
          </li>
          <li className="flex h-full   tracking-[4px]">
            <Link
              to="/destination"
              className={`${path === "/destination" ? "border-white" : "border-transparent"} flex  h-full items-center  border-b-4 font-light transition-all duration-300  hover:border-white`}
            >
            Destination
            </Link>
          </li>
          <li className="flex h-full   tracking-[4px]">
            <Link
              to="/crew"
              className={`${path === "/crew" ? "border-white" : "border-transparent"} flex  h-full items-center  border-b-4 font-light transition-all duration-300  hover:border-white`}
            >
             Crew
             </Link>
          </li>
          <li className="flex h-full   tracking-[4px]">
            <Link
              to="/technology"
              className={`${path === "/technology" ? "border-white" : "border-transparent"} flex  h-full items-center  border-b-4 font-light transition-all duration-300  hover:border-white`}
            >
             Technology
             </Link>
          </li>
        </ul>
    </header>
  )
}

export default Navbar_Tablet
