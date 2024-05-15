import { FC, useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa6";
import Slider from "react-slick";

import SlimeCard from "./SlimeCard";
import slimeData from "../assets/slimeData.json";

const Footer: FC = () => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const [slidesToShow, setSlidesToShow] = useState<number>(1);

  useEffect(() => {
    if (window.screen.width >= 768) {
      setSlidesToShow(3);
    }
  }, []);

  return (
    <>
      <footer
        className={`${
          isClick ? "-translate-y-48" : ""
        } -mb-48 h-72 py-6 transition delay-150 duration-300 ease-in-out fixed bottom-0 w-full flex justify-between items-center shadow-inner bg-white`}
      >
        <button
          className={`${
            isClick && "rotate-180"
          } transition delay-150 duration-300 ease-in-out absolute -top-10 md:-top-10 left-1/2 -translate-x-full z-10 m-4 button-style`}
          onClick={() => setIsClick(!isClick)}
        >
          <FaAngleUp className="w-8 md:w-8 h-8 md:h-8" />
        </button>
        <ul className="w-full h-full">
          <Slider
            infinite={true}
            speed={500}
            slidesToShow={slidesToShow}
            slidesToScroll={1}
          >
            <SlimeCard slimeData={slimeData[0]} />
            <SlimeCard slimeData={slimeData[1]} />
            <SlimeCard slimeData={slimeData[2]} />
            <SlimeCard slimeData={slimeData[3]} />
            <SlimeCard slimeData={slimeData[4]} />
          </Slider>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
