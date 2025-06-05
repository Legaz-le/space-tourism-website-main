type Crew = {
  name: string;
  bio: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
};

type Props = {
  data: Crew;
  onSelect: (name: string) => void;
  selectedName: string;
  allCrew: Crew[];
};

const Crew_content = ({ data, onSelect, selectedName,allCrew }: Props) => {
  return (
    <>
      <section className="overflow-hidden min-h-screen flex flex-col lg:flex-row text-white items-center justify-center lg:justify-between px-6 lg:px-15   md:py-18  xl:py-35 xl:px-40  py-30">
        <div className="relative lg:max-w-[350px] xl:max-w-lg   text-center lg:text-left mb-16  lg:mb-0 ">
          
          <p className="text-[25px] text-white/60">{data.role}</p>
          <h1 className=" text-[30px]  md:text-[45px] lg:text-[min(10vw,40px)] xl:text-[min(10vw,50px)] uppercase font-text   font-[300]">
            {data.name}
          </h1>
          <p className="xl:w-[70%] lg:w-[95%] md:w-[320px] md:text-[1.1rem] text-base lg:text-[min(4vw,18px)]  xl:text-[min(4vw,18px)] leading-relaxed  font-doto font-[100] ">
            {data.bio}
          </p>
          <ul className="flex mt-20 gap-10 uppercase md:text-[20px] lg:text-[23px] xl:text-2xl font-doto tracking-wide text-white/60 justify-center lg:justify-start ">
            {allCrew.map((member) => (
              <li
                key={member.name}
                className={`w-6 h-6 rounded-full cursor-pointer transition-all duration-300 ${
                  selectedName === member.name
                    ? "bg-white"
                    : "bg-white/30 hover:bg-white/60"
                }`}
                onClick={() => onSelect(member.name)}
              >
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <img
            src={data.images.png}
            alt={`${data.name}-image`}
            className="block mx-auto max-h-[80vh] object-contain "
          />
        </div>
      </section>
    </>
  );
};

export default Crew_content;
