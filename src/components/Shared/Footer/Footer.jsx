import social from "../../../assets/group.png";
import { FaPaperPlane } from "react-icons/fa";
import Logo from "../Navbar/Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-lime-100 to-lime-50 mt-20 pt-20 pb-10 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0">
        <div>
          <Logo></Logo>
          <p className="mb-4 text-gray-600">
            Unleash your culinary passion at Auguste Escoffier. Immerse yourself
            in the art of cooking, learn from industry professionals, and master
            the techniques that shape the world of gastronomy. Embark on a
            culinary journey and unleash your creativity in the kitchen.
          </p>
          <Link to="#">
            <img className="mb-4" src={social} alt="social link" />
          </Link>
        </div>
        <div className="flex justify-between md:justify-around">
          <div>
            <h3 className="text-xl font-bold mb-5 text-gray-600">
              Helpful Links
            </h3>
            <p className="mb-4 text-gray-600">
              <Link to="#">Programs & Courses</Link>
            </p>
            <p className="mb-4 text-gray-600">
              <Link to="#">Admissions</Link>
            </p>
            <p className="mb-4 text-gray-600">
              <Link to="#">Campus Locations</Link>
            </p>
            <p className="mb-4 text-gray-600">
              <Link to="#">Career Services</Link>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-5 text-gray-600">
              Quick Links
            </h3>
            <p className="mb-4 text-gray-600">
              <Link to="#">Culinary Arts</Link>
            </p>
            <p className="mb-4 text-gray-600">
              <Link to="#">Pastry & Baking Arts</Link>
            </p>
            <p className="mb-4 text-gray-600">
              <Link to="#">Restaurant Management</Link>
            </p>
            <p className="mb-4 text-gray-600">
              <Link to="#">Online Learning</Link>
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-5 text-gray-600">Contact Us</h3>
          <p className="mt-4 text-gray-600">
            123-456-789
            <br />
            info@augusteescoffier.com
            <br />
            123 Culinary Street, Foodville
          </p>
          <p className="my-4 text-gray-600">
            Subscribe to our newsletter for the latest updates, culinary tips,
            and exclusive offers.
          </p>
          <div className="flex">
            <input
              className="border-0 rounded-l-xl w-full md:w-3/4 p-4 bg-white"
              type="email"
              placeholder="Email Address"
            />
            <button className="transition duration-200 px-3 md:px-5 py-3 md:py-4 text-white bg-gradient-to-r from-lime-500 to-lime-300 hover:from-lime-600 hover:to-lime-400 rounded-r-xl">
              <FaPaperPlane className="text-4xl" />
            </button>
          </div>
        </div>
      </div>
      <p className="text-center pt-16 pb-10 text-gray-600">
        <small>© 2023 Auguste Escoffier. All rights reserved.</small>
      </p>
    </footer>
  );
};

export default Footer;
