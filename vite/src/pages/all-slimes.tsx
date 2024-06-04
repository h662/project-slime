import { FC } from "react";
import { useOutletContext } from "react-router-dom";
import SlimeCard from "../components/SlimeCard";

const AllSlimes: FC = () => {
  const { metadata } = useOutletContext<OutletContext>();

  return (
    <section>
      <ul className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-16 p-16">
        {metadata.map((v) => (
          <SlimeCard key={v.id} slimeData={v} />
        ))}
      </ul>
    </section>
  );
};

export default AllSlimes;
