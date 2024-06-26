import { FC, useState } from "react";
import { Link } from "react-router-dom";
import i18n from "../lib/i18n";

const NotFound: FC = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 923 923"
        className="w-16 h-16 flex justify-center items-center rounded-full mr-2 text-black"
      >
        <defs>
          <style>{`.cls-1 { fill: currentColor; stroke-width: 0px; }`}</style>
        </defs>
        <path
          className="cls-1"
          d="M440.1,251.3c-121.3,11.4-212.8,112.7-217,234-.8,14.2-.6,28-.3,42.3.7,25.6,1.3,50.2,2.3,75.7.9,13.4.3,33.9,10.3,42.6,2.9,2.4,6.2,3.9,9.8,5.3,17.4,7.6,69.2,15.3,102.7,18,68.7,5.8,138.1,6.5,206.5,1.6,42-2.7,106.8-11.9,124.7-20.5,14.5-5.4,15.4-13.7,16.9-31.2.6-8.4.9-18.7,1.2-29,1-33.9,2.6-65.5,1.6-99.1-.9-139.5-119.4-251.8-258.5-239.6h-.2ZM475.6,278.6c28.7,2.2,57.9,11.8,83.1,25.1,34.8,18.5,62.5,47.7,81.7,81.9,22.2,39.5,28.8,85,28.5,129.8-.4,28.3,1.2,62.2-7.4,87.3-4.9,14.8-15.8,25.6-30.9,30-35.3,9.5-66.8,10.9-109.4,13.8-58.9,2.8-122.8,2-181.1-4.9-81.1-9.3-87.2-33-87-109.7-.3-28.8-.3-58.1,5.6-85.7,7.3-34.1,22.8-66.8,45.3-93.7,41-50.1,106.8-78.8,171.3-74.1h.3Z"
        />
        <path
          className="cls-1"
          d="M380.6,373c-21,14.9-24.1,47.9-23.9,78.7,0,18,2.3,33.1,8.7,49,6.9,17.8,22,29.9,35.7,10.8,6.6-9.2,10.2-22.6,12.8-36.1,2.3-16.9,2.9-45-1-61.7-4.4-19.5-13.5-45.9-32.2-40.7h-.1Z"
        />
        <path
          className="cls-1"
          d="M530.5,372.9c-4.9,2.7-9.3,8.9-12.3,13.8-4.3,8.1-6.9,17-9.3,28-3.2,16.7-3.2,41.2-.8,60,10.9,63.3,46,60,55.9.1,3.8-28.2,2.3-75.7-15.9-96.2-2-2.1-4.5-4.7-7.3-5.6-3.1-.9-7.6-.9-10.1-.1h-.2Z"
        />
        <path
          className="cls-1"
          d="M427.6,583.1c-19.6,1.2-41.7,1.2-61.1,2.6-36.2,2.1-118.5,11.3-59.3,22.5,44.1,7,76.2,8,124.8,8.8,48.2.4,103.2,0,139.6-3.5,64.4-4.8,99.5-17,7.2-25.9-38.3-4-116.9-5.2-151.1-4.5h0Z"
        />
      </svg>
      404 Not Found
      <Link
        className={`mt-2 underline underline-offset-2 ${
          isClicked ? "text-slimeGreen-700" : ""
        }`}
        to={`/${i18n.language}/`}
        onMouseEnter={() => setIsClicked(true)}
        onMouseLeave={() => setIsClicked(false)}
        onTouchStart={() => setIsClicked(true)}
        onTouchEnd={() => setIsClicked(false)}
      >
        Home
      </Link>
    </section>
  );
};

export default NotFound;
