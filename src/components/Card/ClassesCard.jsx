import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import { Fade } from "react-awesome-reveal";

const ClassesCard = ({ classs }) => {
  const { class_name, instructor_name, class_image, available_seats, price } =
    classs || {};

  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const handleSelect = () => {
    if (!user) {
      return Swal.fire({
        title: "Oops!",
        text: "You have to be logged in to select a class.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
    const selectedClass = {
      student_name: user?.displayName,
      student_email: user?.email,
      class_name,
      class_image,
      price,
      instructor_name,
      payment_status: "selected",
    };
    fetch(`${import.meta.env.VITE_apiUrl}/enrolls`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(selectedClass),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Failed to insert class");
        }
      })
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire("Done!", `Class selected successfully`, "success");
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire("Oops!", `You have already selected this class`, "error");
      });
  };

  return (
    <Fade duration={2000} delay={100} cascade>
      <div
        className={`card bg-base-100 shadow-xl hover:shadow-2xl flex flex-col ${
          available_seats === 0 && "bg-red-500"
        }`}
      >
        <figure>
          <img
            className="w-full h-52 sm:h-64 md:h-48 2xl:h-64"
            src={class_image}
            alt="Class"
          />
        </figure>
        <div className="flex flex-col p-7 gap-1 flex-grow">
          <h2 className="text-2xl font-bold">{class_name}</h2>
          <p className="font-semibold mb-3">
            <span>Instructor: </span>
            {instructor_name}
          </p>
          <div className="flex justify-between items-center mt-auto">
            <div className="flex flex-col gap-1">
              <p>Price: ${price}</p>
              <p>Available Seats: {available_seats}</p>
            </div>
            <button
              onClick={() => handleSelect()}
              disabled={available_seats === 0 || isAdmin || isInstructor}
              className="flex items-center gap-1 btn btn-accent text-white bg-lime-500 border-0 hover:bg-lime-600"
            >
              Select{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default ClassesCard;
