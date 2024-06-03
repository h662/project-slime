import { FC, useState } from "react";
import { FaPowerOff } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../icons/Logo";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

const Header: FC = () => {
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);
  const [isLinkHover, setIsLinkHover] = useState<boolean>(false);

  const { t } = useTranslation();

  const navigate = useNavigate();

  const onClickLink = () => {
    setIsButtonClicked(false);

    navigate("/all-slimes");
  };

  return (
    <>
      <header
        className={`${
          isButtonClicked ? "translate-y-16 md:translate-y-28 z-10" : "-z-10"
        } -mt-[72px] md:-mt-[136px] h-16 md:h-28 transition delay-150 duration-300 ease-in-out fixed top-2 md:top-6 w-full`}
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
            isButtonClicked ? "opacity-100" : "opacity-0"
          } bg-gradient-to-b from-slimeGreen-100 transition delay-150 duration-300 ease-in-out pt-4 px-2 md:px-4 flex justify-between`}
        >
          <nav>
            <button className="button-style-sm" onClick={onClickLink}>
              모든 슬라임 보기
            </button>
          </nav>
          <LanguageSelector />
        </div>
      </header>
      <button
        className="fixed top-0 right-0 z-10 m-2 md:m-6 button-style"
        onClick={() => setIsButtonClicked(!isButtonClicked)}
      >
        <FaPowerOff className="w-6 md:w-8 h-6 md:h-8" />
      </button>
    </>
  );
};

export default Header;
