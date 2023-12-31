import useAuth from "../../../hooks/useAuth";
import Loader from "../../../components/Shared/Loader/Loader";
import { BiEdit } from "react-icons/bi";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const MyClass = () => {
  const { user, loading } = useAuth();

  const { data: classes = [] } = useQuery(["classes", user], async () => {
    const res = await fetch(
      `${import.meta.env.VITE_apiUrl}/classes?email=${user?.email}`
    );
    return res.json();
  });

  if (loading) {
    return <Loader></Loader>;
  }
  if (classes.length === 0) {
    return (
      <p className="text-error mt-10 text-lg font-semibold text-center">
        No classes found.
      </p>
    );
  }

  return (
    <div className="w-full mx-auto my-20">
      <h2 className="text-lg lg:text-2xl font-semibold uppercase mb-5 text-center">
        Total Classes: {classes.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="text-gray-600 table-sm md:table-md lg:table-lg w-full bg-lime-100 mt-5 rounded-lg">
          <thead>
            <tr>
              <th></th>
              <th className="text-start">Class</th>
              <th className="text-start">Instructor</th>
              <th className="text-start">Price</th>
              <th className="text-start">Seats</th>
              <th>Status</th>
              <th className="text-start">Enrolled</th>
              <th className="text-start">Feedback</th>
              <th className="text-start">Action</th>
            </tr>
          </thead>
          <tbody>
            {classes?.map((cls, index) => (
              <tr key={cls._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={cls?.class_image} alt="class" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">
                        {cls?.class_name.length > 20
                          ? `${cls?.class_name.slice(0, 20)}...`
                          : cls?.class_name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="flex flex-col">
                  <h3>{cls?.instructor_name}</h3>
                  <h3>{cls?.instructor_email}</h3>
                </td>
                <td>${cls?.price}</td>
                <td>{cls?.available_seats}</td>
                <td>{cls?.status}</td>
                <td>{cls?.enrolled_student}</td>
                <td>{cls?.feedback}</td>
                <td>
                  <Link
                    to={`/dashboard/updateClass/${cls?._id}`}
                    className="btn bg-lime-300 border-0 hover:bg-lime-400"
                  >
                    <BiEdit className="text-xl" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;
