import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthContext/auth";

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const { login, user } = useContext(AuthContext);

  const submit = (data) => {
    console.log(data.rollNo);
    login(data.rollNo, data.password);
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen w-full bg-[#031F31]  flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full flex flex-col items-center">
        <img src="/public/logo2.png" alt="" width={100} />
        {/* Login Card */}
        <div className="bg-transperant rounded-lg shadow-lg w-full max-w-md p-6 z-10">
          <p className="text-white text-center mb-6">Sign In to your account</p>

          <form onSubmit={handleSubmit(submit)} className="space-y-4">
            <div>
              <div className="flex items-center border rounded-lg bg-white focus-within:ring focus-within:ring-blue-300 transition">
                <div className="pl-3 pr-2 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#031F31]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Roll Number"
                  {...register("rollNo", { required: true })}
                  className="w-full px-2 py-3 outline-none bg-transparent text-[#031F31] placeholder-[#031F31]"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center border rounded-lg bg-white focus-within:ring focus-within:ring-blue-300 transition">
                <div className="pl-3 pr-2 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#031F31]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", { required: true })}
                  className="w-full px-2 py-3 outline-none bg-transparent text-[#031F31] font-normal placeholder-[#031F31] "
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#3CBEA9]   text-white py-3 rounded-lg transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
