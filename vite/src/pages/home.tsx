import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Spline from "@splinetool/react-spline";

import slimeData from "../assets/slimeData.json";

const Home: FC = () => {
  const [scale, setScale] = useState<number>();
  const { t } = useTranslation();

  useEffect(() => {
    setScale(window.screen.width / 1000);
  }, []);

  return (
    <section className="min-h-screen flex justify-center items-center">
      {scale && (
        <Spline
          scene={slimeData[Math.floor(Math.random() * slimeData.length)].scene}
          onLoad={(spline) => spline.setZoom(scale)}
        />
      )}
    </section>
  );
};

export default Home;
