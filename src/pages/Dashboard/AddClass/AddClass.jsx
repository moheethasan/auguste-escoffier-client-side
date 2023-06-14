import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import Loader from "../../../components/Shared/Loader/Loader";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddClass = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.status = "pending";
    data.enrolled_student = 0;

    const img_hosting_token = import.meta.env.VITE_ImageUpload_apiKey;
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const formData = new FormData();
    formData.append("image", data?.class_image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const imgURL = imgData.data.display_url;
          data.class_image = imgURL;
          fetch(`${import.meta.env.VITE_apiUrl}/classes`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                Swal.fire("Done!", `Class added successfully`, "success");
                reset();
                navigate("/dashboard/myClass");
              }
            });
        }
      });
  };
  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <>
      <div className="container mx-auto px-2 py-10">
        <h1 className="text-center text-4xl md:text-5xl font-bold pb-8">
          <span className="title-text">Add A Class</span>
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="shadow-2xl bg-base-100 p-14 rounded-lg lg:w-4/5 2xl:w-3/5 mx-auto"
        >
          <div className="w-full form-control">
            <label className="label">
              <span className="font-semibold label-text">Class Name</span>
            </label>
            <input
              {...register("class_name")}
              type="text"
              placeholder="Class name"
              required
              className="input input-bordered border-2"
            />
          </div>
          <div className="w-full form-control">
            <label className="label">
              <span className="font-semibold label-text">Class Image</span>
            </label>
            <input
              type="file"
              {...register("class_image")}
              required
              className="file-input file-input-bordered file-input-success  border-2"
            />
          </div>
          <div className="lg:flex gap-5">
            <div className="w-full form-control">
              <label className="label">
                <span className="font-semibold label-text">
                  Instructor Name
                </span>
              </label>
              <input
                {...register("instructor_name")}
                type="text"
                defaultValue={user?.displayName}
                readOnly
                className="input input-bordered border-2"
              />
            </div>
            <div className="w-full form-control">
              <label className="label">
                <span className="font-semibold label-text">
                  Instructor Email
                </span>
              </label>
              <input
                {...register("instructor_email")}
                type="email"
                defaultValue={user?.email}
                readOnly
                className="input input-bordered border-2"
              />
            </div>
          </div>
          <div className="w-full form-control">
            <label className="label">
              <span className="font-semibold label-text">Price</span>
            </label>
            <input
              {...register("price")}
              type="text"
              pattern="^\d+(\.\d{1,2})?$"
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
              placeholder="0"
              required
              className="input input-bordered border-2"
            />
          </div>
          <input
            className="btn-primary btn-block mt-6"
            type="submit"
            value="Add Class"
          />
        </form>
      </div>
    </>
  );
};

export default AddClass;
