import { FC } from "react";
import i18n, { languageNames } from "../lib/i18n";

interface LanguageSelectorButtonProps {
  lng: string;
}

const LanguageSelectorButton: FC<LanguageSelectorButtonProps> = ({ lng }) => {
  const onClickChangeLanguage = () => {
    i18n.changeLanguage(lng);
  };

  return (
    <li
      className="cursor-pointer language-button-style"
      onClick={onClickChangeLanguage}
    >
      {languageNames[lng]}
    </li>
  );
};

export default LanguageSelectorButton;
