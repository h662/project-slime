import { FC, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import i18n from "./lib/i18n";
import Layout from "./components/Layout";
import Home from "./pages/home";
import NotFound from "./pages/not-found";

const App: FC = () => {
  useEffect(() => {
    const currentLocale = localStorage.getItem("locale");

    if (currentLocale) {
      i18n.changeLanguage(currentLocale);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
