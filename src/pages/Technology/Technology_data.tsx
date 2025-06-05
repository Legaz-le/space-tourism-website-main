import { useRef, useState } from "react";
import Slider from "react-slick";
import data from "../../../starter-code/data.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Technology_content from "./Technology_content";

const Technology_data = () => {
  const [selected, setSelected] = useState(data.technology[0].name);
  const slider = useRef<Slider>(null);
  const techNames = data.technology.map((t) => t.name);

  const slide = (destName: string) => {
    const index = data.technology.findIndex((dest) => dest.name === destName);
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
      setSelected(data.technology[next].name);
    },
  };
  return <>
  <div className="overflow-hidden">
        <Slider {...settings} ref={slider}>
          {data.technology.map((planet) => (
            <div key={planet.name}>
              <Technology_content
                data={planet}
                onSelect={slide}
                selectedName={selected}
                techNames={techNames}
              />
            </div>
          ))}
        </Slider>
      </div></>;
};

export default Technology_data;
