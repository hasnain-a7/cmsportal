import { MdSpaceDashboard } from "react-icons/md";
import { LuListTodo } from "react-icons/lu";
import { MdLibraryBooks } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaBook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-[#031F31] w-full h-full flex flex-row p-1 rounded-xl sm:hidden 
      custom-scroll
    "
    >
      <div className="flex flex-row items-center justify-between p-1 ">
        <nav className=" flex justify-between  items-center ">
          <ul className="flex flex-row gap-7.5 justify-center items-center  font-medium w-fit ">
            {/* Key change: w-fit */}
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block  duration-200 ${
                    isActive
                      ? "bg-[#3CBEA9]  rounded-lg m-0 "
                      : "text-white font-semibold"
                  }`
                }
              >
                <div className="flex flex-col items-center pt-1 pl-2 pr-2 m-1">
                  <MdSpaceDashboard size={28} /> Dashboard
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses"
                className={({ isActive }) =>
                  ` block duration-200 ${
                    isActive
                      ? "bg-[#3CBEA9] rounded-lg m-0"
                      : "text-white font-semibold"
                  }`
                }
              >
                <div className="flex flex-col items-center pt-1 pl-4 pr-4 m-1">
                  <MdLibraryBooks size={28} /> Courses
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/attandance"
                className={({ isActive }) =>
                  `block duration-200 ${
                    isActive
                      ? "bg-[#3CBEA9] rounded-lg m-0"
                      : "text-white font-semibold"
                  }`
                }
              >
                <div className="flex flex-col items-center pt-1 pl-3 pr-3 m-1">
                  <LuListTodo size={28} /> Atandance
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gradebook"
                className={({ isActive }) =>
                  `block  duration-200 ${
                    isActive
                      ? "bg-[#3CBEA9] rounded-lg m-0"
                      : "text-white font-semibold"
                  }`
                }
              >
                <div className="flex flex-col items-center pt-2 pl-3 pr-3 m-1">
                  <FaBook size={22} /> Grade
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gradebook"
                className={({ isActive }) =>
                  `block  duration-200 ${
                    isActive
                      ? "bg-[#3CBEA9] rounded-lg"
                      : "text-white font-semibold"
                  }`
                }
              >
                <div className="flex flex-col items-center pt-2 pl-3 pr-3 m-1">
                  <FaBook size={22} /> Grade
                </div>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
