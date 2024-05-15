import { FC } from "react";
import Spline from "@splinetool/react-spline";

import { ISlime } from "..";

interface SlimeCardProps {
  slimeData: ISlime;
}

const SlimeCard: FC<SlimeCardProps> = ({ slimeData }) => {
  return (
    <li className="relative w-60 h-60">
      <Spline
        scene={slimeData.scene}
        onLoad={(spline) => spline.setZoom(0.25)}
      />
    </li>
  );
};

export default SlimeCard;
