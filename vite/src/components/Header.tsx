import { FC, useState } from "react";
import { FaPowerOff } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header: FC = () => {
  const [isClick, setIsClick] = useState<boolean>(false);

  return (
    <>
      <header
        className={`${
          isClick ? "translate-y-16 md:translate-y-28" : ""
        } px-2 -mt-16 md:-mt-28 h-16 md:h-28 transition delay-150 duration-300 ease-in-out fixed top-0 w-full flex justify-between items-center`}
      >
        {/* 각종 기능 부착 */}
        <Link to="/">프로젝트 슬라임</Link>
      </header>
      <button
        className="fixed top-0 right-0 z-10 m-2 md:m-6 button-style"
        onClick={() => setIsClick(!isClick)}
      >
        <FaPowerOff className="w-6 md:w-8 h-6 md:h-8" />
      </button>
    </>
  );
};

export default Header;
