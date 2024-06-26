import { FC, useState } from "react";
import LanguageSelectorButton from "./LanguageSelectorButton";
import { useTranslation } from "react-i18next";

import { supportedLngs } from "../lib/i18n";

const LanguageSelector: FC = () => {
  const [isClickeded, setIsClickeded] = useState(false);

  const { t } = useTranslation();

  return (
    <div>
      <button
        className={`mb-1 button-style-sm bg-white ${
          isClickeded && "bg-slimeGreen-300"
        }`}
        onClick={() => setIsClickeded(!isClickeded)}
      >
        {t("languageSelection")}
      </button>
      <ul
        className={`flex flex-col gap-1 transition delay-150 duration-300 ease-in-out ${
          isClickeded ? "opacity-100" : "opacity-0 -translate-y-2"
        }`}
      >
        {supportedLngs.map((v, i) => (
          <LanguageSelectorButton key={i} lng={v} />
        ))}
      </ul>
    </div>
  );
};

export default LanguageSelector;
