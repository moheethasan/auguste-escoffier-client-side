import { Fade } from "react-awesome-reveal";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const PopularClassCard = ({ classs }) => {
  const {
    class_name,
    instructor_name,
    class_image,
    price,
    enrolled_student,
    available_seats,
  } = classs || {};
  return (
    <Fade duration={1000} delay={100} cascade>
      <div className="bg-base-100 shadow-lg hover:shadow-2xl rounded-lg overflow-hidden flex flex-col h-full">
        <div className="px-4 py-2">
          <h1 className="text-2xl font-bold uppercase text-gray-600">
            {class_name}{" "}
            <div className="badge bg-lime-600 text-white">
              {available_seats - enrolled_student} seats left
            </div>
          </h1>
          <div className="flex items-center justify-between">
            <p className="text-gray-600 text-md font-semibold mt-1">
              Instructor: <span className="title-text">{instructor_name}</span>
            </p>
            <p className="text-gray-600 text-md font-semibold mt-1">
              Enrolled: <span className="title-text">{enrolled_student}</span>
            </p>
          </div>
        </div>
        <div className="mt-auto">
          <img
            className="h-56 w-full object-cover mt-2"
            src={class_image}
            alt="Class"
          />
          <div className="flex items-center justify-between px-4 py-2 bg-lime-600">
            <h1 className="text-gray-200 font-bold text-xl">${price}</h1>
            <Link
              to="/classes"
              className="flex items-center gap-1 px-5 py-2 text-sm md:text-base rounded-lg bg-white text-lime-500 hover:bg-gradient-to-r from-lime-500 to-lime-300 hover:text-white"
            >
              Learn More <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default PopularClassCard;
