import { useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UpdateClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const cls = useLoaderData();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    data.price = parseFloat(data.price);
    data.available_seats = parseInt(data.available_seats);
    axiosSecure.patch(`/classes/${cls._id}`, data).then((data) => {
      if (data.data.modifiedCount > 0) {
        Swal.fire("Done!", `Class updated successfully`, "success");
        navigate("/dashboard/myClass");
      }
    });
  };
  return (
    <div className="bg-lime-100 p-10">
      <h1 className="text-2xl font-medium text-center leading-6 text-gray-900">
        You can update now!
      </h1>
      <div className="mt-2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="py-8 rounded-lg w-4/5 mx-auto"
        >
          <div className="w-full form-control">
            <label className="label">
              <span className="font-semibold label-text">Class Name</span>
            </label>
            <input
              {...register("class_name")}
              type="text"
              defaultValue={cls?.class_name}
              placeholder="Class name"
              required
              className="input input-bordered border-2"
            />
          </div>
          <div className="w-full form-control">
            <label className="label">
              <span className="font-semibold label-text">Price</span>
            </label>
            <input
              {...register("price")}
              type="text"
              pattern="^\d+(\.\d{1,2})?$"
              defaultValue={cls?.price}
              placeholder="0.00"
              required
              className="input input-bordered border-2"
            />
          </div>
          <div className="w-full form-control">
            <label className="label">
              <span className="font-semibold label-text">Available Seats</span>
            </label>
            <input
              {...register("available_seats")}
              type="text"
              pattern="^\d+$"
              defaultValue={cls?.available_seats}
              placeholder="0"
              required
              className="input input-bordered border-2"
            />
          </div>
          <input
            className="btn-primary mt-5 btn-block cursor-pointer"
            type="submit"
            value="Update"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateClass;
