import StudentGradesDashboard from "../Components/OtherComponents/StudentGrade";
import MobileGrade from "../Components/OtherComponents/MobileGrade";
const GradeBook = () => {
  return (
    <div className="bg-[#F3F4F6] text-white flex flex-col min-h-screen p-4">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white border border-gray-300 rounded p-5 mb-5 shadow-sm flex flex-col md:flex-row justify-between items-center gap-5 text-gray-800">
          <div className="flex flex-col md:flex-row items-center gap-8 w-full">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">3.76</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">
                Cumulative GPA
              </div>
            </div>
            <div className="flex gap-8 w-full md:border-l border-gray-300 md:pl-8 pt-5 md:pt-0 border-t md:border-t-0">
              <div className="text-center flex-1">
                <div className="text-2xl font-bold text-blue-500">3.85</div>
                <div className="text-xs text-gray-500">Current Semester</div>
              </div>
              <div className="text-center flex-1">
                <div className="text-2xl font-bold text-blue-500">96</div>
                <div className="text-xs text-gray-500">Credit Hours Earned</div>
              </div>
              <div className="text-center flex-1">
                <div className="text-2xl font-bold text-blue-500">120</div>
                <div className="text-xs text-gray-500">
                  Credit Hours Required
                </div>
              </div>
            </div>
          </div>
          <div className="text-green-500 text-sm flex items-center gap-1">
            <span>▲ 0.12</span>
            <span>from last semester</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-5">
          <div className="bg-white border border-gray-300 border-t-4 border-t-blue-600 rounded p-4 shadow-sm text-gray-800">
            <div className="text-sm text-gray-500 mb-1">Current Semester</div>
            <div className="text-2xl font-bold text-blue-600">Spring 2025</div>
          </div>
          <div className="bg-white border border-gray-300 border-t-4 border-t-blue-500 rounded p-4 shadow-sm text-gray-800">
            <div className="text-sm text-gray-500 mb-1">Semester Credits</div>
            <div className="text-2xl font-bold text-blue-600">17</div>
          </div>
          <div className="bg-white border border-gray-300 border-t-4 border-t-green-500 rounded p-4 shadow-sm text-gray-800">
            <div className="text-sm text-gray-500 mb-1">Degree Progress</div>
            <div className="text-2xl font-bold text-blue-600">80%</div>
          </div>
          <div className="bg-white border border-gray-300 border-t-4 border-t-yellow-500 rounded p-4 shadow-sm text-gray-800">
            <div className="text-sm text-gray-500 mb-1">Courses Complete</div>
            <div className="text-2xl font-bold text-blue-600">32/40</div>
          </div>
          <div className="bg-white border border-gray-300 border-t-4 border-t-red-500 rounded p-4 shadow-sm text-gray-800">
            <div className="text-sm text-gray-500 mb-1">Academic Standing</div>
            <div className="text-2xl font-bold text-blue-600">Good</div>
          </div>
        </div>

        <div className="mb-5">
          <div className="hidden md:block bg-white border border-gray-300 rounded shadow-sm overflow-hidden text-gray-800">
            <StudentGradesDashboard />
          </div>

          <div className="md:hidden space-y-4">
            <MobileGrade />
          </div>

          <div className="text-center my-3">
            <button className="bg-white border border-gray-300 rounded px-4 py-2 text-sm text-gray-900 hover:bg-gray-50">
              Load Previous Semesters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradeBook;
