import { FC, useState } from "react";

import { useOutletContext } from "react-router-dom";

interface SlimeCardProps {
  slimeData: SlimeMetadata;
}

const SlimeCard: FC<SlimeCardProps> = ({ slimeData }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const { setCurrentMetadata } = useOutletContext<OutletContext>();

  return (
    <li
      className={`w-full cursor-pointer ${
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
    </li>
  );
};

export default SlimeCard;
