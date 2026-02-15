import React from "react";
import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import img from "../assets/image.png";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className="
        min-h-screen
        bg-white
        bg-[radial-gradient(#e5e7eb_2px,transparent_2px)]
        bg-size-[16px_16px]
        flex items-center justify-center
        p-4
      "
    >
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden grid md:grid-cols-2">

        {/* LEFT PANEL */}
        <div className="hidden md:flex items-center justify-center bg-gray-50 p-12">
          <img className="rounded-xl" src={img} alt="visual" />
        </div>

        {/* RIGHT PANEL */}
        <div className="p-10 flex flex-col justify-center">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">
              Sign In
            </h1>
            <MoveLeft
              className="cursor-pointer hover:text-blue-500 hover:scale-110 transition duration-200"
              onClick={() => navigate("/")}
            />
          </div>

          <p className="text-sm text-gray-500 mt-2 mb-8">
            Enter your credentials to continue.
          </p>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2.5 rounded-lg hover:opacity-90 transition font-medium"
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-500 text-center">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="cursor-pointer text-black font-medium"
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
