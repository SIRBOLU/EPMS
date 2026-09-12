// import { useState } from "react";

// import {
//   Home,
//   Users,
//   Settings,
//   Bell,
//   ChevronDown,
//   Menu,
//   X,
// } from "lucide-react";

// import { NavLink, Link, useLocation } from "react-router-dom";
// import logo from "../assets/logo.png";

// const Navbar = () => {
//   const loggedInUser = JSON.parse(
//     localStorage.getItem("epmsLoggedInUser") || "null",
//   );

//   const firstName = loggedInUser?.firstName || "User";
//   const lastName = loggedInUser?.lastName || "";
//   const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
//   const location = useLocation();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [userMenuOpen, setUserMenuOpen] = useState(false);

//   const dashboardSection =
//     location.pathname === "/dashboard" ||
//     location.pathname === "/manage-employees" ||
//     location.pathname === "/addemployee" ||
//     location.pathname.endsWith("/edit");

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <nav className="bg-white border-b border-green-100 shadow-sm sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
//         {/* Main Navbar */}
//         <div className="h-20 flex items-center justify-between">
//           {/* Logo */}
//           <Link to="/home" className="flex items-center gap-3">
//             <img
//               src={logo}
//               alt="EPMS Logo"
//               className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl object-cover shadow-sm"
//             />

//             <div>
//               <h1 className="text-lg sm:text-xl font-bold text-green-900 tracking-tight">
//                 EPMS
//               </h1>

//               <p className="text-[10px] sm:text-xs text-green-600">
//                 Employee Management
//               </p>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <ul className="hidden md:flex items-center gap-2">
//             {/* Home */}
//             <li>
//               <NavLink
//                 to="/home"
//                 className={({ isActive }) =>
//                   `flex items-center gap-2 px-4 py-2.5 rounded-lg
//          transition-all duration-200 ${
//            isActive
//              ? "bg-green-100 text-green-800 font-semibold"
//              : "text-gray-600 hover:bg-green-50 hover:text-green-800"
//          }`
//                 }
//               >
//                 <Home size={18} />
//                 Home
//               </NavLink>
//             </li>

//             {/* Dashboard */}
//             <li>
//               <NavLink
//                 to="/dashboard"
//                 className={
//                   dashboardSection
//                     ? "flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-200 bg-green-100 text-green-800 font-semibold"
//                     : "flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-200 text-gray-600 hover:bg-green-50 hover:text-green-800"
//                 }
//               >
//                 Dashboard
//               </NavLink>
//             </li>

//             {/* Employees */}
//             <li>
//               <NavLink
//                 to="/employees"
//                 className={({ isActive }) =>
//                   `flex items-center gap-2 px-4 py-2.5 rounded-lg
//          transition-all duration-200 ${
//            isActive
//              ? "bg-green-100 text-green-800 font-semibold"
//              : "text-gray-600 hover:bg-green-50 hover:text-green-800"
//          }`
//                 }
//               >
//                 <Users size={18} />
//                 Employees
//               </NavLink>
//             </li>

//             {/* About */}
//             <li>
//               <NavLink
//                 to="/about"
//                 className={({ isActive }) =>
//                   `flex items-center gap-2 px-4 py-2.5 rounded-lg
//          transition-all duration-200 ${
//            isActive
//              ? "bg-green-100 text-green-800 font-semibold"
//              : "text-gray-600 hover:bg-green-50 hover:text-green-800"
//          }`
//                 }
//               >
//                 <Home size={18} />
//                 About
//               </NavLink>
//             </li>

//             {/* Features */}
//             <li>
//               <NavLink
//                 to="/features"
//                 className={({ isActive }) =>
//                   `flex items-center gap-2 px-4 py-2.5 rounded-lg
//          transition-all duration-200 ${
//            isActive
//              ? "bg-green-100 text-green-800 font-semibold"
//              : "text-gray-600 hover:bg-green-50 hover:text-green-800"
//          }`
//                 }
//               >
//                 <Settings size={18} />
//                 Features
//               </NavLink>
//             </li>
//           </ul>

//           {/* Right Section */}
//           <div className="flex items-center gap-2 sm:gap-4">
//             {/* Notification */}
//             <button
//               className="relative p-2 rounded-full text-gray-600
//                          hover:bg-green-50 hover:text-green-700 transition"
//             >
//               <Bell size={20} />

