import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../Shared/Navbar/Logo";
import useAuth from "../../hooks/useAuth";
import { MdLogout } from "react-icons/md";
import { AiFillDollarCircle, AiFillSetting } from "react-icons/ai";
import { GiTeacher, GiBookshelf } from "react-icons/gi";
import { FaBookmark, FaHome, FaUsers, FaWallet } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";

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

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

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
          <div className="flex flex-col justify-between flex-1 mt-8">
            <nav>
              {isAdmin ? (
                <>
                  <div className="h-px bg-lime-300 mx-auto"></div>
                  <NavLink
                    to="/dashboard/manageClasses"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 mt-2 rounded-lg transition-colors duration-300 transform hover:bg-lime-200   hover:text-gray-700 ${
                        isActive
                          ? "bg-lime-200  text-gray-700"
                          : "text-gray-600"
                      }`
                    }
                  >
                    <GiBookshelf className="w-5 h-5" />
                    <span className="mx-2 font-medium">Manage Classes</span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/manageUsers"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 mt-2 rounded-lg transition-colors duration-300 transform hover:bg-lime-200   hover:text-gray-700 ${
                        isActive
                          ? "bg-lime-200  text-gray-700"
                          : "text-gray-600"
                      }`
                    }
                  >
                    <FaUsers className="w-5 h-5" />
                    <span className="mx-2 font-medium">Manage Users</span>
                  </NavLink>
                </>
              ) : isInstructor ? (
                <>
                  <NavLink
                    to="/dashboard/addClass"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 mt-2 rounded-lg transition-colors duration-300 transform hover:bg-lime-200   hover:text-gray-700 ${
                        isActive
                          ? "bg-lime-200  text-gray-700"
                          : "text-gray-600"
                      }`
                    }
                  >
                    <BiBook className="w-5 h-5" />
                    <span className="mx-2 font-medium">Add a Class</span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/myClass"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 mt-2 rounded-lg transition-colors duration-300 transform hover:bg-lime-200   hover:text-gray-700 ${
                        isActive
                          ? "bg-lime-200  text-gray-700"
                          : "text-gray-600"
                      }`
                    }
                  >
                    <GiBookshelf className="w-5 h-5" />
                    <span className="mx-2 font-medium">My Classes</span>
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink
                    to="/dashboard/selectedClass"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 mt-2 rounded-lg transition-colors duration-300 transform hover:bg-lime-200   hover:text-gray-700 ${
                        isActive
                          ? "bg-lime-200  text-gray-700"
                          : "text-gray-600"
                      }`
                    }
                  >
                    <FaBookmark className="w-5 h-5" />
                    <span className="mx-2 font-medium">
                      My Selected Classes
                    </span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/enrolledClass"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 mt-2 rounded-lg transition-colors duration-300 transform hover:bg-lime-200   hover:text-gray-700 ${
                        isActive
                          ? "bg-lime-200  text-gray-700"
                          : "text-gray-600"
                      }`
                    }
                  >
                    <AiFillDollarCircle className="w-5 h-5" />
                    <span className="mx-2 font-medium">
                      My Enrolled Classes
                    </span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/paymentHistory"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 mt-2 rounded-lg transition-colors duration-300 transform hover:bg-lime-200   hover:text-gray-700 ${
                        isActive
                          ? "bg-lime-200  text-gray-700"
                          : "text-gray-600"
                      }`
                    }
                  >
                    <FaWallet className="w-5 h-5" />
                    <span className="mx-2 font-medium">Payment History</span>
                  </NavLink>
                </>
              )}
              <div className="h-px bg-lime-300 mx-auto mt-2"></div>
              <NavLink
                className="flex items-center px-4 py-2 mt-2 rounded-lg transition-colors duration-300 transform  hover:bg-lime-200   hover:text-gray-700 text-gray-600"
                to="/"
              >
                <FaHome className="w-5 h-5" />
                <span className="mx-2 font-medium">Home</span>
              </NavLink>
              <NavLink
                className="flex items-center px-4 py-2 mt-1 rounded-lg transition-colors duration-300 transform  hover:bg-lime-200   hover:text-gray-700 text-gray-600"
                to="/instructors"
              >
                <GiTeacher className="w-5 h-5" />
                <span className="mx-2 font-medium">Instructors</span>
              </NavLink>
              <NavLink
                className="flex items-center px-4 py-2 mt-1 rounded-lg transition-colors duration-300 transform  hover:bg-lime-200   hover:text-gray-700 text-gray-600"
                to="/classes"
              >
                <GiBookshelf className="w-5 h-5" />
                <span className="mx-2 font-medium">Classes</span>
              </NavLink>
            </nav>
          </div>
        </div>

        <div>
          <div className="h-px bg-lime-300 mx-auto"></div>
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-2 rounded-lg transition-colors duration-300 transform hover:bg-lime-200   hover:text-gray-700 ${
                isActive ? "bg-lime-200  text-gray-700" : "text-gray-600"
              }`
            }
          >
            <AiFillSetting className="w-5 h-5" />
            <span className="mx-2 font-medium">Profile</span>
          </NavLink>
          <button
            onClick={handleLogOut}
            className="flex w-full rounded-lg items-center px-4 py-2 mt-1 text-gray-600 hover:bg-lime-200   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <MdLogout className="w-5 h-5" />
            <span className="mx-2 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
