type Technology = {
  name: string;
  description: string;
  images: {
    portrait: string;
    landscape: string;
  };
};

type Props = {
  data: Technology;
  onSelect: (name: string) => void;
  selectedName: string;
  techNames: string[];
};

const Technology_content = ({ data, onSelect, selectedName, techNames }: Props) => {
  return (
    <>
      <section className="flex flex-col lg:flex-row text-white items-center justify-center lg:justify-between px-6 lg:px-15   md:py-18  xl:py-35  py-30">
        <div className="relative w-[400px] group md:mb-15 mb-15">
          <p className="xl:absolute flex md:justify-center xl:-top-25 xl:-left-0 lg:text-[19px] lg:text-2xl  mb-15 font-doto uppercase tracking-widest">
            <span className="mr-2 font-doto text-white/20">03</span>Pick your
            destinaiton 101
          </p>
          <ul className="flex lg:flex-col md:flex-row gap-6 text-white justify-center items-center lg:items-start">
            {["1", "2", "3"].map((label, index) => {
              const techName = techNames[index]; // make sure order matches!
              return (
                <li
                  key={label}
                  className={`w-14 h-14 flex items-center justify-center rounded-full border-2 font-doto text-xl cursor-pointer transition-colors duration-300 ${
                    selectedName === techName
                      ? "bg-white text-black"
                      : "text-white/60 border-white/60 hover:text-white hover:border-white"
                  }`}
                  onClick={() => onSelect(techName)}
                >
                  {label}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="lg:max-w-[350px] xl:max-w-lg text-center lg:text-left mb-16 lg:mb-0">
          <p className="text-[18px] uppercase text-white/60 font-doto tracking-wider">
            The terminology...
          </p>
          <h1 className="text-[50px] md:text-[50px] lg:text-[min(10vw,35px)] xl:text-[min(10vw,60px)] uppercase font-text font-[300]">
            {data.name}
          </h1>
          <p className="w-full md:w-[75%] lg:w-[95%] xl:w-[100%] text-center md:text-left mx-auto text-base md:text-[1.1rem] lg:text-[min(4vw,18px)] xl:text-[min(4vw,18px)] leading-relaxed font-doto font-[100]">
            {data.description}
          </p>
        </div>
        <img
          src={data.images.portrait}
          alt={`${data.name}-image`}
          className="max-w-full h-auto xl:w-[450px] lg:w-[300px] md:w-[300px]"
        />
      </section>
    </>
  );
};

export default Technology_content;
