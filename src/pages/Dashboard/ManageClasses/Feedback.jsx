import { useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Feedback = () => {
  const cls = useLoaderData();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    cls.feedback = data.feedback;
    fetch(`${import.meta.env.VITE_apiUrl}/classes/${cls._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cls),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Done!", `Feedback sent successfully`, "success");
          navigate("/dashboard/manageClasses");
        }
      });
  };

  return (
    <div className="bg-lime-100 p-10">
      <h1 className="text-2xl font-medium text-center leading-6 text-gray-900">
        Send a feedback!
      </h1>
      <div className="mt-2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="py-8 rounded-lg w-4/5 mx-auto"
        >
          <div className="w-full form-control">
            <textarea
              {...register("feedback")}
              type="text"
              rows={5}
              placeholder="Write a feedback here"
              defaultValue={cls?.feedback}
              required
              className="resize-none rounded-xl border-gray-300 border-2 px-4 py-2"
            />
          </div>
          <input
            className="btn-primary mt-5 btn-block cursor-pointer"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
};

export default Feedback;
