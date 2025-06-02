const Hero = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row text-white items-center justify-center md:justify-between px-6 md:px-24 py-12 ">
  {/* Text Content */}
  <div className="max-w-md md:max-w-lg text-center md:text-left mb-16 md:mb-0">
    <p className="text-lg md:text-xl uppercase font-condensed tracking-widest text-secondary">
      So, you want to travel to
    </p>
    <h1 className="text-[80px] md:text-[100px] lg:text-[150px] uppercase font-bellefair my-4 md:my-6">
      Space
    </h1>
    <p className="text-base md:text-lg leading-relaxed text-secondary">
      Let’s face it; if you want to go to space, you might as well
      genuinely go to outer space and not hover kind of on the edge of
      it. Well sit back, and relax because we’ll give you a truly out of
      this world experience!
    </p>
  </div>

  {/* Explore Button */}
  <div className="relative group">
    <button className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[274px] lg:h-[274px] rounded-full bg-white text-black font-bellefair text-xl md:text-3xl uppercase hover:ring-[40px] hover:ring-white/10 transition-all duration-300">
      Explore
    </button>
  </div>
</section>
    </>
  );
};

export default Hero;
