import { FC, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import i18n, { supportedLngs } from "../lib/i18n";

const Layout: FC = () => {
  const [metadata, setMetadata] = useState<SlimeMetadata[]>([]);

  const [currentMetadata, setCurrentMetadata] = useState<SlimeMetadata>();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMetadata = async () => {
      const baseUrl = "slime-data/metadata/";
      const fileNames = [
        "1.json",
        "2.json",
        "3.json",
        "4.json",
        "5.json",
        "6.json",
        "7.json",
        "8.json",
        "9.json",
        "10.json",
      ];

      const fetches = fileNames.map((v) =>
        fetch(`${baseUrl}${v}`).then((response) => response.json())
      );

      const results = await Promise.all(fetches);

      setMetadata(results);
    };

    fetchMetadata();
  }, []);

  useEffect(() => {
    if (!metadata) return;

    setCurrentMetadata(metadata[Math.floor(Math.random() * metadata.length)]);
  }, [metadata]);

  useEffect(() => {
    console.log("Current language:", i18n.language);
    if (!i18n.language || !supportedLngs.includes(i18n.language)) {
      navigate("/ko");
    }
  }, [navigate]);

  return (
    <>
      <Header />
      <main>
        <Outlet context={{ metadata, currentMetadata, setCurrentMetadata }} />
      </main>
    </>
  );
};

export default Layout;