//               <span
//                 className="absolute top-1 right-1 w-2.5 h-2.5
//                            bg-red-500 rounded-full border-2 border-white"
//               ></span>
//             </button>
//             {/* Desktop User */}

//             <div className="relative hidden sm:flex items-center gap-3 pl-3 sm:pl-4 border-l border-gray-200">
//               {/* User Button */}
//               <button
//                 type="button"
//                 onClick={() => setUserMenuOpen(!userMenuOpen)}
//                 className="flex items-center gap-3 cursor-pointer"
//               >
//                 <div
//                   className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-green-700
//                  text-white flex items-center justify-center
//                  font-semibold"
//                 >
//                   {initials}
//                 </div>

//                 <div className="hidden lg:block text-left">
//                   <p className="text-sm font-semibold text-gray-800">
//                     {firstName} {lastName}
//                   </p>

//                   <p className="text-xs text-gray-500">Administrator</p>
//                 </div>

//                 <ChevronDown
//                   size={17}
//                   className={`text-gray-500 hidden lg:block transition-transform duration-200 ${
//                     userMenuOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               {/* Dropdown */}
//               {userMenuOpen && (
//                 <div
//                   className="absolute right-0 top-full mt-3 w-48 bg-white
//                  border border-gray-100 rounded-xl shadow-lg
//                  py-2 z-50"
//                 >
//                   <button
//                     type="button"
//                     onClick={() => {
//                       localStorage.removeItem("epmsLoggedInUser");
//                       setUserMenuOpen(false);
//                       window.location.href = "/login";
//                     }}
//                     className="w-full text-left px-4 py-2.5 text-sm font-medium
//                    text-red-600 hover:bg-red-50 transition"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               type="button"
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="md:hidden flex items-center justify-center
//                          w-10 h-10 rounded-lg text-gray-700
//                          hover:bg-green-50 hover:text-green-700
//                          transition"
//               aria-label="Toggle navigation menu"
//             >
//               {menuOpen ? <X size={26} /> : <Menu size={26} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <div className="md:hidden border-t border-green-100 py-4">
//             <div className="flex flex-col gap-1">
//               {/* Dashboard */}
//               <NavLink
//                 to="/dashboard"
//                 onClick={closeMenu}
//                 className={
//                   dashboardSection
//                     ? "flex items-center gap-3 px-4 py-3 rounded-lg bg-green-100 text-green-800 font-semibold"
//                     : "flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-green-50 hover:text-green-800"
//                 }
//               >
//                 Dashboard
//               </NavLink>

//               {/* Employees */}
//               <NavLink
//                 to="/employees"
//                 onClick={closeMenu}
//                 className={({ isActive }) =>
//                   `flex items-center gap-3 px-4 py-3 rounded-lg ${
//                     isActive
//                       ? "bg-green-100 text-green-800 font-semibold"
//                       : "text-gray-600 hover:bg-green-50 hover:text-green-800"
//                   }`
//                 }
//               >
//                 <Users size={19} />
//                 Employees
//               </NavLink>

//               {/* About */}
//               <NavLink
//                 to="/about"
//                 onClick={closeMenu}
//                 className={({ isActive }) =>
//                   `flex items-center gap-3 px-4 py-3 rounded-lg ${
//                     isActive
//                       ? "bg-green-100 text-green-800 font-semibold"
//                       : "text-gray-600 hover:bg-green-50 hover:text-green-800"
//                   }`
//                 }
//               >
//                 <Home size={19} />
//                 About
//               </NavLink>

//               {/* Features */}
//               <NavLink
//                 to="/features"
//                 onClick={closeMenu}
//                 className={({ isActive }) =>
//                   `flex items-center gap-3 px-4 py-3 rounded-lg ${
//                     isActive
//                       ? "bg-green-100 text-green-800 font-semibold"
//                       : "text-gray-600 hover:bg-green-50 hover:text-green-800"
//                   }`
//                 }
//               >
//                 <Settings size={19} />
//                 Features
//               </NavLink>

//               {/* Mobile User */}

//               <div className="relative hidden sm:flex items-center gap-3 pl-3 sm:pl-4 border-l border-gray-200">
//                 {/* User Button */}
//                 <button
//                   type="button"
//                   onClick={() => setUserMenuOpen(!userMenuOpen)}
//                   className="flex items-center gap-3 cursor-pointer"
//                 >
//                   <div
//                     className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-green-700
//                  text-white flex items-center justify-center
//                  font-semibold"
//                   >
//                     {initials}
//                   </div>

