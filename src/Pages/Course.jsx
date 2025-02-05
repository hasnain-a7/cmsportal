import CourseCard from "../Components/OtherComponents/CourseCard";

const Course = () => {
  return (
    <div className=" text-white  min-h-screen">
      <div className=" h-14 flex items-center pl-23  font-bold text-2xl text-[#031F31]">
        <h1>Enrolled Courses</h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-[#EAF1F1] rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </div>
  );
};

export default Course;
