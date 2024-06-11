import { Dispatch, FC, SetStateAction, useState } from "react";

import { useNavigate, useOutletContext } from "react-router-dom";
import i18n from "../lib/i18n";
import { useTranslation } from "react-i18next";

interface SlimePersonalityCardProps {
  slimeData: SlimeMetadata;
  resultMessage: string;
  setCurrentQuestionIndex: Dispatch<SetStateAction<number>>;
  setTotalScore: Dispatch<SetStateAction<number[]>>;
}

const SlimePersonalityCard: FC<SlimePersonalityCardProps> = ({
  slimeData,
  resultMessage,
  setCurrentQuestionIndex,
  setTotalScore,
}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const { setCurrentMetadata } = useOutletContext<OutletContext>();

  const { t } = useTranslation();

  const navigate = useNavigate();

  const onClickRetry = () => {
    setCurrentQuestionIndex(0);
    setTotalScore([0, 0, 0, 0]);
  };

  return (
    <div
      className="w-full rounded-lg text-right flex flex-col items-center gap-4 md:gap-16 text-lg md:text-xl"
      onClick={() => setCurrentMetadata(slimeData)}
    >
      <div className="text-center">{resultMessage}</div>
      <div
        className="max-w-96 cursor-pointer overflow-hidden rounded-lg"
        onMouseEnter={() => setIsClicked(true)}
        onMouseLeave={() => setIsClicked(false)}
        onTouchStart={() => setIsClicked(true)}
        onTouchEnd={() => setIsClicked(false)}
      >
        <img
          className={`rounded-lg ${
            isClicked ? "transition delay-150 duration-300 scale-110" : ""
          }`}
          src={`/slime-data/images/${slimeData.image_name}`}
          alt={slimeData.name}
        />
      </div>
      <h1 className="font-semibold text-center text-xl md:text-3xl">
        {i18n.language
          ? slimeData.localizedNames[t("locale") as keyof Language]
          : slimeData.name}
      </h1>
      <div className="flex w-full gap-4 md:gap-8 md:px-4">
        <button className="grow button-style-lg" onClick={onClickRetry}>
          {t("retry")}
        </button>
        <button
          className="grow button-style-lg"
          onClick={() =>
            navigate(`/slime/${slimeData.id}`, { state: { slimeData } })
          }
        >
          {t("view")}
        </button>
      </div>
    </div>
  );
};

export default SlimePersonalityCard;
