import { Dispatch, FC, SetStateAction, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

import slimeData from "../assets/slimeData.json";
import { ISlime } from "..";

export interface OutletContext {
  currentSlimeData: ISlime;
  setCurrentSlimeData: Dispatch<SetStateAction<ISlime>>;
}

const Layout: FC = () => {
  const [currentSlimeData, setCurrentSlimeData] = useState<ISlime>(
    slimeData[Math.floor(Math.random() * slimeData.length)]
  );

  return (
    <>
      <Header />
      <main>
        <Outlet context={{ currentSlimeData, setCurrentSlimeData }} />
      </main>
    </>
  );
};

export default Layout;
