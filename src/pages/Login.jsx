// import React from 'react'
import { Link } from "react-router-dom";
import employee from "../assets/employeee.jpg";
import logo from "../assets/logo.png";

const Login = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        {/* Left hand side */}
        <div className="w-1/2 relative">
          <img
            src={employee}
            alt="employee"
            className="h-screen w-full object-cover"
          />
          <div className="absolute inset-0 bg-lime-400/35"></div>
        </div>
        {/* Right hand side */}
        <div className="w-1/2 flex flex-col items-center ">
          <div className="w-1/2">
            <div className="flex justify-center mb-6">
              <img src={logo} alt="logo" className="w-20 h-20" />
            </div>
            <p className="text-center font-bold text-2xl text-green-900">
              Welcome back to EPMS
            </p>
            <p className="text-gray-500 italic text-center pb-4 text-sm">
              Access Employees' profile swiftly and effortlessly.
            </p>
            <p className="text-center pb-8 text-gray-500">
              Kindly login to access employees' details.
            </p>
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
            <div className="flex justify-between pt-2">
              <div>
                <input type="checkbox" />
                Remember me
              </div>
              <p className="text-gray-500 text-center pb-4">Forgot password?</p>
            </div>
            <button className="text-green-200 px-3 py-2 my-6 w-full bg-green-900 rounded-lg cursor-pointer hover:bg-green-700">
              Log in
            </button>
            <p className="text-gray-500 text-center">
              Don't have an account?{" "}
              <Link to="/signup" className="text-green-900 font-bold">
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
