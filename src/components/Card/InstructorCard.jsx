import { FaArrowRight } from "react-icons/fa";
import { MdMailOutline, MdOutlinePermIdentity } from "react-icons/md";

const InstructorCard = ({ instructor }) => {
  const { name, email, image } = instructor || {};

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Instructor" />
      </figure>
      <div className="flex flex-col p-8 gap-1 mx-auto">
        <h2 className="flex items-center gap-1 text-2xl font-bold">
          <MdOutlinePermIdentity className="text-lime-500" /> {name}
        </h2>
        <p className="flex items-center gap-1 font-semibold">
          <MdMailOutline className="text-xl text-lime-500" /> {email}
        </p>
        <div className="card-actions justify-center">
          <button className="flex items-center gap-1 px-5 py-2 text-sm md:text-base rounded-lg bg-white border border-lime-500 text-lime-500 hover:bg-gradient-to-r from-lime-500 to-lime-300 hover:text-white hover:border-lime-100 mt-5">
            See Classes <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
