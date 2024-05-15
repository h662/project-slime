import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import slimeData from "../assets/slimeData.json";
import Spline from "@splinetool/react-spline";
import { ISlime } from "..";

const Slime: FC = () => {
  const [slime, setSlime] = useState<ISlime>();

  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    setSlime(slimeData[+id - 1]);
  }, [id]);

  return (
    <section>
      {slime && (
        <div>
          <div className="max-w-96 h-96">
            <Spline
              scene={slime.scene}
              onLoad={(spline) => spline.setZoom(0.25)}
            />
          </div>
          <div>{slime.name}</div>
        </div>
      )}
    </section>
  );
};

export default Slime;
