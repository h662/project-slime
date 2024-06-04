import { FC, useState } from "react";

import { useNavigate, useOutletContext } from "react-router-dom";
import i18n from "../lib/i18n";
import { useTranslation } from "react-i18next";

interface SlimeCardProps {
  slimeData: SlimeMetadata;
}

const SlimeCard: FC<SlimeCardProps> = ({ slimeData }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const { setCurrentMetadata } = useOutletContext<OutletContext>();

  const { t } = useTranslation();

  const navigate = useNavigate();

  return (
    <li
      className="w-full cursor-pointer border-b-[6px] border-r-[6px] border-black rounded-lg text-right"
      onClick={() => setCurrentMetadata(slimeData)}
      onMouseEnter={() => setIsClicked(true)}
      onMouseLeave={() => setIsClicked(false)}
      onTouchStart={() => setIsClicked(true)}
      onTouchEnd={() => setIsClicked(false)}
    >
      <div className="overflow-hidden rounded-lg">
        <img
          className={`rounded-lg ${
            isClicked ? "transition delay-150 duration-300 scale-110" : ""
          }`}
          src={`/slime-data/images/${slimeData.image_name}`}
          alt={slimeData.name}
        />
      </div>
      <h1 className="p-2 font-semibold">
        {i18n.language
          ? slimeData.localizedNames[t("locale") as keyof Language]
          : slimeData.name}
      </h1>
      <button
        className="mt-2 mr-2 mb-4 button-style-sm"
        onClick={() =>
          navigate(`/slime/${slimeData.id}`, { state: { slimeData } })
        }
      >
        상세보기
      </button>
    </li>
  );
};

export default SlimeCard;
