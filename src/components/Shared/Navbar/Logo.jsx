import { FaCrown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex flex-col logo-hover">
      <h5 className="flex items-end">
        <FaCrown className="text-2xl text-lime-500" />
        <p className="italic text-xs">Auguste</p>
      </h5>
      <p className="italic font-semibold ml-1">Escoffier</p>
    </Link>
  );
};

export default Logo;
