import { FC, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import i18n from "../lib/i18n";

const LanguageRedirect: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const defaultLang = i18n.language || "en";
    const firstSegment = location.pathname.split("/")[1];

    if (!firstSegment || !i18n.languages.includes(firstSegment)) {
      i18n.changeLanguage(defaultLang);
      navigate(`/${defaultLang}${location.pathname}`, { replace: true });
    }
  }, [navigate, location]);

  return null;
};

export default LanguageRedirect;
