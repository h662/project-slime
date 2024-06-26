import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import AllSlimes from "./pages/all-slimes";
import Slime from "./pages/slime";
import Report from "./pages/report";
import SlimePersonality from "./pages/slime-personality";
import LanguageRedirect from "./components/LanguageRedirect";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LanguageRedirect />} />
        <Route path="/:lang" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="report" element={<Report />} />
          <Route path="all-slimes" element={<AllSlimes />} />
          <Route path="slime/:id" element={<Slime />} />
          <Route path="slime-personality" element={<SlimePersonality />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
