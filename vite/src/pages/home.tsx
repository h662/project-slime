import { FC, useEffect, useRef, useState } from "react";
import Spline from "@splinetool/react-spline";
import { useOutletContext } from "react-router-dom";
import Slider from "react-slick";
import { FaAngleUp } from "react-icons/fa6";

import { OutletContext } from "../components/Layout";
import BottomSlimeCard from "../components/BottomSlimeCard";

const Home: FC = () => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const [slidesToShow, setSlidesToShow] = useState<number>(1);
  const [scale, setScale] = useState<number>(window.screen.height / 1500);

  const sliderRef = useRef<any>(null);

  const { metadata, currentMetadata } = useOutletContext<OutletContext>();

  useEffect(() => {
    if (window.screen.width >= 768) {
      setSlidesToShow(3);
    }

    setScale(window.screen.height / 1500);
  }, []);

  useEffect(() => {
    if (!sliderRef) return;

    sliderRef?.current?.slickGoTo(Math.floor(Math.random() * metadata.length));
  }, []);

  return (
    <>
      <section className="min-h-screen flex justify-center items-center">
        {currentMetadata && scale && (
          <Spline
            style={{ width: "100vw", height: "100vh" }}
            scene={currentMetadata.scene}
            onLoad={(spline) => spline.setZoom(scale)}
          />
        )}
      </section>
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
            ref={sliderRef}
            infinite={true}
            speed={500}
            slidesToShow={slidesToShow}
            slidesToScroll={1}
          >
            {metadata.map((v, i) => (
              <BottomSlimeCard key={i} slimeData={v} />
            ))}
          </Slider>
        </ul>
      </footer>
    </>
  );
};

export default Home;
