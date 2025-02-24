const MobileGrade = () => {
  // Default course data if none provided
  const defaultCourse = [
    {
      courseCode: "CS401",
      courseName: "Advanced Programming",
      term: "Spring 2025",
      instructor: "Dr. John Smith",
      creditHours: 4,
      letterGrade: "A",
      numericalGrade: 92.3,
      gradePoints: 16.0,
      progress: 92,
    },
    {
      courseCode: "MTH301",
      courseName: "Linear Algebra",
      term: "Spring 2025",
      instructor: "Dr. Emily Johnson",
      creditHours: 3,
      letterGrade: "B+",
      numericalGrade: 87.8,
      gradePoints: 10.5,
      progress: 87,
    },
    {
      courseCode: "PHY201",
      courseName: "Modern Physics",
      term: "Spring 2025",
      instructor: "Dr. Robert Chen",
      creditHours: 4,
      letterGrade: "C",
      numericalGrade: 74.5,
      gradePoints: 8.0,
      progress: 74,
    },
    {
      courseCode: "ENG303",
      courseName: "Technical Writing",
      term: "Spring 2025",
      instructor: "Prof. Sarah Williams",
      creditHours: 3,
      letterGrade: "A-",
      numericalGrade: 90.1,
      gradePoints: 11.1,
      progress: 90,
    },
    {
      courseCode: "BUS220",
      courseName: "Business Economics",
      term: "Spring 2025",
      instructor: "Dr. Michael Brown",
      creditHours: 3,
      letterGrade: "B",
      numericalGrade: 83.2,
      gradePoints: 9.0,
      progress: 83,
    },
  ];

  // Use provided course or default

  // Get appropriate color for the grade badge
  const getGradeColor = (grade) => {
    if (grade === "A" || grade === "A-") return "bg-green-100 text-green-600";
    if (grade === "B+" || grade === "B" || grade === "B-")
      return "bg-blue-100 text-blue-500";
    if (grade === "C+" || grade === "C" || grade === "C-")
      return "bg-yellow-100 text-yellow-700";
    if (grade === "D+" || grade === "D" || grade === "D-")
      return "bg-orange-100 text-orange-600";
    return "bg-red-100 text-red-600";
  };

  // Get appropriate color for the progress bar
  const getProgressColor = (percentage) => {
    if (percentage >= 90) return "bg-green-500";
    if (percentage >= 80) return "bg-blue-500";
    if (percentage >= 70) return "bg-yellow-500";
    if (percentage >= 60) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <div>
      {defaultCourse.map((course, index) => (
        <div
          key={index}
          className="bg-white border border-gray-300 rounded shadow-sm p-4 text-gray-800 mb-4"
        >
          <div className="flex justify-between items-start mb-3">
            <div>
              <div className="font-bold text-blue-600">{course.courseCode}</div>
              <div className="text-base">{course.courseName}</div>
              <div className="text-sm text-gray-500">{course.term}</div>
            </div>
            <div
              className={`inline-block px-3 py-1 rounded-full ${getGradeColor(
                course.letterGrade
              )} font-bold text-sm min-w-[45px] text-center`}
            >
              {course.letterGrade}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div>
              <div className="text-xs text-gray-500">Instructor</div>
              <div>{course.instructor}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Credit Hours</div>
              <div>{course.creditHours}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Numerical Grade</div>
              <div>{course.numericalGrade}%</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Grade Points</div>
              <div>
                {`${(course.gradePoints / course.creditHours).toFixed(1)} × ${
                  course.creditHours
                } = ${course.gradePoints.toFixed(1)}`}
              </div>
            </div>
          </div>
          <div>
            <div className="text-xs text-gray-500 mb-1">Progress</div>
            <div className="h-2 w-full bg-gray-200 rounded overflow-hidden">
              <div
                className={`h-full ${getProgressColor(
                  course.progress
                )} rounded`}
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileGrade;
