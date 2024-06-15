import { Dispatch, FC, SetStateAction, useState } from "react";
import {
  TwitterShareButton,
  RedditShareButton,
  LineShareButton,
  TelegramShareButton,
  WeiboShareButton,
  WhatsappShareButton,
} from "react-share";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaLine,
  FaReddit,
  FaTelegram,
  FaTwitter,
  FaWeibo,
  FaWhatsapp,
} from "react-icons/fa6";

import i18n from "../lib/i18n";

interface SlimePersonalityCardProps {
  slimeData: SlimeMetadata;
  resultMessage: string;
  setCurrentQuestionIndex: Dispatch<SetStateAction<number>>;
  setTotalScore: Dispatch<SetStateAction<number[]>>;
}

const shareButtons = [
  {
    Component: LineShareButton,
    Icon: FaLine,
  },
  {
    Component: RedditShareButton,
    Icon: FaReddit,
  },
  {
    Component: TelegramShareButton,
    Icon: FaTelegram,
  },
  {
    Component: TwitterShareButton,
    Icon: FaTwitter,
  },
  {
    Component: WeiboShareButton,
    Icon: FaWeibo,
  },
  {
    Component: WhatsappShareButton,
    Icon: FaWhatsapp,
  },
];

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

  const shareUrl = `${import.meta.env.VITE_URL}/slime/${slimeData.id}`;

  const onClickRetry = () => {
    setCurrentQuestionIndex(0);
    setTotalScore([0, 0, 0, 0]);
  };

  return (
    <div
      className="w-full rounded-lg text-right flex flex-col items-center gap-4 md:gap-8 text-lg md:text-xl"
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
        <button
          className="grow button-style-sm md:button-style-lg"
          onClick={onClickRetry}
        >
          {t("retry")}
        </button>
        <button
          className="grow button-style-sm md:button-style-lg"
          onClick={() =>
            navigate(`/${i18n.language}/slime/${slimeData.id}`, {
              state: { slimeData },
            })
          }
        >
          {t("view")}
        </button>
        <button
          className="grow button-style-sm md:button-style-lg"
          onClick={() => navigate(`/${i18n.language}`)}
        >
          {t("retry")}
        </button>
      </div>
      <div className="flex flex-col text-center gap-2 md:gap-4">
        <h2 className="text-sm md:text-lg">{t("share")}</h2>
        <div className="flex gap-4">
          {shareButtons.map(({ Component, Icon }, i) => (
            <Component key={i} url={shareUrl} title={resultMessage}>
              <Icon className="md:text-3xl hover:text-slimeGreen-500 active:text-slimeGreen-500" />
            </Component>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlimePersonalityCard;
