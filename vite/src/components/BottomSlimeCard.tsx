import { FC, useState } from "react";

import { useOutletContext } from "react-router-dom";

interface BottomSlimeCardProps {
  slimeData: SlimeMetadata;
}

const BottomSlimeCard: FC<BottomSlimeCardProps> = ({ slimeData }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const { setCurrentMetadata } = useOutletContext<OutletContext>();

  return (
    <div
      className={`relative w-60 h-60 cursor-pointer ${
        isClicked ? "transition delay-150 duration-300 scale-110" : ""
      }`}
      onClick={() => setCurrentMetadata(slimeData)}
      onMouseEnter={() => setIsClicked(true)}
      onMouseLeave={() => setIsClicked(false)}
      onTouchStart={() => setIsClicked(true)}
      onTouchEnd={() => setIsClicked(false)}
    >
      <img
        src={`/slime-data/images/${slimeData.image_name}`}
        alt={slimeData.name}
      />
    </div>
  );
};

export default BottomSlimeCard;
