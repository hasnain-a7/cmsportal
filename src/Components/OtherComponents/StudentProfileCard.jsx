const StudentProfileCard = () => {
  return (
    <div className="w-full h-auto bg-[#FFFFFF] border-[#3CBEA9] border-t-4 rounded-sm drop-shadow-lg p-3 sm:p-2 mx-auto relative">
      {/* Active Status Label */}
      <span className="absolute top-3 right-3 text-xs font-semibold text-[#3CBEA9] bg-green-100 px-3 py-1 rounded-full">
        Active
      </span>

      {/* Profile Section */}
      <div className="flex flex-col items-center text-center pb-6 ">
        {/* Profile Picture */}
        <div className="w-full flex justify-center items-center mb-6 mt-12 ">
          <img
            className="w-24 h-24 rounded-full shadow-lg border-2 border-gray-300"
            src="https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-of-portugal-reacts-as-he-looks-on-during-news-photo-1725633476.jpg?crop=0.666xw:1.00xh;0.180xw,0&resize=640:*"
            alt="Student Profile"
          />
        </div>

        {/* Info Box */}
        <div className="w-full flex flex-col gap-2 justify-center items-center">
          {/* Name and Basic Info */}
          <h5 className="mb-2 text-2xl font-semibold text-[#031F31]">
            Cris Ronaldo
          </h5>
          <div className="text-sm text-[#031F31] ">
            <span className="font-semibold text-start text-gray-700">
              Fathers Name:{" "}
            </span>{" "}
            John Green
          </div>
          <div className="text-sm text-[#031F31] mb-10">
            <span className="font-semibold text-start text-gray-700">
              Roll Number:{" "}
            </span>{" "}
            7
          </div>

          {/* Program and Shift Information */}
          <div className="flex flex-col sm:flex-col gap-4 w-full justify-center items-center border-t-1 border-black ">
            <div className="text-sm text-[#031F31] flex items-center mt-8">
              <span className="font-semibold text-gray-700 mr-1">Program:</span>
              BSc Computer Science
            </div>
            <div className="text-sm text-[#031F31] flex items-center">
              <span className="font-semibold text-gray-700 mr-1">Shift:</span>
              Evening
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfileCard;
