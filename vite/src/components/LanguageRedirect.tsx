import { FC } from "react";
import { Navigate } from "react-router-dom";
import i18n from "../lib/i18n";

const LanguageRedirect: FC = () => {
  if (!i18n.language) {
    i18n.changeLanguage("en");
  }

  return <Navigate to={`/${i18n.language}`} />;
};

export default LanguageRedirect;
