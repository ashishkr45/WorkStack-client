import React, { useState } from "react";
import { MoveLeft } from 'lucide-react';
import img from "../assets/image.png"
import { useNavigate } from "react-router-dom";

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  return (
      <div
        className="
          min-h-screen
		  h-fit
          rounded-3xl
          bg-white
          bg-[radial-gradient(#e5e7eb_2px,transparent_2px)]
          bg-size-[16px_16px]
          flex items-center justify-center
        "
      >
        <div id="CurrSetion" className="w-fit max-w-5xl bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden grid md:grid-cols-2">
          <div className="hidden md:flex flex-col justify-center items-center bg-gray-50 p-12 text-center">
            <img className="rounded-xl" src={img} alt="cool img" />
          </div>
          {/* RIGHT PANEL (FORM) */}
          <div className="p-10 flex flex-col justify-center">
            <div className="flex justify-between items-center">
				<h1 className="text-2xl font-semibold text-gray-900 mb-2">
				{isLogin ? "Sign In" : "Create Account"}
				</h1>
				<MoveLeft className="cursor-pointer hover:text-blue-500 hover:scale-110 transition duration-200" onClick={() => navigate("/")}/>
			</div>

            <p className="text-sm text-gray-500 mb-8">
              {isLogin
                ? "Enter your credentials to continue."
                : "Fill in the details to get started."}
            </p>

            <form className="space-y-5">

              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
                  />
                </div>
              )}

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
                {isLogin ? "Sign In" : "Create Account"}
              </button>
            </form>

            <p className="mt-6 text-sm text-gray-500 text-center">
              {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="cursor-pointer text-black font-medium"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>
        </div>
      </div>
  );
};

export default AuthPage;
