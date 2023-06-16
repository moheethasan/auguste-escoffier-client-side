import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import Loader from "../../../components/Shared/Loader/Loader";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const MySelectedClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useAuth();
  const { data: classes = [], refetch } = useQuery(
    ["classes", user],
    async () => {
      const res = await axiosSecure.get(
        `/enrolls/selected?email=${user?.email}`
      );
      return res.data;
    }
  );

  const handleDelete = (cls) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/enrolls/${cls._id}`).then((data) => {
          if (data.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your class has been deleted.", "success");
          }
        });
      }
    });
  };

  if (loading) {
    return <Loader></Loader>;
  }
  if (classes.length === 0) {
    return (
      <p className="text-error mt-10 text-lg font-semibold text-center">
        No selected classes found.
      </p>
    );
  }

  return (
    <div className="w-full mx-auto my-20">
      <h2 className="text-lg lg:text-2xl font-semibold uppercase mb-5 text-center">
        Total selected: {classes.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="text-gray-600 table-sm md:table-md lg:table-lg w-full bg-lime-100 mt-5 rounded-lg">
          <thead>
            <tr>
              <th></th>
              <th className="text-start">Class</th>
              <th className="text-start">Status</th>
              <th className="text-start">Instructor</th>
              <th className="text-start">Price</th>
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
                <td>{cls?.payment_status}</td>
                <td>
                  <h3>{cls?.instructor_name}</h3>
                </td>
                <td>${cls?.price}</td>
                <td className="flex items-center gap-3">
                  <button
                    onClick={() => handleDelete(cls)}
                    className="btn bg-red-600 hover:bg-red-700 border-0"
                  >
                    <FaTrashAlt className="text-lg text-white" />
                  </button>
                  <Link
                    to={`/dashboard/paymentCheckout/${cls?._id}`}
                    className="btn-primary"
                  >
                    Pay
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

export default MySelectedClass;
