import { Dispatch, FC, SetStateAction, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

import slimeData from "../assets/slimeData.json";

export interface OutletContext {
  currentSlimeData: SlimeMetadata;
  setCurrentSlimeData: Dispatch<SetStateAction<SlimeMetadata>>;
}

const Layout: FC = () => {
  const [currentSlimeData, setCurrentSlimeData] = useState<SlimeMetadata>(
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
