// // import React from "react";
// import logo from "../assets/logo.png";

// const Navbar = () => {
//   return (
//     <nav className="bg-green-200 text-green-900">
//       <div className="flex justify-between p-4 items-center px-30">
//         <div>
//           <img src={logo} alt="logo" className="w-15 h-15 rounded-full" />
//         </div>
//         <ul className="flex gap-18">
//           <li>Home</li>
//           <li>About</li>
//           <li>Features</li>
//           <li>Options</li>
//         </ul>
//         <div className="">
//           <p>Hello user</p>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import {
  Home,
  Users,
  LayoutDashboard,
  Settings,
  Bell,
  ChevronDown,
} from "lucide-react";

import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-green-100 shadow-sm sticky top-0 z-50">
      {" "}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {" "}
        <div className="h-20 flex items-center justify-between">
          {" "}
          {/* Logo */}{" "}
          <div className="flex items-center gap-3">
            {" "}
            <img
              src={logo}
              alt="EPMS Logo"
              className="w-12 h-12 rounded-xl object-cover shadow-sm"
            />{" "}
            <div>
              {" "}
              <h1 className="text-xl font-bold text-green-900 tracking-tight">
                {" "}
                EPMS{" "}
              </h1>{" "}
              <p className="text-xs text-green-600">
                {" "}
                Employee Management{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          {/* Navigation */}{" "}
          <ul className="hidden md:flex items-center gap-2">
            {" "}
            {/* Dashboard */}{" "}
            <li>
              {" "}
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-200 ${isActive ? "bg-green-100 text-green-800 font-semibold" : "text-gray-600 hover:bg-green-50 hover:text-green-800"}`
                }
              >
                {" "}
                <LayoutDashboard size={18} /> Dashboard{" "}
              </NavLink>{" "}
            </li>{" "}
            {/* Employees */}{" "}
            <li>
              {" "}
              <NavLink
                to="/employees"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-200 ${isActive ? "bg-green-100 text-green-800 font-semibold" : "text-gray-600 hover:bg-green-50 hover:text-green-800"}`
                }
              >
                {" "}
                <Users size={18} /> Employees{" "}
              </NavLink>{" "}
            </li>{" "}
            {/* About */}{" "}
            <li>
              {" "}
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-200 ${isActive ? "bg-green-100 text-green-800 font-semibold" : "text-gray-600 hover:bg-green-50 hover:text-green-800"}`
                }
              >
                {" "}
                <Home size={18} /> About{" "}
              </NavLink>{" "}
            </li>{" "}
            {/* Features */}{" "}
            <li>
              {" "}
              <NavLink
                to="/features"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-200 ${isActive ? "bg-green-100 text-green-800 font-semibold" : "text-gray-600 hover:bg-green-50 hover:text-green-800"}`
                }
              >
                {" "}
                <Settings size={18} /> Features{" "}
              </NavLink>{" "}
            </li>{" "}
          </ul>{" "}
          {/* Right section */}{" "}
          <div className="flex items-center gap-5">
            {" "}
            {/* Notification */}{" "}
            <button className="relative p-2.5 rounded-full text-gray-600 hover:bg-green-50 hover:text-green-700 transition">
              {" "}
              <Bell size={21} />{" "}
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>{" "}
            </button>{" "}
            {/* User */}{" "}
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200 cursor-pointer">
              {" "}
              <div className="w-10 h-10 rounded-full bg-green-700 text-white flex items-center justify-center font-semibold">
                {" "}
                JD{" "}
              </div>{" "}
              <div className="hidden lg:block">
                {" "}
                <p className="text-sm font-semibold text-gray-800">
                  {" "}
                  John Doe{" "}
                </p>{" "}
                <p className="text-xs text-gray-500"> Administrator </p>{" "}
              </div>{" "}
              <ChevronDown size={17} className="text-gray-500" />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </nav>
  );
};

export default Navbar;
