import { FC, useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import { useOutletContext } from "react-router-dom";
import Slider from "react-slick";
import { FaAngleUp } from "react-icons/fa6";

import BottomSlimeCard from "../components/BottomSlimeCard";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const Home: FC = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [scale, setScale] = useState<number>(window.screen.height / 1500);

  const { metadata, currentMetadata } = useOutletContext<OutletContext>();

  const { t } = useTranslation();

  useEffect(() => {
    setScale(window.screen.height / 1500);
  }, []);

  return (
    <>
      <Helmet>
        <title>{t("title")}</title>
        <meta property="og:title" content={t("title")} />
        <meta property="og:description" content={t("description")} />
        <meta
          property="og:image"
          content={
            "https://www.slime-project.com/slime-data/images/basic_slime.png"
          }
        />
        <meta property="og:url" content="https://slime-project.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("title")} />
        <meta name="twitter:description" content={t("description")} />
        <meta
          name="twitter:image"
          content={
            "https://www.slime-project.com/slime-data/images/basic_slime.png"
          }
        />
        <meta name="twitter:site" content="@h662__" />
        <meta name="twitter:creator" content="@h662__" />
      </Helmet>
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
          isClicked ? "-translate-y-48" : ""
        } -mb-48 h-72 py-6 transition delay-150 duration-300 ease-in-out fixed bottom-0 w-full flex justify-between items-center shadow-inner bg-white`}
      >
        <button
          className={`${
            isClicked && "rotate-180"
          } transition delay-150 duration-300 ease-in-out absolute -top-10 md:-top-10 left-1/2 -translate-x-full z-10 m-4 button-style-fixed`}
          onClick={() => setIsClicked(!isClicked)}
        >
          <FaAngleUp className="w-8 md:w-8 h-8 md:h-8" />
        </button>
        <div className="w-full h-full">
          <Slider
            infinite={true}
            speed={500}
            slidesToShow={window.screen.width >= 768 ? 3 : 1}
            slidesToScroll={1}
          >
            {metadata.map((v, i) => (
              <BottomSlimeCard key={i} slimeData={v} />
            ))}
          </Slider>
        </div>
      </footer>
    </>
  );
};

export default Home;
