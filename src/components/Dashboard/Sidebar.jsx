import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../Shared/Navbar/Logo";
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setActive] = useState("false");
  const { user, logOut } = useAuth();

  const handleToggle = () => {
    setActive(!isActive);
  };
  const handleLogOut = () => {
    logOut();
    navigate("/");
  };
  return (
    <>
      <div className="bg-lime-100 text-gray-800 flex justify-between md:hidden items-center">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Logo />
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button btn btn-ghost text-lime-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>
      </div>
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gradient-to-r from-lime-100 to-lime-50 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex py-2 justify-center items-center bg-lime-200 mx-auto rounded-lg">
              <Logo />
            </div>
            <div className="flex flex-col items-center mt-6 -mx-2">
              <Link to="/dashboard">
                <img
                  className="object-cover w-16 h-16 mx-2 rounded-full hover:shadow-2xl"
                  src={user?.photoURL}
                  alt="avatar"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <h4 className="mx-2 mt-2 font-medium text-gray-800  hover:underline">
                {user?.displayName}
              </h4>
              <p className="mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline">
                {user?.email}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>{/* TODO: add nav items */}</nav>
          </div>
        </div>

        <div>
          <div className="h-px bg-lime-300 mx-auto"></div>
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5 rounded-lg transition-colors duration-300 transform  hover:bg-lime-200   hover:text-gray-700 ${
                isActive ? "bg-lime-200  text-gray-700" : "text-gray-600"
              }`
            }
          >
            <FcSettings className="w-5 h-5" />

            <span className="mx-4 font-medium">Profile</span>
          </NavLink>
          <button
            onClick={handleLogOut}
            className="flex w-full rounded-lg items-center px-4 py-2 mt-5 text-gray-600 hover:bg-lime-200   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
