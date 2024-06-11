import { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";
import i18n from "../lib/i18n";

const LanguageRedirect: FC = () => {
  const location = useLocation();

  console.log(location);

  if (i18n.language) {
    return <Navigate to={`/${i18n.language}`} />;
  }

  return <Navigate to="/en" />;
};

export default LanguageRedirect;
