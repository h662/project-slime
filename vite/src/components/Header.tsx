import { FC, useState } from "react";
import { FaInstagram, FaPinterest, FaPowerOff } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Logo from "../icons/Logo";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import i18n from "../lib/i18n";

const navLinkData = [
  {
    link: "/report",
    button: "slimeProjectReport",
  },
  {
    link: "/all-slimes",
    button: "seeAllSlimes",
  },
  {
    link: "/slime-personality",
    button: "slimePersonalityTest",
    isNew: true,
  },
];

const Header: FC = () => {
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);
  const [isLinkHover, setIsLinkHover] = useState<boolean>(false);

  const { t } = useTranslation();

  const navigate = useNavigate();

  const navigatePage = (to: string) => {
    setIsButtonClicked(false);

    if (to.startsWith("http")) {
      window.location.href = to;
    } else {
      navigate(to);
    }
  };

  return (
    <>
      <header
        className={`${
          isButtonClicked ? "translate-y-16 md:translate-y-28 z-10" : "-z-10"
        } -mt-[72px] md:-mt-[136px] h-16 md:h-28 transition delay-150 duration-300 ease-in-out fixed top-2 md:top-6 w-full`}
      >
        <div className="bg-white bg-opacity-70 p-2 md:p-6">
          <button
            className="flex items-center text-lg font-bold w-fit"
            onMouseEnter={() => setIsLinkHover(true)}
            onMouseLeave={() => setIsLinkHover(false)}
            onTouchStart={() => setIsLinkHover(true)}
            onTouchEnd={() => setIsLinkHover(false)}
            onClick={() => navigatePage(`/${i18n.language}`)}
          >
            <Logo isLinkHover={isLinkHover} /> {t("title")}
          </button>
        </div>
        <div
          className={`${
            isButtonClicked ? "opacity-100" : "opacity-0"
          } bg-white bg-opacity-40 shadow-lg transition delay-150 duration-300 ease-in-out pt-4 px-2 md:px-4 py-4 md:py-8 flex justify-between`}
        >
          <nav className="flex flex-col gap-1">
            {navLinkData.map((v, i) => (
              <button
                key={i}
                className="relative button-style-sm text-left bg-white"
                onClick={() => navigatePage(`/${i18n.language}${v.link}`)}
              >
                {v.isNew ? (
                  <div className="absolute -top-2 -right-2 bg-slimeGreen-500 text-white rounded-full px-1 text-[8px] md:text-xs">
                    new
                  </div>
                ) : (
                  ""
                )}
                {t(v.button)}
              </button>
            ))}
            <div className="flex gap-2 mt-2 md:mt-4">
              <button
                className="relative button-style-sm text-left bg-white"
                onClick={() =>
                  navigatePage("https://instagram.com/slime_project_official")
                }
              >
                <FaInstagram />
              </button>
              <button
                className="relative button-style-sm text-left bg-white"
                onClick={() =>
                  navigatePage("https://pinterest.com/slime_project/research/")
                }
              >
                <FaPinterest />
              </button>
            </div>
          </nav>
          <LanguageSelector />
        </div>
      </header>
      <button
        className="fixed top-4 right-6 z-10 button-style-fixed"
        onClick={() => setIsButtonClicked(!isButtonClicked)}
      >
        <FaPowerOff className="w-6 md:w-8 h-6 md:h-8" />
      </button>
    </>
  );
};

export default Header;
