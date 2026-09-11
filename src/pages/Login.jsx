// import React from 'react'
import { Link } from "react-router-dom";
import employee from "../assets/employeee.jpg";
import logo from "../assets/logo.png";

const Login = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-green-200">
        {/* Left hand side */}
        <div className="hidden md:block md:w-1/2 relative">
          <img
            src={employee}
            alt="employee"
            className="h-screen w-full object-cover"
          />
          <div className="absolute inset-0 bg-lime-400/35"></div>
        </div>
        {/* Right hand side */}
        <div className="w-full md:w-1/2 flex flex-col items-center ">
          <div className="w-3/4">
            <div className="flex justify-center mb-6">
              <img src={logo} alt="logo" className="w-20 h-20 rounded-full" />
            </div>
            <p className="text-center font-bold text-2xl md:text-3xl text-green-900">
              Welcome back to EPMS
            </p>
            <p className="text-gray-500 italic text-center pb-4 text-[12px] md:text-[14px]">
              Access Employees' profile swiftly and effortlessly.
            </p>
            <p className="text-center pb-8 text-gray-500 text-sm md:text-base">
              Kindly login to access employees' details.
            </p>
            <form action="" className="text-sm md:text-base">
              <div>
                <p className="text-gray-500">Email Address</p>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-3 py-2 my-2 w-full bg-green-100 rounded-lg"
                />
              </div>
              <div>
                <p className="text-gray-500">Password</p>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="px-3 py-2 my-2 w-full bg-green-100 rounded-lg"
                />
              </div>
              <div className="flex justify-between items-center pt-2">
                {/* <div>
                <input type="checkbox" className="inline" />
                <p>Remember me</p>
              </div> */}
                <div>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4" />
                    Remember me
                  </label>
                </div>

                <Link className="text-gray-500 text-center hover:text-green-500">
                  Forgot Password
                </Link>
              </div>
              <button
                type="submit"
                className="text-green-200 px-3 py-2 my-6 w-full bg-green-900 rounded-lg cursor-pointer hover:bg-green-700"
              >
                <Link to="/home">Log in</Link>
              </button>
            </form>

            <p className="text-gray-500 text-center text-sm md:text-base">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-green-900 font-bold hover:text-green-500"
              >
                Register now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
