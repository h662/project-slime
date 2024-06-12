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
        <Route index path="/" element={<LanguageRedirect />} />
        <Route element={<Layout />}>
          <Route index path="/:lang/" element={<Home />} />
          <Route path="/:lang/report" element={<Report />} />
          <Route path="/:lang/all-slimes" element={<AllSlimes />} />
          <Route path="/:lang/slime/:id" element={<Slime />} />
          <Route
            path="/:lang/slime-personality"
            element={<SlimePersonality />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
