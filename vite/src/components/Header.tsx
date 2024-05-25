import { FC, useState } from "react";
import { FaPowerOff } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Logo from "/images/logo.svg";

const Header: FC = () => {
  const [isButtonClick, setIsButtonClick] = useState<boolean>(false);
  const [isLinkHover, setIsLinkHover] = useState<boolean>(false);

  return (
    <>
      <header
        className={`${
          isButtonClick ? "translate-y-16 md:translate-y-28" : ""
        }  px-2 -mt-16 md:-mt-28 h-16 md:h-28 transition delay-150 duration-300 ease-in-out fixed top-0 w-full flex justify-between items-center`}
      >
        {/* 각종 기능 부착 */}
        <Link
          className="flex items-center text-lg font-bold"
          to="/"
          onMouseEnter={() => setIsLinkHover(true)}
          onMouseLeave={() => setIsLinkHover(false)}
          onTouchStart={() => setIsLinkHover(true)}
          onTouchEnd={() => setIsLinkHover(false)}
        >
          <img
            className={`${
              isLinkHover && "bg-slimeGreen-200"
            } pb-1 w-12 h-12 md:w-16 md:h-16 flex justify-center items-center rounded-full mr-2`}
            src={Logo}
            alt="Slime Project"
          />{" "}
          슬라임 프로젝트
        </Link>
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
