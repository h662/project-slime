import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import LanguageRedirect from "./components/LanguageRedirect";
import AllSlimes from "./pages/all-slimes";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/:lang" element={<LanguageRedirect />} />
          <Route path="/" element={<Home />} />
          <Route path="/all-slimes" element={<AllSlimes />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
