import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Loader from "../../../components/Shared/Loader/Loader";
import { BiEdit } from "react-icons/bi";

const MyClass = () => {
  const [classes, setClasses] = useState([]);
  const { user, loading } = useAuth();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_apiUrl}/classes?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, [user]);

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="w-full mx-auto my-20">
      <h2 className="text-lg lg:text-2xl font-semibold uppercase mb-5 text-center">
        Total Classes: {classes.length}
      </h2>
      {classes.length === 0 ? (
        <p className="text-error mt-10 text-lg font-semibold text-center">
          No classes found.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-sm md:table-md lg:table-lg w-full bg-lime-100 mt-5 rounded-lg">
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
              {classes.map((cls, index) => (
                <tr key={cls._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={cls.class_image} alt="class" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {cls.class_name.length > 20
                            ? `${cls.class_name.slice(0, 20)}...`
                            : cls.class_name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="flex flex-col">
                    <h3>{cls.instructor_name}</h3>
                    <h3>{cls.instructor_email}</h3>
                  </td>
                  <td>${cls.price}</td>
                  <td>{cls.available_seats}</td>
                  <td>{cls.status}</td>
                  <td>0</td>
                  <td></td>
                  <td>
                    <button className="btn bg-lime-300 border-0 hover:bg-lime-400">
                      <BiEdit className="text-xl" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyClass;
