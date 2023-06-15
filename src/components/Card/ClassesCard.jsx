const ClassesCard = ({ classs }) => {
  const { class_name, instructor_name, class_image, available_seats, price } =
    classs || {};

  // TODO: dynamic
  const isInstructor = false;
  const isAdmin = false;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          className="w-full h-52 sm:h-64 md:h-48 2xl:h-64"
          src={class_image}
          alt="Class"
        />
      </figure>
      <div className="flex flex-col p-7 gap-1">
        <h2 className="flex items-center gap-1 text-2xl font-bold">
          {class_name}
        </h2>
        <p className="flex items-center gap-1 font-semibold">
          <span>Instructor: </span>
          {instructor_name}
        </p>
        <div className="flex justify-between items-center mt-3">
          <div className="flex flex-col gap-1">
            <p>Price: ${price}</p>
            <p>Available Seats: {available_seats}</p>
          </div>
          <button
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
  );
};

export default ClassesCard;
