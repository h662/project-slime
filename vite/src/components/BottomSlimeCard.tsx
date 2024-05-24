import { FC } from "react";

import { ISlime } from "..";
import { useOutletContext } from "react-router-dom";
import { OutletContext } from "./Layout";

interface BottomSlimeCardProps {
  slimeData: ISlime;
}

const BottomSlimeCard: FC<BottomSlimeCardProps> = ({ slimeData }) => {
  const { setCurrentSlimeData } = useOutletContext<OutletContext>();

  return (
    <li
      className="relative w-60 h-60"
      onClick={() => setCurrentSlimeData(slimeData)}
    >
      <img src={`/images/slimes/${slimeData.image}`} alt={slimeData.name} />
    </li>
  );
};

export default BottomSlimeCard;
