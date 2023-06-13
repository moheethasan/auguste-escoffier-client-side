import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center title-text text-6xl my-10">
        Profile is loading...
      </h1>
      <Link to="/dashboard" className="btn-primary">
        Go Back
      </Link>
    </div>
  );
};

export default Profile;
