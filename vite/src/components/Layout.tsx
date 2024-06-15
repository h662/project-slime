import { FC, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import i18n from "../lib/i18n";

const allLanguages = [
  "ar",
  "de",
  "es",
  "fr",
  "hi",
  "jp",
  "ko",
  "pt",
  "ru",
  "zh-CN",
  "en",
];

const Layout: FC = () => {
  const [metadata, setMetadata] = useState<SlimeMetadata[]>([]);
  const [currentMetadata, setCurrentMetadata] = useState<SlimeMetadata | null>(
    null
  );
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const fetchMetadata = async () => {
    const baseUrl = "/slime-data/metadata/";
    const fileNames = Array.from({ length: 21 }, (_, i) => {
      if (i > 16) {
        return `${i + 2}.json`;
      } else {
        return `${i + 1}.json`;
      }
    });

    try {
      const results = await Promise.all(
        fileNames.map((fileName) =>
          fetch(`${baseUrl}${fileName}`).then((response) => response.json())
        )
      );
      setMetadata(results);
    } catch (error) {
      console.error("Error fetching metadata:", error);
    }
  };

  const checkLangPrefix = () => {
    const firstSegment = pathname.split("/")[1];

    if (!allLanguages.includes(firstSegment)) {
      const defaultLang = i18n.language || "en";
      i18n.changeLanguage(defaultLang);
      navigate(`/${defaultLang}${pathname}`, { replace: true });
    }
  };

  useEffect(() => {
    fetchMetadata();
    checkLangPrefix();
  }, [pathname]);

  useEffect(() => {
    if (metadata.length > 0) {
      setCurrentMetadata(metadata[Math.floor(Math.random() * metadata.length)]);
    }
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
