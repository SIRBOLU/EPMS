import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ScrollReveal from "../components/ScrollReveal";
import { Link, useNavigate } from "react-router-dom";

import {
  Users,
  Search,
  LayoutDashboard,
  UserRound,
  ShieldCheck,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Moon,
  Sun,
} from "lucide-react";

const Home = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("epmsDarkMode") === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("epmsDarkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("epmsDarkMode", "false");
    }
  }, [darkMode]);
  const navigate = useNavigate();

  const handleProtectedNavigation = (path) => {
    const loggedInUser = localStorage.getItem("epmsLoggedInUser");

    if (loggedInUser) {
      navigate(path);
    } else {
      navigate("/login", {
        state: {
          from: path,
        },
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <Navbar />

      {/* THEME TOGGLE */}
      <button
        type="button"
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-24 right-5 z-40
                   p-2.5 rounded-full
                   bg-white dark:bg-gray-800
                   border border-gray-200 dark:border-gray-700
                   text-gray-600 dark:text-gray-300
                   hover:bg-green-50 dark:hover:bg-gray-700
                   hover:text-green-700 dark:hover:text-green-400
                   shadow-sm transition-all duration-200"
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-green-950 via-green-900 to-green-700 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* HERO TEXT */}
            <ScrollReveal>
              <div>
                <p className="text-green-300 font-semibold uppercase tracking-widest">
                  Welcome to EPMS
                </p>

                <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-4">
                  Manage your workforce.
                  <span className="block text-green-300">
                    Simplify your workplace.
                  </span>
                </h1>

                <p className="text-green-100 text-lg md:text-xl mt-6 leading-relaxed max-w-xl">
                  EPMS is a modern Employee Profile Management System designed
                  to help organizations organize, search, view, and manage
                  employee information from one central platform.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Link
                    to="/login"
                    className="inline-flex items-center justify-center gap-2
                               bg-white text-green-900 px-6 py-3 rounded-lg
                               font-semibold hover:bg-green-50
                               hover:-translate-y-1 transition-all duration-300"
                  >
                    Get Started
                    <ArrowRight size={18} />
                  </Link>

                  <button
                    className="inline-flex items-center justify-center
                               border border-green-300 text-white
                               px-6 py-3 rounded-lg font-semibold
                               hover:bg-green-800 hover:-translate-y-1
                               transition-all duration-300"
                    type="button"
                    onClick={() => handleProtectedNavigation("/employees")}
                  >
                    Explore Employees
                  </button>
                </div>
              </div>
            </ScrollReveal>

            {/* HERO VISUAL */}
            <ScrollReveal delay={150}>
              <div className="relative">
                <div
                  className="absolute -top-10 -right-10 w-40 h-40
                             bg-green-400/20 rounded-full blur-3xl"
                ></div>

                <div
                  className="absolute -bottom-10 -left-10 w-40 h-40
                             bg-green-300/20 rounded-full blur-3xl"
                ></div>

                <div
                  className="relative bg-white/10 backdrop-blur-md
                             border border-white/20 rounded-3xl p-6
                             shadow-2xl"
                >
                  {/* MOCK DASHBOARD */}
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          EPMS Dashboard
                        </p>

                        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-1">
                          Workforce Overview
                        </h2>
                      </div>

                      <div
                        className="w-11 h-11 bg-green-100
                                   text-green-700 rounded-xl
                                   flex items-center justify-center"
                      >
                        <LayoutDashboard size={22} />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-5">
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Employees
                        </p>

                        <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-1">
                          120
                        </p>
                      </div>

                      <div className="bg-green-50 dark:bg-green-950/40 rounded-xl p-4">
                        <p className="text-xs text-green-700 dark:text-green-400">
                          Active
                        </p>

                        <p className="text-2xl font-bold text-green-700 dark:text-green-400 mt-1">
                          96
                        </p>
                      </div>

                      <div className="bg-yellow-50 dark:bg-yellow-950/40 rounded-xl p-4">
                        <p className="text-xs text-yellow-700 dark:text-yellow-400">
                          On Leave
                        </p>

                        <p className="text-2xl font-bold text-yellow-700 dark:text-yellow-400 mt-1">
                          12
                        </p>
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-950/40 rounded-xl p-4">
                        <p className="text-xs text-blue-700 dark:text-blue-400">
                          Departments
                        </p>

                        <p className="text-2xl font-bold text-blue-700 dark:text-blue-400 mt-1">
                          8
                        </p>
                      </div>
                    </div>

                    <div className="mt-5">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                          Employee Activity
                        </p>

                        <BarChart3
                          size={18}
                          className="text-green-700 dark:text-green-400"
                        />
                      </div>

                      <div className="flex items-end gap-2 h-24 mt-4">
                        <div className="w-full bg-green-100 rounded-t-lg h-10"></div>
                        <div className="w-full bg-green-200 rounded-t-lg h-16"></div>
                        <div className="w-full bg-green-300 rounded-t-lg h-12"></div>
                        <div className="w-full bg-green-400 rounded-t-lg h-20"></div>
                        <div className="w-full bg-green-500 rounded-t-lg h-14"></div>
                        <div className="w-full bg-green-600 rounded-t-lg h-24"></div>
                        <div className="w-full bg-green-700 rounded-t-lg h-18"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="bg-white dark:bg-gray-900 py-12 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <ScrollReveal delay={0}>
              <div
                className="text-center p-5 rounded-2xl
                           hover:bg-green-50 dark:hover:bg-green-950/30
                           hover:-translate-y-1
                           transition-all duration-300"
              >
                <Users
                  size={25}
                  className="mx-auto text-green-700 dark:text-green-400"
                />

                <p className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-3">
                  120
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Total Employees
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div
                className="text-center p-5 rounded-2xl
                           hover:bg-green-50 dark:hover:bg-green-950/30
                           hover:-translate-y-1
                           transition-all duration-300"
              >
                <CheckCircle
                  size={25}
                  className="mx-auto text-green-700 dark:text-green-400"
                />

                <p className="text-3xl font-bold text-green-700 dark:text-green-400 mt-3">
                  96
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Active Employees
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div
                className="text-center p-5 rounded-2xl
                           hover:bg-green-50 dark:hover:bg-green-950/30
                           hover:-translate-y-1
                           transition-all duration-300"
              >
                <BarChart3
                  size={25}
                  className="mx-auto text-blue-600 dark:text-blue-400"
                />

                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mt-3">
                  8
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Departments
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div
                className="text-center p-5 rounded-2xl
                           hover:bg-green-50 dark:hover:bg-green-950/30
                           hover:-translate-y-1
                           transition-all duration-300"
              >
                <UserRound
                  size={25}
                  className="mx-auto text-yellow-600 dark:text-yellow-400"
                />

                <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mt-3">
                  12
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Employees on Leave
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* WHY EPMS */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-green-700 dark:text-green-400 font-semibold uppercase tracking-wide">
                Why EPMS?
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mt-3">
                Everything your team needs in one place.
              </h2>

              <p className="text-gray-600 dark:text-gray-400 mt-5 leading-relaxed">
                EPMS removes the complexity of managing employee information by
                bringing essential workforce tools together in one organized
                platform.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <ScrollReveal delay={0}>
              <div
                className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800
                           rounded-2xl p-7 h-full shadow-sm
                           hover:-translate-y-2 hover:shadow-xl
                           hover:border-green-100 dark:hover:border-green-900
                           transition-all duration-500"
              >
                <div
                  className="w-13 h-13 w-14 h-14 bg-green-100 dark:bg-green-950/50
                             text-green-700 dark:text-green-400 rounded-xl
                             flex items-center justify-center"
                >
                  <Users size={25} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-6">
                  Centralized Records
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                  Keep important employee information organized and accessible
                  from one central system.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div
                className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800
                           rounded-2xl p-7 h-full shadow-sm
                           hover:-translate-y-2 hover:shadow-xl
                           hover:border-green-100 dark:hover:border-green-900
                           transition-all duration-500"
              >
                <div
                  className="w-14 h-14 bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-400
                             rounded-xl flex items-center justify-center"
                >
                  <Search size={25} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-6">
                  Fast Search
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                  Find employee information quickly using names, IDs, emails,
                  positions, and departments.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div
                className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800
                           rounded-2xl p-7 h-full shadow-sm
                           hover:-translate-y-2 hover:shadow-xl
                           hover:border-green-100 dark:hover:border-green-900
                           transition-all duration-500"
              >
                <div
                  className="w-14 h-14 bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-400
                             rounded-xl flex items-center justify-center"
                >
                  <UserRound size={25} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-6">
                  Clear Profiles
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                  Access structured employee profiles containing essential
                  contact and employment information.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div
                className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800
                           rounded-2xl p-7 h-full shadow-sm
                           hover:-translate-y-2 hover:shadow-xl
                           hover:border-green-100 dark:hover:border-green-900
                           transition-all duration-500"
              >
                <div
                  className="w-14 h-14 bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-400
                             rounded-xl flex items-center justify-center"
                >
                  <ShieldCheck size={25} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-6">
                  Controlled Management
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                  Keep employee viewing and administrative management functions
                  organized within the system.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <ScrollReveal>
        <section className="bg-white dark:bg-gray-900 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-green-700 dark:text-green-400 font-semibold uppercase tracking-wide">
                How EPMS Works
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mt-3">
                Simple from start to finish.
              </h2>

              <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                EPMS keeps the employee management process straightforward,
                allowing users to move from finding an employee to viewing their
                information with just a few steps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
              {[
                {
                  number: "01",
                  title: "Access",
                  description:
                    "Enter the EPMS workspace through the application.",
                },
                {
                  number: "02",
                  title: "Search",
                  description:
                    "Find an employee using the directory and filters.",
                },
                {
                  number: "03",
                  title: "View",
                  description:
                    "Open the employee profile and view detailed information.",
                },
                {
                  number: "04",
                  title: "Manage",
                  description:
                    "Authorized users can add, edit, or delete employee records.",
                },
              ].map((step, index) => (
                <ScrollReveal key={step.number} delay={index * 100}>
                  <div
                    className="relative bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700
                               rounded-2xl p-7 h-full
                               hover:-translate-y-2 hover:shadow-lg
                               transition-all duration-500"
                  >
                    <span className="text-green-700 dark:text-green-400 font-bold text-sm">
                      STEP {step.number}
                    </span>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-4">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                      {step.description}
                    </p>

                    {index < 3 && (
                      <div
                        className="hidden md:block absolute top-1/2
                                   -right-4 text-green-300 dark:text-green-500 text-2xl"
                      >
                        →
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FEATURE HIGHLIGHT */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <p className="text-green-700 dark:text-green-400 font-semibold uppercase tracking-wide">
                  Built for productivity
                </p>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mt-3">
                  Spend less time managing records and more time managing
                  people.
                </h2>

                <p className="text-gray-600 dark:text-gray-400 mt-5 leading-relaxed">
                  Whether you need to find an employee's contact information,
                  check their department, review their status, or update their
                  record, EPMS keeps the process simple and organized.
                </p>

                <div className="space-y-4 mt-7">
                  <div className="flex items-start gap-3">
                    <CheckCircle
                      size={21}
                      className="text-green-700 dark:text-green-400 mt-1 shrink-0"
                    />

                    <p className="text-gray-700 dark:text-gray-300">
                      Quick access to employee information
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle
                      size={21}
                      className="text-green-700 dark:text-green-400 mt-1 shrink-0"
                    />

                    <p className="text-gray-700 dark:text-gray-300">
                      Simple employee record management
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle
                      size={21}
                      className="text-green-700 dark:text-green-400 mt-1 shrink-0"
                    />

                    <p className="text-gray-700 dark:text-gray-300">
                      Responsive experience across devices
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle
                      size={21}
                      className="text-green-700 dark:text-green-400 mt-1 shrink-0"
                    />

                    <p className="text-gray-700 dark:text-gray-300">
                      Clear workforce statistics and insights
                    </p>
                  </div>
                </div>

                <Link
                  to="/login"
                  className="inline-flex items-center gap-2
                             mt-8 text-green-700 dark:text-green-400 font-semibold
                             hover:text-green-900 dark:hover:text-green-300 group"
                >
                  Explore all features
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1
                               transition-transform duration-300"
                  />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div
                className="bg-gradient-to-br from-green-900
                           to-green-700 rounded-3xl p-8 md:p-10
                           text-white shadow-xl"
              >
                <div className="grid grid-cols-2 gap-5">
                  <div className="bg-white/10 border border-white/10 rounded-2xl p-6">
                    <Users size={25} />

                    <p className="text-3xl font-bold mt-5">120</p>

                    <p className="text-green-100 text-sm mt-1">
                      Employee Records
                    </p>
                  </div>

                  <div className="bg-white/10 border border-white/10 rounded-2xl p-6">
                    <Search size={25} />

                    <p className="text-3xl font-bold mt-5">Fast</p>

                    <p className="text-green-100 text-sm mt-1">
                      Employee Search
                    </p>
                  </div>

                  <div className="bg-white/10 border border-white/10 rounded-2xl p-6">
                    <LayoutDashboard size={25} />

                    <p className="text-3xl font-bold mt-5">24/7</p>

                    <p className="text-green-100 text-sm mt-1">
                      Workforce Overview
                    </p>
                  </div>

                  <div className="bg-white/10 border border-white/10 rounded-2xl p-6">
                    <ShieldCheck size={25} />

                    <p className="text-3xl font-bold mt-5">Simple</p>

                    <p className="text-green-100 text-sm mt-1">Management</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ScrollReveal>
        <section className="bg-green-900 text-white py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-green-300 font-semibold uppercase tracking-wide">
              Get Started
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mt-3">
              Your employee information.
              <span className="block text-green-300">
                Organized in one place.
              </span>
            </h2>

            <p className="text-green-100 max-w-2xl mx-auto mt-5 leading-relaxed">
              Explore EPMS and discover a simpler way to access and manage
              employee information.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <button
                className="inline-flex items-center justify-center
                               border border-green-300 text-white
                               px-6 py-3 rounded-lg font-semibold
                               hover:bg-green-800 hover:-translate-y-1
                               transition-all duration-300"
                type="button"
                onClick={() => handleProtectedNavigation("/employees")}
              >
                View Employees
              </button>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="flex flex-col md:flex-row
                       items-center justify-between gap-4"
          >
            <div>
              <p className="text-white font-bold text-lg">EPMS</p>

              <p className="text-sm mt-1">Employee Profile Management System</p>
            </div>

            <p className="text-sm">
              © {new Date().getFullYear()} EPMS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
