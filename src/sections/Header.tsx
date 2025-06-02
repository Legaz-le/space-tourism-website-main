const Header = () => {
  return (
    <header className="mx-auto px-4 md:px-8 lg:px-5 xl:px-10 flex  justify-between items-center py-8">
        <img src="/assets/shared/logo.svg" alt="logo" className="max-w-full h-auto mr-10 " />
        <div className="z-10 -mr-8 md:-mr-5 h-1 w-full border-b-2 border-white/10"></div>
        <ul className="flex h-full w-full items-center  text-white justify-evenly p-10 gap-10 bg-white/1 text-lg uppercase backdrop-blur-xl ">
          <li className="flex h-full">
            <span className="font-bold">00 </span>Home
          </li>
          <li className="flex h-full">
            <span className="font-bold">01 </span>Destination
          </li>
          <li className="flex h-full">
            <span className="font-bold">02</span> Crew
          </li>
          <li className="flex h-full">
            <span className="font-bold">03</span> Technology
          </li>
        </ul>
    </header>
  );
};

export default Header;
