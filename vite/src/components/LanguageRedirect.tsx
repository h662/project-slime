import { FC } from "react";
import { Navigate, useParams } from "react-router-dom";
import i18n from "../lib/i18n";

const LanguageRedirect: FC = () => {
  const { lang } = useParams<{ lang: string }>();

  if (lang && i18n.languages.includes(lang)) {
    i18n.changeLanguage(lang);
    return <Navigate to="/" />;
  }

  return <Navigate to="/ko" />;
};

export default LanguageRedirect;
