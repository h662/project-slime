import { FC } from "react";
import i18n, { languageNames } from "../lib/i18n";
import { useLocation, useNavigate } from "react-router-dom";

interface LanguageSelectorButtonProps {
  lng: string;
}

const LanguageSelectorButton: FC<LanguageSelectorButtonProps> = ({ lng }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onClickChangeLanguage = () => {
    i18n.changeLanguage(lng);

    const firstSlashIndex = pathname.indexOf("/", 1);

    const restSegments = pathname.substring(firstSlashIndex);

    navigate(`/${i18n.language}${restSegments}`);
  };

  return (
    <li
      className="cursor-pointer button-style-sm"
      onClick={onClickChangeLanguage}
    >
      {languageNames[lng]}
    </li>
  );
};

export default LanguageSelectorButton;