//                   <div className="hidden lg:block text-left">
//                     <p className="text-sm font-semibold text-gray-800">
//                       {firstName} {lastName}
//                     </p>

//                     <p className="text-xs text-gray-500">Administrator</p>
//                   </div>

//                   <ChevronDown
//                     size={17}
//                     className={`text-gray-500 hidden lg:block transition-transform duration-200 ${
//                       userMenuOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 {/* Dropdown */}
//                 {userMenuOpen && (
//                   <div
//                     className="absolute right-0 top-full mt-3 w-48 bg-white
//                  border border-gray-100 rounded-xl shadow-lg
//                  py-2 z-50"
//                   >
//                     <button
//                       type="button"
//                       onClick={() => {
//                         localStorage.removeItem("epmsLoggedInUser");
//                         setUserMenuOpen(false);
//                         window.location.href = "/login";
//                       }}
//                       className="w-full text-left px-4 py-2.5 text-sm font-medium
//                    text-red-600 hover:bg-red-50 transition"
//                     >
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";

import {
  Home,
  Users,
  Settings,
  Bell,
  ChevronDown,
  Menu,
  X,
  Moon,
  Sun,
} from "lucide-react";

import { NavLink, Link, useLocation } from "react-router-dom";

import logo from "../assets/logo.png";

