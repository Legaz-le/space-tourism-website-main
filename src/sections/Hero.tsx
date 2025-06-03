const Hero = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row text-white items-center justify-center lg:justify-between px-6 lg:px-25 xl:px-50   xl:py-30">
        {/* Text Content */}
        <div className="lg:max-w-[350px] xl:max-w-lg   text-center lg:text-left mb-16 lg:mb-0">
          <p className="text-[22px] xl:text-[25px] uppercase font-condensed tracking-widest font-doto">
            So, you want to travel to
          </p>
          <h1 className=" text-[80px] md:text-[100px] lg:text-[min(10vw,110px)] xl:text-[min(10vw,120px)] uppercase font-text my-4 md:my-6 font-[300]">
            Space
          </h1>
          <p className="xl:w-[66%] lg:w-[95%] text-base lg:text-[min(4vw,18px)]  xl:text-[min(4vw,18px)] leading-relaxed  font-doto font-[100] ">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        {/* Explore Button */}
        <div className="relative group">
          <button className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] xl:w-[254px] xl:h-[254px]  xl:w-[] rounded-full bg-white text-black font-bellefair text-xl md:text-3xl uppercase hover:ring-[40px] hover:ring-white/10 transition-all duration-300">
            Explore
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
