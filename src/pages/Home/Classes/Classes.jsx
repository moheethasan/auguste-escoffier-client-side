import { useQuery } from "@tanstack/react-query";
import ClassesCard from "../../../components/Card/ClassesCard";
import Loader from "../../../components/Shared/Loader/Loader";

const Classes = () => {
  const { data: classes = [], isLoading } = useQuery(["classes"], async () => {
    const res = await fetch(`${import.meta.env.VITE_apiUrl}/approved`);
    return res.json();
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="container mx-auto py-24 px-4">
      <h1 className="text-center text-4xl md:text-5xl font-bold pb-3">
        <span className="title-text">Approved Classes</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-10 xl:gap-14 mt-24">
        {classes?.map((classs) => (
          <ClassesCard key={classs._id} classs={classs}></ClassesCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
