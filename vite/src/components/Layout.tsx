import { FC, useEffect, useState } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import i18n, { supportedLngs } from "../lib/i18n";

const allLanguages = [
  "/ar",
  "/de",
  "/es",
  "/fr",
  "/hi",
  "/jp",
  "/ko",
  "/pt",
  "/ru",
  "/zh-CN",
];

const Layout: FC = () => {
  const [metadata, setMetadata] = useState<SlimeMetadata[]>([]);

  const [currentMetadata, setCurrentMetadata] = useState<SlimeMetadata>();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const fetchMetadata = async () => {
    const baseUrl = "/slime-data/metadata/";
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
      "11.json",
      "12.json",
      "13.json",
      "14.json",
      "15.json",
      "16.json",
      "17.json",
      "18.json",
    ];

    const fetches = fileNames.map((v) =>
      fetch(`${baseUrl}${v}`).then((response) => response.json())
    );

    const results = await Promise.all(fetches);

    setMetadata(results);
  };

  const checkLangPrefix = () => {
    const firstSegment = pathname.split("/")[1];

    const isIncluded = allLanguages.includes(`/${firstSegment}`);

    console.log(firstSegment);

    if (!isIncluded) {
      if (!i18n.language) {
        i18n.changeLanguage("en");

        navigate(`/en${pathname}`);
      }

      navigate(`/${i18n.language}${pathname}`);
    }
  };

  useEffect(() => {
    fetchMetadata();
    checkLangPrefix();
  }, []);

  useEffect(() => {
    if (!metadata) return;

    setCurrentMetadata(metadata[Math.floor(Math.random() * metadata.length)]);
  }, [metadata]);

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
