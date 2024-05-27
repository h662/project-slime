import { FC, useState } from "react";
import LanguageSelectorButton from "./LanguageSelectorButton";
import { useTranslation } from "react-i18next";

import { supportedLngs } from "../lib/i18n";

const LanguageSelector: FC = () => {
  const [isClicked, setIsClicked] = useState(false);

  const { t } = useTranslation();

  return (
    <div>
      <button
        className={`mb-1 language-button-style ${
          isClicked && "bg-slimeGreen-100"
        }`}
        onClick={() => setIsClicked(!isClicked)}
      >
        {t("languageSelection")}
      </button>
      <ul
        className={`flex flex-col gap-1 transition delay-150 duration-300 ease-in-out ${
          isClicked ? "opacity-100" : "opacity-0 -translate-y-2"
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
