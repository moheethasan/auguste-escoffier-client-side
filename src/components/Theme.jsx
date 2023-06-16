import { useEffect } from "react";
import { useState } from "react";
import { BsFillCloudSunFill, BsFillMoonStarsFill } from "react-icons/bs";

const MyAwesomeThemeComponent = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  // initially set the theme and "listen" for changes to apply them to the HTML tag
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <label className="swap swap-rotate">
      <input onClick={toggleTheme} type="checkbox" />
      <div className="swap-on">
        <BsFillMoonStarsFill className="text-2xl mt-2" />
      </div>
      <div className="swap-off">
        <BsFillCloudSunFill className="text-3xl mr-3" />
      </div>
    </label>
  );
};
export default MyAwesomeThemeComponent;
