const CurrentCgpa = () => {
  return (
    <div className="w-full  bg-white rounded-sm  mx-auto p-2 ">
      <div className="flex justify-between items-center  bg-white p-2">
        <div>
          <h2 className="text-xl font-bold text-gray-800">CGPA</h2>
          <p className="text-4xl font-extrabold text-green-600">3.75</p>
          <p className="text-sm text-gray-500">Current CGPA</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-semibold text-yellow-500">4.00</p>
          <p className="text-sm text-gray-500">Required Next Semester</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentCgpa;
