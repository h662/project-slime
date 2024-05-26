import { FC } from "react";

import { useOutletContext } from "react-router-dom";
import { OutletContext } from "./Layout";

interface BottomSlimeCardProps {
  slimeData: SlimeMetadata;
}

const BottomSlimeCard: FC<BottomSlimeCardProps> = ({ slimeData }) => {
  const { setCurrentSlimeData } = useOutletContext<OutletContext>();

  return (
    <li
      className="relative w-60 h-60"
      onClick={() => setCurrentSlimeData(slimeData)}
    >
      <img
        src={`/images/slimes/${slimeData.image_name}`}
        alt={slimeData.name}
      />
    </li>
  );
};

export default BottomSlimeCard;
