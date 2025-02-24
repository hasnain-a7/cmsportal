const ShortAttandance = () => {
  const attendanceData = [
    { course: "Web Development", percentage: 95 },
    { course: "Data Structures", percentage: 72 },
    { course: "Linear Algebra", percentage: 60 },
    { course: "Holy Quran", percentage: 60 },
  ];
  const lowAttendanceCourses = attendanceData.filter(
    (course) => course.percentage < 75
  );
  return (
    <div className="w-full h-auto bg-[#FFFFFF] rounded-sm p-2 mx-auto relative">
      <h2 className="text-xl font-bold text-red-600">Attendance Warning</h2>
      <p className="text-sm text-gray-700 mt-1">
        The following courses have attendance below 75%:
      </p>
      <ul className="list-disc list-inside mt-2">
        {lowAttendanceCourses.map((course, index) => (
          <li key={index} className="text-[#031F31]">
            {course.course} - {course.percentage}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShortAttandance;
