import { FC } from "react";
import { supportedLngs } from "../lib/i18n";
import LanguageSelectorButton from "./LanguageSelectorButton";

const LanguageSelector: FC = () => {
  return (
    <ul className="flex flex-col gap-1">
      {supportedLngs.map((v, i) => (
        <LanguageSelectorButton key={i} lng={v} />
      ))}
    </ul>
  );
};

export default LanguageSelector;