const Navbar = () => {
  const loggedInUser = JSON.parse(
    localStorage.getItem("epmsLoggedInUser") || "null",
  );

  const firstName = loggedInUser?.firstName || "User";
  const lastName = loggedInUser?.lastName || "";

  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();

  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  // Light mode is the default
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("epmsDarkMode") === "true";
  });

  // Apply dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("epmsDarkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("epmsDarkMode", "false");
    }
  }, [darkMode]);

  const dashboardSection =
    location.pathname === "/dashboard" ||
    location.pathname === "/manage-employees" ||
    location.pathname === "/addemployee" ||
    location.pathname.endsWith("/edit");

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b border-green-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Main Navbar */}
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/home" className="flex items-center gap-3">
            <img
              src={logo}
              alt="EPMS Logo"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl object-cover shadow-sm"
            />

            <div>
              <h1 className="text-lg sm:text-xl font-bold text-green-900 tracking-tight">
                EPMS
              </h1>

              <p className="text-[10px] sm:text-xs text-green-600">
                Employee Management
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-2">
            {/* Home */}
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2.5 rounded-lg
                   transition-all duration-200 ${
                     isActive
                       ? "bg-green-100 text-green-800 font-semibold"
                       : "text-gray-600 hover:bg-green-50 hover:text-green-800"
                   }`
                }
              >
                <Home size={18} />
                Home
              </NavLink>
            </li>

            {/* Dashboard */}
            <li>
              <NavLink
                to="/dashboard"
                className={
                  dashboardSection
                    ? "flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-200 bg-green-100 text-green-800 font-semibold"
                    : "flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-200 text-gray-600 hover:bg-green-50 hover:text-green-800"
                }
              >
                Dashboard
              </NavLink>
            </li>

            {/* Employees */}
            <li>
              <NavLink
                to="/employees"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2.5 rounded-lg
                   transition-all duration-200 ${
                     isActive
                       ? "bg-green-100 text-green-800 font-semibold"
                       : "text-gray-600 hover:bg-green-50 hover:text-green-800"
                   }`
                }
              >
                <Users size={18} />
                Employees
              </NavLink>
            </li>

            {/* About */}
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2.5 rounded-lg
                   transition-all duration-200 ${
                     isActive
                       ? "bg-green-100 text-green-800 font-semibold"
                       : "text-gray-600 hover:bg-green-50 hover:text-green-800"
                   }`
                }
              >
                <Home size={18} />
                About
              </NavLink>
            </li>

            {/* Features */}
            <li>
              <NavLink
                to="/features"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2.5 rounded-lg
                   transition-all duration-200 ${
                     isActive
                       ? "bg-green-100 text-green-800 font-semibold"
                       : "text-gray-600 hover:bg-green-50 hover:text-green-800"
                   }`
                }
              >
                <Settings size={18} />
                Features
              </NavLink>
            </li>
          </ul>

          {/* Right Section */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Notification */}
            <button
              className="relative p-2 rounded-full text-gray-600
                         hover:bg-green-50 hover:text-green-700 transition"
            >
              <Bell size={20} />

              <span
                className="absolute top-1 right-1 w-2.5 h-2.5
                           bg-red-500 rounded-full border-2 border-white"
              ></span>
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full text-gray-600
                         hover:bg-green-50 hover:text-green-700 transition"
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
              title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Desktop User */}
            <div className="relative hidden sm:flex items-center gap-3 pl-3 sm:pl-4 border-l border-gray-200">
              {/* User Button */}
              <button
                type="button"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-3 cursor-pointer"
              >
                <div
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-green-700
                             text-white flex items-center justify-center
                             font-semibold"
                >
                  {initials}
                </div>

                <div className="hidden lg:block text-left">
                  <p className="text-sm font-semibold text-gray-800">
                    {firstName} {lastName}
                  </p>

                  <p className="text-xs text-gray-500">Administrator</p>
                </div>

                <ChevronDown
                  size={17}
                  className={`text-gray-500 hidden lg:block transition-transform duration-200 ${
                    userMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown */}
              {userMenuOpen && (
                <div
                  className="absolute right-0 top-full mt-3 w-48 bg-white
                             border border-gray-100 rounded-xl shadow-lg
                             py-2 z-50"
                >
                  <button
                    type="button"
                    onClick={() => {
                      localStorage.removeItem("epmsLoggedInUser");
                      setUserMenuOpen(false);
                      window.location.href = "/login";
                    }}
                    className="w-full text-left px-4 py-2.5 text-sm font-medium
                               text-red-600 hover:bg-red-50 transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex items-center justify-center
                         w-10 h-10 rounded-lg text-gray-700
                         hover:bg-green-50 hover:text-green-700
                         transition"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-green-100 py-4">
            <div className="flex flex-col gap-1">
              {/* Dashboard */}
              <NavLink
                to="/dashboard"
                onClick={closeMenu}
                className={
                  dashboardSection
                    ? "flex items-center gap-3 px-4 py-3 rounded-lg bg-green-100 text-green-800 font-semibold"
                    : "flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-green-50 hover:text-green-800"
                }
              >
                Dashboard
              </NavLink>

              {/* Employees */}
              <NavLink
                to="/employees"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg ${
                    isActive
                      ? "bg-green-100 text-green-800 font-semibold"
                      : "text-gray-600 hover:bg-green-50 hover:text-green-800"
                  }`
                }
              >
                <Users size={19} />
                Employees
              </NavLink>

              {/* About */}
              <NavLink
                to="/about"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg ${
                    isActive
                      ? "bg-green-100 text-green-800 font-semibold"
                      : "text-gray-600 hover:bg-green-50 hover:text-green-800"
                  }`
                }
              >
                <Home size={19} />
                About
              </NavLink>

              {/* Features */}
              <NavLink
                to="/features"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg ${
                    isActive
                      ? "bg-green-100 text-green-800 font-semibold"
                      : "text-gray-600 hover:bg-green-50 hover:text-green-800"
                  }`
                }
              >
                <Settings size={19} />
                Features
              </NavLink>

              {/* Mobile User */}
              <div className="relative hidden sm:flex items-center gap-3 pl-3 sm:pl-4 border-l border-gray-200">
                {/* User Button */}
                <button
                  type="button"
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <div
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-green-700
                               text-white flex items-center justify-center
                               font-semibold"
                  >
                    {initials}
                  </div>

                  <div className="hidden lg:block text-left">
                    <p className="text-sm font-semibold text-gray-800">
                      {firstName} {lastName}
                    </p>

                    <p className="text-xs text-gray-500">Administrator</p>
                  </div>

                  <ChevronDown
                    size={17}
                    className={`text-gray-500 hidden lg:block transition-transform duration-200 ${
                      userMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown */}
                {userMenuOpen && (
                  <div
                    className="absolute right-0 top-full mt-3 w-48 bg-white
                               border border-gray-100 rounded-xl shadow-lg
                               py-2 z-50"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        localStorage.removeItem("epmsLoggedInUser");
                        setUserMenuOpen(false);
                        window.location.href = "/login";
                      }}
                      className="w-full text-left px-4 py-2.5 text-sm font-medium
                                 text-red-600 hover:bg-red-50 transition"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
