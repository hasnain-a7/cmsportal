import StudentProfileCard from "../Components/OtherComponents/StudentProfileCard";
import Notification from "../Components/OtherComponents/Notification";

const Dashboard = () => {
  return (
    <div className="bg-[#f0f2f3] text-white flex flex-col min-h-screen">
      {/* Profile and Notification Section */}

      <div className="flex flex-col p-4 gap-2 lg:flex-row w-full flex-1 sm:flex-4">
        {" "}
        {/* Corrected */}
        <div className="w-full lg:w-2/5 sm:w-1/2 flex items-center justify-center p-1 h-[75vh]">
          <StudentProfileCard />
        </div>
        <div className="w-full lg:w-2/5 sm:w-1/2 flex items-center justify-center p-1 h-[75vh]">
          {/* Content Here */}
        </div>
        <div className="w-full lg:w-2/5 sm:w-1/2 flex items-center justify-center p-1 h-[75vh]">
          {/* Content Here */}
          <Notification />
        </div>
      </div>

      {/* Additional Sections */}
      <div className="w-full flex-1 bg-blue-300 flex items-center justify-center p-4 mt-2">
        {/* Content Here */}
      </div>

      <div className="w-full flex-1 bg-blue-500 flex items-center justify-center p-4 mt-2">
        {/* Content Here */}
      </div>

      <div className="w-full flex-1 bg-blue-700 flex items-center justify-center p-4 mt-2">
        {/* Content Here */}
      </div>
    </div>
  );
};

export default Dashboard;
