import { FC, useEffect, useState } from "react";
import i18n, { languageNames } from "../lib/i18n";
import { useLocation, useNavigate } from "react-router-dom";

interface LanguageSelectorButtonProps {
  lng: string;
}

const LanguageSelectorButton: FC<LanguageSelectorButtonProps> = ({ lng }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [languageChanged, setLanguageChanged] = useState(false);

  useEffect(() => {
    if (languageChanged) {
      const firstSlashIndex = pathname.indexOf("/", 1);
      const restSegments =
        firstSlashIndex === -1 ? "" : pathname.substring(firstSlashIndex);
      navigate(`/${i18n.language}${restSegments}`);
      setLanguageChanged(false);
    }
  }, [languageChanged, pathname, navigate]);

  const onClickChangeLanguage = () => {
    i18n.changeLanguage(lng).then(() => {
      setLanguageChanged(true);
    });
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
