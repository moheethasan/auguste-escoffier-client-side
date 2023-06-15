import { useQuery } from "@tanstack/react-query";
import Loader from "../../../components/Shared/Loader/Loader";
import PopularClassCard from "../../../components/Card/PopularClassCard";

const PopularClasses = () => {
  const { data: classes = [], isLoading } = useQuery(["classes"], async () => {
    const res = await fetch(`${import.meta.env.VITE_apiUrl}/classes`);
    return res.json();
  });

  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div className="container mx-auto py-24 px-4">
      <h1 className="text-center text-4xl md:text-5xl font-bold pb-3">
        <span className="title-text">Popular Classes</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-10 xl:gap-14 mt-16">
        {classes?.map((classs) => (
          <PopularClassCard key={classs._id} classs={classs}></PopularClassCard>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
