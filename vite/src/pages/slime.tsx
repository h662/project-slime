import Spline from "@splinetool/react-spline";
import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  useLocation,
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router-dom";
import i18n from "../lib/i18n";
import { FaAngleLeft } from "react-icons/fa6";

const Slime: FC = () => {
  const [slimeData, setSlimeData] = useState<SlimeMetadata>();
  const [scale, setScale] = useState<number>(window.screen.height / 1500);
  const [width, setWidth] = useState<number>(640);
  const [height, setHeight] = useState<number>(640);

  const { metadata } = useOutletContext<OutletContext>();

  const navigate = useNavigate();

  const { id } = useParams();

  const { state } = useLocation();

  const { t } = useTranslation();

  useEffect(() => {
    if (state) {
      setSlimeData(state.slimeData);
    } else {
      setSlimeData(metadata[Number(id) - 1]);
    }

    setScale(window.screen.height / 1500);

    if (window.screen.width < 640) {
      setWidth(window.screen.width);
      setHeight(window.screen.width);
    }
  }, [metadata]);

  if (!slimeData) return <div>슬라임 데이터 로딩중...</div>;

  const locale = t("locale") as keyof Language;
  const localizedAttributes = slimeData.localizedAttributes
    ? slimeData.localizedAttributes[locale]
    : null;

  return (
    <div className="max-w-screen-sm mx-auto">
      {scale && (
        <Spline
          style={{
            width,
            height,
          }}
          scene={slimeData.scene}
          onLoad={(spline) => spline.setZoom(scale)}
        />
      )}
      <div className="px-4 pt-4">
        <div className="flex gap-2">
          <button
            className="button-style-sm w-6 h-6"
            onClick={() => navigate(-1)}
          >
            <FaAngleLeft />
          </button>
          <h1 className="font-semibold text-lg">
            {i18n.language
              ? slimeData.localizedNames[t("locale") as keyof Language]
              : slimeData.name}
          </h1>
        </div>
        <h3 className="mt-2 text-sm border-t border-b border-black py-1">
          {i18n.language
            ? slimeData.localizedDescriptions[t("locale") as keyof Language]
            : slimeData.description}
        </h3>
        <ul className="flex flex-wrap mt-2 gap-4 mb-8">
          {slimeData.attributes.map((v, i) => (
            <li key={i}>
              <div className="underline underline-offset-8">
                {i18n.language && localizedAttributes
                  ? localizedAttributes[i]?.trait_type || v.trait_type
                  : v.trait_type}
              </div>
              <div className="mt-1 font-semibold">
                {i18n.language && localizedAttributes
                  ? localizedAttributes[i]?.value || v.value
                  : v.value}
              </div>
            </li>
          ))}
          {slimeData.birthday && (
            <li>
              <div className="underline underline-offset-8">
                {t("birthday")}
              </div>
              <div className="mt-1 font-semibold">{slimeData.birthday}</div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Slime;
