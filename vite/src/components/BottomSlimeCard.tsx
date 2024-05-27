import { FC } from "react";

import { useOutletContext } from "react-router-dom";
import { OutletContext } from "./Layout";

interface BottomSlimeCardProps {
  slimeData: SlimeMetadata;
}

const BottomSlimeCard: FC<BottomSlimeCardProps> = ({ slimeData }) => {
  const { setCurrentMetadata } = useOutletContext<OutletContext>();

  return (
    <li
      className="relative w-60 h-60"
      onClick={() => setCurrentMetadata(slimeData)}
    >
      <img
        src={`/slime-data/images/${slimeData.image_name}`}
        alt={slimeData.name}
      />
    </li>
  );
};

export default BottomSlimeCard;
