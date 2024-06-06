import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import LanguageRedirect from "./components/LanguageRedirect";
import AllSlimes from "./pages/all-slimes";
import Slime from "./pages/slime";
import Report from "./pages/report";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/:lang" element={<LanguageRedirect />} />
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<Report />} />
          <Route path="/all-slimes" element={<AllSlimes />} />
          <Route path="/slime/:id" element={<Slime />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
