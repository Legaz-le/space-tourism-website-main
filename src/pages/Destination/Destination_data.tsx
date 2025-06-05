import { useRef, useState } from "react";
import Slider from "react-slick";
import data from "../../../starter-code/data.json";
import Destination_content from "./Destination_content";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Destination_data = () => {
  const [selected, setSelected] = useState(data.destinations[0].name);
  const slider = useRef<Slider>(null);

  const slide = (destName: string) => {
    const index = data.destinations.findIndex((dest) => dest.name === destName);
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
      setSelected(data.destinations[next].name);
    },
  };
  return (
    <>
      <div className="overflow-hidden">
        <p className="absolute top-35 lg:left-6 m  xl:left-25 text-3xl  font-doto uppercase tracking-widest text-white">
            <span className="mr-2 font-doto text-white/20">01</span>Pick your destination
          </p>
        <Slider {...settings} ref={slider}>
          {data.destinations.map((planet) => (
            <div key={planet.name}>
              <Destination_content
                data={planet}
                onSelect={slide}
                selectedName={selected}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Destination_data;
