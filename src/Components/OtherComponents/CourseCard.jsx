import { BsFileEarmarkSpreadsheetFill } from "react-icons/bs";
import { FaBookReader } from "react-icons/fa";
import { MdOutlineChat } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { FaVideo } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
const CourseCard = () => {
  return (
    <div className="w-full mx-auto bg-[#FFFFFF] shadow-lg rounded-sm overflow-hidden">
      <div className="bg-[#3CBEA9] text-white p-4">
        <h2 className="text-xl font-bold">
          CS610 - Data Structure & Algorithm
        </h2>
        <p className="text-sm">Computer Science</p>
        <p className="text-xs">3 Credit Hour(s)</p>
      </div>

      <div className="  p-3 flex  items-center text-center gap-4">
        <div className="w-auto ml-2  h-20 p-1 flex items-center justify-center">
          <img
            className="w-full  h-full mx-auto rounded-full border"
            src="https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-of-portugal-reacts-as-he-looks-on-during-news-photo-1725633476.jpg?crop=0.666xw:1.00xh;0.180xw,0&resize=640:*" // Replace with actual image URL
            alt="Instructor"
          />
        </div>
        <div className="w-auto p-1   justify-items-start mr-4 sm:m-0">
          <h3 className="font-bold text-[#031F31] mt-2 ">Dr. Muhammad Usman</h3>
          <div className=" text-start ">
            <p className="text-sm text-gray-600 mr-0">
              PHD Electrical Engineering
            </p>
            <p className="text-xs text-gray-500">Unknown University France</p>
          </div>
        </div>
      </div>

      <div className="border-t p-4 grid grid-cols-5 text-center text-gray-700">
        <NavLink
          to="/courses/assignment"
          className="flex flex-col items-center"
        >
          <span className="text-2xl">
            <FaBookReader color="#031F31" size={34} />
          </span>
          <span className="text-xs">Assignments</span>
        </NavLink>

        <NavLink to="/courses/marks" className="flex flex-col items-center">
          <span className="text-2xl">
            <BsFileEarmarkSpreadsheetFill color="#031F31" size={34} />
          </span>
          <span className="text-xs">Marks</span>
        </NavLink>
        <NavLink to="/courses/marks" className="flex flex-col items-center">
          <span className="text-2xl">
            <MdOutlineChat color="#031F31" size={34} />
          </span>
          <span className="text-xs">Exam</span>
        </NavLink>
        <NavLink to="/courses/marks" className="flex flex-col items-center">
          <span className="text-2xl">
            <FaVideo color="#031F31" size={34} />
          </span>
          <span className="text-xs">Lectures</span>
        </NavLink>
        <NavLink to="/courses/marks" className="flex flex-col items-center">
          <span className="text-2xl">
            <IoMdNotifications color="#031F31" size={34} />
          </span>
          <span className="text-xs">Info</span>
        </NavLink>
      </div>
    </div>
  );
};
export default CourseCard;
