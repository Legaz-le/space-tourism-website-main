import {Link, useLocation} from "react-router-dom"

interface Mobile_Menue {
  isOpen: boolean;
  onClose: () => void;
}

const Mobile_Menue: React.FC<Mobile_Menue> = ({ isOpen, onClose }) => {
  const location = useLocation()
  const path = location.pathname;
  return (
    <>
    <div 
        className={`fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
    <div className={`fixed top-0 right-0 flex h-full z-50 min-h-screen w-4/6 bg-transparent text-white p-10 backdrop-blur-lg transition-transform duration-300 m-0 flex-col gap-20 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <button className="flex justify-end" onClick={onClose}>
      <img src="/assets/shared/icon-close.svg" alt="close_icon" />
      </button>
      <ul className="flex flex-col gap-8 uppercase font-doto">
        <li className="flex h-full">
          <Link
              to="/"
              className={`${path === "/" ? "border-white" : "border-transparent"}   font-light tracking-widest transition-colors duration-300  hover:text-white`}
            >00 Home</Link></li>
        <li className="flex h-full">
          <Link
              to="/destination"
              className={`${path === "/destination" ? "border-white" : "border-transparent"}   font-light tracking-widest transition-colors duration-300  hover:text-white`}
            >01 Destination</Link></li>
        <li className="flex h-full">
          <Link
              to="/crew"
              className={`${path === "/crew" ? "border-white" : "border-transparent"}   font-light tracking-widest transition-colors duration-300  hover:text-white`}
            >02 Crew</Link></li>
        <li className="flex h-full">
          <Link
              to="/technology"
              className={`${path === "/technology" ? "border-white" : "border-transparent"}   font-light tracking-widest transition-colors duration-300  hover:text-white`}
            >03 Technology</Link></li>
      </ul>
    </div>
    </>
  );
};

export default Mobile_Menue;
