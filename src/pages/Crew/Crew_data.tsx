import { useRef, useState } from "react";
import Slider from "react-slick";
import data from "../../../starter-code/data.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Crew_content from "./Crew_content";


const Crew_data = () => {
  const [selected, setSelected] = useState(data.crew[0].name);
  const slider = useRef<Slider>(null);

  const slide = (destName: string) => {
    const index = data.crew.findIndex((dest) => dest.name === destName);
    setSelected(destName);
    if (slider.current) {
      slider.current.slickGoTo(index);
    }
  };
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    beforeChange: (_: number, next: number) => {
      setSelected(data.crew[next].name);
    },
  };
  return (
    <>
    <div className="overflow-hidden">
      <p className="absolute top-35 lg:left-6 m  xl:left-25 text-3xl  font-doto uppercase tracking-widest text-white">
            <span className="mr-2 font-doto text-white/20">02</span>Meet your
            crew
          </p>
        <Slider {...settings} ref={slider}>
          {data.crew.map((planet) => (
            <div key={planet.name}>
              <Crew_content
                data={planet}
                onSelect={slide}
                selectedName={selected}
                allCrew={data.crew}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
      
  )
}

export default Crew_data
