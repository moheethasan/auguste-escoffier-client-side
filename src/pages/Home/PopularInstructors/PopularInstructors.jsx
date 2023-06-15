import { useQuery } from "@tanstack/react-query";
import Loader from "../../../components/Shared/Loader/Loader";
import PopularInstructorCard from "../../../components/Card/PopularInstructorCard";

const PopularInstructors = () => {
  const { data: instructors = [], isLoading } = useQuery(
    ["instructors"],
    async () => {
      const res = await fetch(`${import.meta.env.VITE_apiUrl}/instructors`);
      return res.json();
    }
  );

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="container mx-auto pb-20 pt-6 px-4">
      <h1 className="text-center text-4xl md:text-5xl font-bold pb-3">
        <span className="title-text">Popular Instructors</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-10 xl:gap-14 mt-24">
        {instructors?.map((instructor) => (
          <PopularInstructorCard
            key={instructor._id}
            instructor={instructor}
          ></PopularInstructorCard>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
