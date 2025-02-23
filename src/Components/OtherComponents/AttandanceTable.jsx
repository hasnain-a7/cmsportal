// For displaying in a React component (like your original code):

const StudentsTable = () => {
  const students = [
    {
      name: "Dsa",
      rollNumber: "101",
      class: "10",
      subject: "Mathematics",
      marks: "85",
    },
    {
      name: "Manohar Batra",
      rollNumber: "102",
      class: "10",
      subject: "Science",
      marks: "88",
    },
    {
      name: "Saurabh Puri",
      rollNumber: "103",
      class: "10",
      subject: "History",
      marks: "92",
    },
    {
      name: "Yuvraj Ghule",
      rollNumber: "104",
      class: "10",
      subject: "Marathi",
      marks: "78",
    },
  ];

  const transformedStudents = students.map((student) => {
    //Same transformation logic as above
    return {
      courseName: student.subject,
      delivered: true,
      absent: false,
      percentage: parseFloat(student.marks),
    };
  });

  return (
    <div className="container mx-auto p-4">
      <table className="w-full table-auto custom-table">
        <thead>
          <tr className="bg-[#3CBEA9] border border-black text-white">
            <th className="p-2 border">Course Name</th>
            <th className="p-2 border">Delivered</th>
            <th className="p-2 border">Absent</th>
            <th className="p-2 border">Percentage</th>
          </tr>
        </thead>
        <tbody>
          {transformedStudents.map((student, index) => (
            <tr key={index} className="bg-[#FFFFFF] text-[#031F31]">
              <td className="p-2 border" data-label="Course Name">
                {student.courseName}
              </td>
              <td className="p-2 border" data-label="Delivered">
                {student.delivered ? "Yes" : "No"} {/* Display Yes/No */}
              </td>
              <td className="p-2 border" data-label="Absent">
                {student.absent ? "Yes" : "No"} {/* Display Yes/No */}
              </td>
              <td className="p-2 border" data-label="Percentage">
                {student.percentage}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsTable;
