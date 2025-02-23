const TodaytimeTable = () => {
  const timetable = {
    Monday: [
      {
        time: "12:00 - 1:00",
        course: "Seerat of Holy Prophet",
        instructor: "Mr. Ghulam Nabi",
      },
      {
        time: "1:00 - 2:00",
        course: "Quantitative Reasoning-II",
        instructor: "Ms. Iqra Nayab",
      },
      {
        time: "2:00 - 3:00",
        course: "Data Structure & Algorithm",
        instructor: "Mr. Hasan Iftikhar",
      },
      {
        time: "4:00 - 5:00",
        course: "Computer Organization",
        instructor: "Mr. Noor Uz Zaman",
      },
    ],
    Tuesday: [
      {
        time: "12:00 - 1:00",
        course: "Entrepreneurship",
        instructor: "Ms. Mehvish Boota",
      },
      {
        time: "1:00 - 2:00",
        course: "Islamic Studies",
        instructor: "Dr. Abdul Waheed",
      },
      {
        time: "2:00 - 3:00",
        course: "Data Structure & Algorithm",
        instructor: "Mr. Usman",
      },
    ],
    Wednesday: [
      {
        time: "12:00 - 1:00",
        course: "Computer Organization",
        instructor: "Mr. Noor Uz Zaman",
      },
      {
        time: "1:00 - 2:00",
        course: "Elementary Linear Algebra",
        instructor: "Mr. Bilal Khan",
      },
      {
        time: "2:00 - 3:00",
        course: "Theory of Automata",
        instructor: "Mr. Rauf Khan",
      },
      {
        time: "4:00 - 5:00",
        course: "Quantitative Reasoning-II",
        instructor: "Ms. Iqra Nayab",
      },
    ],
    Thursday: [
      {
        time: "12:00 - 1:00",
        course: "Entrepreneurship",
        instructor: "Ms. Mehvish Boota",
      },
      {
        time: "1:00 - 2:00",
        course: "Elementary Linear Algebra",
        instructor: "Mr. Bilal Khan",
      },
      {
        time: "2:00 - 3:00",
        course: "Data Structure & Algorithm",
        instructor: "Mr. Usman",
      },
      {
        time: "3:00 - 4:00",
        course: "Islamic Studies",
        instructor: "Dr. Abdul Waheed",
      },
    ],
    Friday: [
      {
        time: "12:00 - 1:00",
        course: "Elementary Linear Algebra",
        instructor: "Mr. Bilal Khan",
      },
      {
        time: "1:00 - 2:00",
        course: "Translation of Holy Quran-III",
        instructor: "Hafiz Amanat Ali",
      },
      {
        time: "2:00 - 3:00",
        course: "Computer Organization",
        instructor: "Mr. Noor Uz Zaman",
      },
    ],
  };
  const today = "Friday";
  const todaySchedule = timetable[today] || [];
  return (
    <div className="w-full  h-auto bg-[#FFFFFF] border-[#3CBEA9] border-t-4 rounded-sm drop-shadow-lg p-2 mx-auto relative">
      <h2 className="text-xl font-bold mb-2 text-[#031F31]">
        {today}-Schedule
      </h2>
      <table className="w-full  text-sm text-left border-collapse border text-[#031F31] border-[#031F31]">
        <thead>
          <tr>
            <th className="border items-center text-[#031F31] border-[#031F31] p-2">
              Time
            </th>
            <th className="border text-[#031F31] border-[#031F31] p-2">
              Course
            </th>
            <th className="border text-[#031F31] border-[#031F31] p-2">
              Instructor
            </th>
          </tr>
        </thead>
        <tbody>
          {todaySchedule.length > 0 ? (
            todaySchedule.map((session, index) => (
              <tr key={index}>
                <td className="border text-[#031F31] border-[#031F31] p-2">
                  {session.time}
                </td>
                <td className="border text-[#031F31] border-[#031F31] p-2">
                  {session.course}
                </td>
                <td className="border text-[#031F31] border-[#031F31] p-2">
                  {session.instructor}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                className="border text-[#031F31] border-[#031F31] p-2"
                colSpan="3"
              >
                No classes scheduled for today.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TodaytimeTable;
