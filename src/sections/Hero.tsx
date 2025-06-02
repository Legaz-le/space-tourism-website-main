const Hero = () => {
  return (
    <>
      <section className="flex text-white  items-center justify-center md:w-full md:justify-between lg:flex-row lg:p-10 ">
        <div className="flex flex-col items-center py-6 text-center md:h-96 md:w-min md:justify-end lg:items-start lg:justify-center lg:gap-8 lg:text-left">
          <div className="">
            <p className="text-[min(10vw,20px)] uppercase">
              So, you want to travel to
            </p>
            <h1 className="text-[min(10vw,100px)] uppercase">Space</h1>{" "}
            <p className="">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this
            </p>
            world experience!
          </div>
        </div>

        <div>Explore</div>
      </section>
    </>
  );
};

export default Hero;
