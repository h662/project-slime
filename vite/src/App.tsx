import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import AllSlimes from "./pages/all-slimes";
import Slime from "./pages/slime";
import Report from "./pages/report";
import SlimePersonality from "./pages/slime-personality";

const pageComponents = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/report",
    element: <Report />,
  },
  {
    path: "/all-slimes",
    element: <AllSlimes />,
  },
  {
    path: "/slime/:id",
    element: <Slime />,
  },
  {
    path: "/slime-personality",
    element: <SlimePersonality />,
  },
];

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {pageComponents.map((v, i) => (
            <Route key={i} path={`/:lang${v.path}`} element={v.element} />
          ))}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
