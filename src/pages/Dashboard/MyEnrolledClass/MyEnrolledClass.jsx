import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import Loader from "../../../components/Shared/Loader/Loader";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const MyEnrolledClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useAuth();
  const { data: classes = [] } = useQuery(["classes", user], async () => {
    const res = await axiosSecure.get(`/enrolls/enrolled?email=${user?.email}`);
    return res.data;
  });

  if (loading) {
    return <Loader></Loader>;
  }
  if (classes.length === 0) {
    return (
      <p className="text-error mt-10 text-lg font-semibold text-center">
        No enrolled classes found.
      </p>
    );
  }
  return (
    <div className="w-full mx-auto my-20">
      <h2 className="text-lg lg:text-2xl font-semibold uppercase mb-5 text-center">
        Total enrolled: {classes.length}
      </h2>
      <div className="overflow-x-auto mb-5">
        <table className="text-gray-600 table-sm md:table-md lg:table-lg w-full bg-lime-100 mt-5 rounded-lg">
          <thead>
            <tr>
              <th></th>
              <th className="text-start">Class</th>
              <th className="text-start">Status</th>
              <th className="text-start">Instructor</th>
              <th className="text-start">Price</th>
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
                <td>{cls?.payment_status}</td>
                <td>
                  <h3>{cls?.instructor_name}</h3>
                </td>
                <td>${cls?.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center">
        <Link to="/dashboard/paymentHistory" className="btn-primary">
          Check Payment History
        </Link>
      </div>
    </div>
  );
};

export default MyEnrolledClass;
