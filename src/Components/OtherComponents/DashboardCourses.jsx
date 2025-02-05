import { FaRegClock } from "react-icons/fa";

const DashboardCourses = () => {
  return (
    <div className="w-full h-[73vh] bg-[#eaf1f1] rounded-sm drop-shadow-lg sm:p-2 mx-auto">
      <div className="bg-[#3CBEA9] text-white font-bold p-2 mb-2">
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-4 flex items-center gap-4 border">
          {/* Course Image */}
          <div className="w-20 h-20 flex-shrink-0">
            <img
              className="w-full h-full object-cover rounded-md"
              src="https://via.placeholder.com/80" // Replace with actual course image
              alt="Course"
            />
          </div>

          {/* Course Details */}
          <div className="flex-1">
            <p className="text-sm text-blue-500 font-semibold">
              UX Design • By Richardino Gueva
            </p>
            <h3 className="font-bold text-gray-900 text-lg">
              Getting Started with Wireframing
            </h3>

            {/* Course Date & Time */}
            <div className="flex items-center text-gray-500 text-sm mt-1">
              <FaRegClock className="mr-1" />
              <p>Dec 16, 2022 • 09:00 - 12:00</p>
            </div>
          </div>

          {/* Join Button */}
          <button className="bg-green-500 text-white px-4 py-2 text-sm rounded-md hover:bg-green-600">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardCourses;
