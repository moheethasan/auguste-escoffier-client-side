import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageClasses = () => {
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await fetch(`${import.meta.env.VITE_apiUrl}/classes`);
    return res.json();
  });

  const handleStatusUpdate = (cls, status) => {
    const updatedClass = {
      status: status,
    };
    fetch(`${import.meta.env.VITE_apiUrl}/classes/${cls._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedClass),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire("Done!", `Status has been updated`, "success");
          refetch();
        }
      });
  };

  return (
    <div className="w-full mx-auto my-20">
      <h2 className="text-lg lg:text-2xl font-semibold uppercase mb-5 text-center">
        Total Classes: {classes?.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table-sm md:table-md lg:table-lg w-full bg-lime-100 mt-5 rounded-lg">
          <thead>
            <tr>
              <th></th>
              <th className="text-start">Class</th>
              <th className="text-start">Instructor</th>
              <th className="text-start">Available Seats</th>
              <th className="text-start">Price</th>
              <th>Status</th>
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
                        {cls?.class_name?.length > 20
                          ? `${cls?.class_name?.slice(0, 20)}...`
                          : cls?.class_name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="flex flex-col">
                  <h3>{cls?.instructor_name}</h3>
                  <h3>{cls?.instructor_email}</h3>
                </td>
                <td>{cls?.available_seats}</td>
                <td>${cls?.price}</td>
                <td>{cls?.status}</td>
                <td className="flex flex-col gap-1">
                  <button
                    disabled={
                      cls.status === "approve" || cls.status === "decline"
                        ? true
                        : false
                    }
                    onClick={() => handleStatusUpdate(cls, "approve")}
                    className="btn btn-xs text-white bg-lime-500 border-0 hover:bg-lime-600 btn-block"
                  >
                    Approve
                  </button>
                  <button
                    disabled={
                      cls.status === "approve" || cls.status === "decline"
                        ? true
                        : false
                    }
                    onClick={() => handleStatusUpdate(cls, "decline")}
                    className="btn btn-xs text-white bg-lime-500 border-0 hover:bg-lime-600 btn-block"
                  >
                    Decline
                  </button>
                  <Link
                    to={`/dashboard/feedback/${cls?._id}`}
                    className="btn btn-xs text-white bg-lime-500 border-0 hover:bg-lime-600 btn-block"
                  >
                    Send Feedback
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

export default ManageClasses;
