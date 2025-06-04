type Destination = {
  name: string;
  description: string;
  images: {
    png: string;
    webp: string;
  };
  distance: string;
  travel: string;
};

type Props = {
  data: Destination;
  onSelect: (name: string) => void;
  selectedName: string;
};


const Destination_content = ({data, onSelect, selectedName }: Props) => {
  return (
    <>
      <section className="flex flex-col lg:flex-row text-white items-center justify-center lg:justify-between px-6 lg:px-15   md:py-18  xl:py-35  py-30">
        <div className="relative group md:mb-15 mb-15">
          <p className="xl:absolute xl:-top-25 xl:-left-0 text-3xl mb-15 font-doto uppercase tracking-widest">
            <span className="mr-2 font-doto text-white/20">01</span>Pick your
            destinaiton
          </p>
          <img
            src={data.images.png}
            alt={`${data.name}-image`}
            className="max-w-full h-auto xl:w-[485px] animate-spin-slow"
          />
        </div>

        <div className="lg:max-w-[350px] xl:max-w-lg   text-center lg:text-left mb-16  lg:mb-0 ">
          <ul className="flex gap-10 uppercase md:text-[20px] lg:text-[23px] xl:text-2xl font-doto tracking-wide text-white/60 justify-center lg:justify-start ">
            {["Moon", "Mars", "Europa", "Titan"].map((name) => (
          <li
            key={name}
            className={`cursor-pointer hover:text-white ${
              selectedName === name ? "text-white border-b-2 border-white" : ""
            }`}
            onClick={() => onSelect(name)}
          >
            {name}
          </li>
        ))}
          </ul>
          <h1 className=" text-[100px]  md:text-[100px] lg:text-[min(10vw,98px)] xl:text-[min(10vw,100px)] uppercase font-text   font-[300]">
            {data.name}
          </h1>
          <p className="xl:w-[70%] lg:w-[95%] md:w-[320px] md:text-[1.1rem] text-base lg:text-[min(4vw,18px)]  xl:text-[min(4vw,18px)] leading-relaxed  font-doto font-[100] ">
            {data.description}
          </p>
          <div className="border-1 xl:w-[70%] md:w-[95%] w-full mt-5  border-white/25 " />
          <div className="flex mt-5 font-doto gap-10 justify-center lg:justify-start">
            <p className="text-[18px] md:text-[20px] flex flex-col  text-white/70 uppercase">
              Avg. distance <span className="text-[20px] md:text-2xl text-white font-text">{data.distance}</span>
            </p>
            <p className="text-[18px] md:text-[20px] flex flex-col text-white/70 uppercase ">Est. travel time <span className="text-[20px] md:text-2xl text-white font-text">{data.travel}</span></p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Destination_content;
