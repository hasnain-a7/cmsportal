import Login from "../Components/OtherComponents/Login";

const LoginPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen transition-all w-full">
      {/* Mini bar at top */}
      <div className="absolute top-0 w-full bg-gray-200 text-center text-sm text-gray-700 py-2 shadow-sm">
        Roll No: <span className="font-semibold">E29</span> &nbsp; | &nbsp;
        Password: <span className="font-semibold">Hasnain</span>
      </div>

      <Login />
    </div>
  );
};

export default LoginPage;
