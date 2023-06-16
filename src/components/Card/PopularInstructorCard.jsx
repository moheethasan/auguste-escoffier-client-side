import { Fade } from "react-awesome-reveal";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const PopularInstructorCard = ({ instructor }) => {
  const { name, email, image } = instructor || {};

  return (
    <Fade duration={1000} delay={100} cascade>
      <div className="rounded overflow-hidden shadow-lg hover:shadow-2xl">
        <div className="relative">
          <img className="w-full h-auto" src={image} alt="Instructor" />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity">
            <div className="flex flex-col justify-center items-center h-full text-white">
              <h3 className="text-2xl font-bold text-lime-500 mb-2">{name}</h3>
              <p>{email}</p>
              <Link
                to="/instructors"
                className="flex items-center gap-1 px-5 py-2 text-sm md:text-base rounded-lg bg-white text-lime-500 hover:bg-gradient-to-r from-lime-500 to-lime-300 hover:text-white mt-5"
              >
                Details <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default PopularInstructorCard;
