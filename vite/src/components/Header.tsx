import { FC, useState } from "react";
import { FaPowerOff } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Logo from "../icons/Logo";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

const Header: FC = () => {
  const [isButtonClick, setIsButtonClick] = useState<boolean>(false);
  const [isLinkHover, setIsLinkHover] = useState<boolean>(false);

  const { t } = useTranslation();

  return (
    <>
      <header
        className={`${
          isButtonClick ? "translate-y-16 md:translate-y-28" : ""
        } -mt-[72px] md:-mt-[136px] h-16 md:h-28 transition delay-150 duration-300 ease-in-out fixed top-2 md:top-6 w-full `}
      >
        <div className="bg-slimeGreen-100 p-2 md:p-6">
          <Link
            className="flex items-center text-lg font-bold w-fit"
            to="/"
            onMouseEnter={() => setIsLinkHover(true)}
            onMouseLeave={() => setIsLinkHover(false)}
            onTouchStart={() => setIsLinkHover(true)}
            onTouchEnd={() => setIsLinkHover(false)}
          >
            <Logo isLinkHover={isLinkHover} /> {t("logo")}
          </Link>
        </div>
        <div
          className={`${
            isButtonClick ? "opacity-100" : "opacity-0"
          } bg-gradient-to-b from-slimeGreen-100 transition delay-150 duration-300 ease-in-out pt-4 px-2 md:px-4 flex justify-between`}
        >
          <nav></nav>
          <LanguageSelector />
        </div>
      </header>
      <button
        className="fixed top-0 right-0 z-10 m-2 md:m-6 button-style"
        onClick={() => setIsButtonClick(!isButtonClick)}
      >
        <FaPowerOff className="w-6 md:w-8 h-6 md:h-8" />
      </button>
    </>
  );
};

export default Header;
