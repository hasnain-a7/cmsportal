/* eslint-disable react/prop-types */
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { MdSpaceDashboard } from "react-icons/md";
import { LuListTodo } from "react-icons/lu";
import { MdLibraryBooks } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import { MdLogout } from "react-icons/md";


function Sidebar(props) {
  return (
    <aside 
      className={`fixed top-0 left-0 z-50 flex flex-col jus h-full w-52   bg-[#031F31] text-white overflow-y-auto transition-transform duration-300 ease-in-out  ${props.isOpen ? 'translate-x-0' : '-translate-x-full'}`} 
    >
      <div className="flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">LMS</h1>
        <button 
          onClick={props.toggleSidebar} 
          className="text-white"
        >
          <IoIosArrowDropleftCircle className="h-6 w-6" /> 
        </button>
      </div>
      <div className="mt-2 h-full flex flex-col justify-between pb-3  ">
        <nav className="space-y-1">
        <ul className="flex flex-col p-2 font-medium  w-full min-h-96">
        <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "bg-[#3CBEA9] rounded-lg" : "text-white font-semibold"}  `
                                    }
                                >
                                  <div className="flex items-center gap-1">
                                  <MdSpaceDashboard/>  Dashboard
                                  </div>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to="/courses"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "bg-[#3CBEA9] rounded-lg" : "text-white font-semibold"}  `
                                    }
                                >
                                  <div className="flex items-center gap-1">
                                  <MdLibraryBooks/>  Couses
                                  </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/attandance"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200  ${isActive ? "bg-[#3CBEA9] rounded-lg" : "text-white font-semibold"}  `
                                    }
                                >
                                 <div className="flex items-center gap-1">
                                  <LuListTodo/>  Attandance
                                  </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/gradebook"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200  ${isActive ? "bg-[#3CBEA9] rounded-lg" : "text-white font-semibold"}  `
                                    }
                                >
                                  <div className="flex items-center gap-1">
                                  <FaBook/>  Grade Book
                                  </div>
                                </NavLink>
                            </li>
                            
                            
                        </ul>
        </nav>
        <div className=" flex justify-center ">
            <button className="bg-[#3CBEA9] rounded-sm p-2">
            <div className="flex items-center gap-1">
                                  <MdLogout/>  <NavLink
                                to="/Login"
                                    
                                >Log Out</NavLink> 
                                  </div>
            </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;