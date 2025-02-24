import StudentProfileCard from "../Components/OtherComponents/StudentProfileCard";
import Notification from "../Components/OtherComponents/Notification";
import { FiAlertCircle } from "react-icons/fi";
import TodaytimeTable from "../Components/OtherComponents/TodaytimeTable";
import ShortAttandance from "../Components/OtherComponents/ShortAttandance";
import CurrentCgpa from "../Components/OtherComponents/CurrentCgpa";

const Dashboard = () => {
  return (
    <div className="bg-[#F3F4F6] text-white flex flex-col min-h-screen p-4">
      {/* Alert Section */}
      <div
        className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-md flex items-center shadow-sm"
        role="alert"
      >
        <FiAlertCircle className="mr-3" size={30} />
        <p className="text-sm md:text-base">
          Your tuition fee payment is due! Please make the payment to avoid
          penalties.
        </p>
      </div>

      {/* Profile and Notification Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {/* Student Profile */}
        <div className=" w-full flex items-center justify-center  h-auto bg-white rounded-sm shadow-md">
          <StudentProfileCard />
        </div>

        {/* Attendance & CGPA */}
        <div className="w-full h-auto bg-white border-t-4 p-2 border-[#3CBEA9] rounded-sm shadow-md space-y-4">
          <ShortAttandance />
          <CurrentCgpa />
        </div>

        {/* Notifications */}
        <div className="flex items-center justify-center  h-auto bg-white rounded-sm shadow-md">
          <Notification />
        </div>

        {/* Today's Timetable */}
        <div className="flex items-center justify-center  h-auto col-span-1 md:col-span-2 lg:col-span-1 bg-white rounded-sm shadow-md">
          <TodaytimeTable />
        </div>

        {/* Additional Section */}
        <div className="bg-blue-700 flex items-center justify-center  h-auto col-span-1 md:col-span-2 lg:col-span-1 rounded-sm shadow-md">
          {/* Content Here */}
          <p className="text-white">Additional Content</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
