import { useState } from "react";

const StudentGradesDashboard = () => {
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setDirection] = useState("asc");

  const initialGrades = [
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

  const [grades, setGrades] = useState(initialGrades);

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

  const getProgressColor = (percentage) => {
    if (percentage >= 90) return "bg-green-500";
    if (percentage >= 80) return "bg-blue-500";
    if (percentage >= 70) return "bg-yellow-500";
    if (percentage >= 60) return "bg-orange-500";
    return "bg-red-500";
  };

  const sortData = (field) => {
    const newDirection =
      sortField === field && sortDirection === "asc" ? "desc" : "asc";

    setDirection(newDirection);
    setSortField(field);

    const sortedGrades = [...grades].sort((a, b) => {
      if (newDirection === "asc") {
        return a[field] > b[field] ? 1 : -1;
      } else {
        return a[field] < b[field] ? 1 : -1;
      }
    });

    setGrades(sortedGrades);
  };

  const getSortIndicator = (field) => {
    if (sortField !== field) return "";
    return sortDirection === "asc" ? " ↑" : " ↓";
  };

  // Calculate GPA
  const totalCreditHours = grades.reduce(
    (sum, course) => sum + course.creditHours,
    0
  );
  const totalGradePoints = grades.reduce(
    (sum, course) => sum + course.gradePoints,
    0
  );
  const gpa =
    totalCreditHours > 0
      ? (totalGradePoints / totalCreditHours).toFixed(2)
      : "N/A";

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Spring 2025 Grades</h1>
        <div className="bg-blue-50 p-3 rounded-lg shadow-sm">
          <span className="font-bold">Current GPA: </span>
          <span className="text-xl font-bold text-blue-600">{gpa}</span>
        </div>
      </div>

      <div className="bg-white border border-gray-300 rounded shadow-sm overflow-hidden text-gray-800">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100 border-b-2 border-gray-200">
                <th
                  className="py-3 px-4 text-left font-bold cursor-pointer hover:bg-gray-200"
                  onClick={() => sortData("courseCode")}
                >
                  Course{getSortIndicator("courseCode")}
                </th>
                <th className="py-3 px-4 text-left font-bold">Instructor</th>
                <th
                  className="py-3 px-4 text-left font-bold cursor-pointer hover:bg-gray-200"
                  onClick={() => sortData("creditHours")}
                >
                  Credit Hours{getSortIndicator("creditHours")}
                </th>
                <th
                  className="py-3 px-4 text-left font-bold cursor-pointer hover:bg-gray-200"
                  onClick={() => sortData("letterGrade")}
                >
                  Letter Grade{getSortIndicator("letterGrade")}
                </th>
                <th
                  className="py-3 px-4 text-left font-bold cursor-pointer hover:bg-gray-200"
                  onClick={() => sortData("numericalGrade")}
                >
                  Numerical Grade{getSortIndicator("numericalGrade")}
                </th>
                <th
                  className="py-3 px-4 text-left font-bold cursor-pointer hover:bg-gray-200"
                  onClick={() => sortData("gradePoints")}
                >
                  Grade Points{getSortIndicator("gradePoints")}
                </th>
                <th className="py-3 px-4 text-left font-bold">Progress</th>
              </tr>
            </thead>
            <tbody>
              {grades.map((course, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 border-b border-gray-300"
                >
                  <td className="py-3 px-4">
                    <div className="font-bold text-blue-600">
                      {course.courseCode}
                    </div>
                    <div className="text-base">{course.courseName}</div>
                    <div className="text-sm text-gray-500">{course.term}</div>
                  </td>
                  <td className="py-3 px-4">{course.instructor}</td>
                  <td className="py-3 px-4">{course.creditHours}</td>
                  <td className="py-3 px-4 text-center">
                    <div
                      className={`inline-block px-3 py-1 rounded-full ${getGradeColor(
                        course.letterGrade
                      )} font-bold text-sm min-w-[45px] text-center`}
                    >
                      {course.letterGrade}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    {course.numericalGrade}%
                  </td>
                  <td className="py-3 px-4 text-center">
                    {course.gradePoints}
                  </td>
                  <td className="py-3 px-4">
                    <div className="h-2 w-full bg-gray-200 rounded overflow-hidden">
                      <div
                        className={`h-full ${getProgressColor(
                          course.progress
                        )} rounded`}
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded text-sm text-gray-600">
        <p>Click on column headers to sort the table.</p>
      </div>
    </div>
  );
};

export default StudentGradesDashboard;
