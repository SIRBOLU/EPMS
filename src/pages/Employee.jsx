// // import Navbar from "../components/Navbar";
// // // import employees from "../data/employees";
// // import EmployeeCard from "../components/EmployeeCard";
// // import { useState } from "react";
// // import { Link } from "react-router-dom";

// // const Employee = ({ employees, setEmployees }) => {
// //   const [search, setSearch] = useState("");
// //   const [department, setDepartment] = useState("All Departments");
// //   const [status, setStatus] = useState("All Status");
// //   const totalEmployees = employees.length;
// //   const activeEmployees = employees.filter(
// //     (employee) => employee.status === "Active",
// //   ).length;
// //   const employeesOnLeave = employees.filter(
// //     (employee) => employee.status === "On Leave",
// //   ).length;
// //   const departments = new Set(employees.map((employee) => employee.department))
// //     .size;

// //   const activePercentage =
// //     totalEmployees === 0
// //       ? 0
// //       : ((activeEmployees / totalEmployees) * 100).toFixed(1);

// //   const filteredEmployees = employees.filter((employee) => {
// //     const matchesSearch = employee.name
// //       .toLowerCase()
// //       .includes(search.toLowerCase());

// //     const matchesDepartment =
// //       department === "All Departments" || employee.department === department;

// //     const matchesStatus = status === "All Status" || employee.status === status;

// //     return matchesSearch && matchesDepartment && matchesStatus;
// //   });
// //   const handleDelete = (id) => {
// //     setEmployees((currentEmployees) =>
// //       currentEmployees.filter((employee) => employee.id !== id),
// //     );
// //   };
// //   return (
// //     <div className="bg-gray-50 min-h-screen px-6 py-8">
// //       {/* Page Header */}
// //       <Navbar />
// //       <div className="max-w-7xl mx-auto mt-8">
// //         <div className="flex items-center justify-between">
// //           <div>
// //             <h1 className="text-3xl font-bold text-gray-900">Employees</h1>

// //             <p className="text-gray-500 mt-1">
// //               Manage and view all employees in your organization.
// //             </p>
// //           </div>

// //           <Link
// //             to="/addemployee"
// //             className="bg-green-700 text-white px-5 py-3 rounded-lg
// //              font-semibold hover:bg-green-800 transition"
// //           >
// //             + Add Employee
// //           </Link>
// //         </div>
// //       </div>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
// //         {/* Total Employees */}
// //         <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
// //           <p className="text-sm text-gray-500">Total Employees</p>

// //           <h2 className="text-3xl font-bold text-gray-900 mt-2">
// //             {totalEmployees}
// //           </h2>

// //           <p className="text-sm text-green-600 mt-2">+8 this month</p>
// //         </div>

// //         {/* Active */}
// //         <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
// //           <p className="text-sm text-gray-500">Active</p>

// //           <h2 className="text-3xl font-bold text-gray-900 mt-2">
// //             {activeEmployees}
// //           </h2>

// //           <p className="text-sm text-green-600 mt-2">
// //             {activePercentage}% of workforce
// //           </p>
// //         </div>

// //         {/* On Leave */}
// //         <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
// //           <p className="text-sm text-gray-500">On Leave</p>

// //           <h2 className="text-3xl font-bold text-gray-900 mt-2">
// //             {employeesOnLeave}
// //           </h2>

// //           <p className="text-sm text-yellow-600 mt-2">Currently away</p>
// //         </div>

// //         {/* Departments */}
// //         <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
// //           <p className="text-sm text-gray-500">Departments</p>

// //           <h2 className="text-3xl font-bold text-gray-900 mt-2">
// //             {departments}
// //           </h2>

// //           <p className="text-sm text-blue-600 mt-2">Across organization</p>
// //         </div>
// //       </div>
// //       <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-8">
// //         <div className="flex flex-col md:flex-row gap-4">
// //           {/* Search */}
// //           <div className="flex-1">
// //             <input
// //               type="text"
// //               placeholder="Search employees..."
// //               value={search}
// //               onChange={(e) => setSearch(e.target.value)}
// //               className="w-full px-4 py-3 border border-gray-200
// //              rounded-lg outline-none
// //              focus:ring-2 focus:ring-green-500"
// //             />
// //           </div>

// //           {/* Department */}
// //           <select
// //             value={department}
// //             onChange={(e) => setDepartment(e.target.value)}
// //             className="px-4 py-3 border border-gray-200 rounded-lg
// //              outline-none focus:ring-2 focus:ring-green-500"
// //           >
// //             <option>All Departments</option>
// //             <option>Engineering</option>
// //             <option>Human Resources</option>
// //             <option>Finance</option>
// //             <option>Marketing</option>
// //           </select>

// //           {/* Status */}
// //           <select
// //             value={status}
// //             onChange={(e) => setStatus(e.target.value)}
// //             className="px-4 py-3 border border-gray-200 rounded-lg
// //              outline-none focus:ring-2 focus:ring-green-500"
// //           >
// //             <option>All Status</option>
// //             <option>Active</option>
// //             <option>On Leave</option>
// //             <option>Inactive</option>
// //           </select>
// //         </div>

// //         {/* Employee Cards */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
// //           {filteredEmployees.map((employee) => (
// //             <EmployeeCard
// //               key={employee.id}
// //               employee={employee}
// //               onDelete={handleDelete}
// //             />
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Employee;

// import Navbar from "../components/Navbar";
// import EmployeeCard from "../components/EmployeeCard";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Employee = ({ employees, setEmployees }) => {
//   const [search, setSearch] = useState("");
//   const [department, setDepartment] = useState("All Departments");
//   const [status, setStatus] = useState("All Status");

//   // Employee statistics
//   const totalEmployees = employees.length;

//   const activeEmployees = employees.filter(
//     (employee) => employee.status === "Active",
//   ).length;

//   const employeesOnLeave = employees.filter(
//     (employee) => employee.status === "On Leave",
//   ).length;

//   const departments = new Set(employees.map((employee) => employee.department))
//     .size;

//   const activePercentage =
//     totalEmployees === 0
//       ? 0
//       : ((activeEmployees / totalEmployees) * 100).toFixed(1);

//   // Search and filter employees
//   const filteredEmployees = employees.filter((employee) => {
//     const searchTerm = search.toLowerCase();

//     const matchesSearch =
//       employee.name.toLowerCase().includes(searchTerm) ||
//       employee.id.toLowerCase().includes(searchTerm) ||
//       employee.email.toLowerCase().includes(searchTerm) ||
//       employee.position.toLowerCase().includes(searchTerm) ||
//       employee.department.toLowerCase().includes(searchTerm);

//     const matchesDepartment =
//       department === "All Departments" || employee.department === department;

//     const matchesStatus = status === "All Status" || employee.status === status;

//     return matchesSearch && matchesDepartment && matchesStatus;
//   });

//   // Delete employee
//   const handleDelete = (id) => {
//     setEmployees((currentEmployees) =>
//       currentEmployees.filter((employee) => employee.id !== id),
//     );
//   };

//   // Clear search and filters
//   const clearFilters = () => {
//     setSearch("");
//     setDepartment("All Departments");
//     setStatus("All Status");
//   };

//   const hasActiveFilters =
//     search !== "" ||
//     department !== "All Departments" ||
//     status !== "All Status";

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <Navbar />

//       <div className="max-w-7xl mx-auto px-6 py-8">
//         {/* Page Header */}

//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-900">Employees</h1>

//             <p className="text-gray-500 mt-1">
//               Manage and view all employees in your organization.
//             </p>
//           </div>

//           <Link
//             to="/addemployee"
//             className="bg-green-700 text-white px-5 py-3 rounded-lg
//                        font-semibold hover:bg-green-800 transition
//                        text-center"
//           >
//             + Add Employee
//           </Link>
//         </div>

//         {/* Statistics */}

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
//           {/* Total Employees */}

//           <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
//             <p className="text-sm text-gray-500">Total Employees</p>

//             <h2 className="text-3xl font-bold text-gray-900 mt-2">
//               {totalEmployees}
//             </h2>

//             <p className="text-sm text-gray-500 mt-2">Current workforce</p>
//           </div>

//           {/* Active Employees */}

//           <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
//             <p className="text-sm text-gray-500">Active</p>

//             <h2 className="text-3xl font-bold text-gray-900 mt-2">
//               {activeEmployees}
//             </h2>

//             <p className="text-sm text-green-600 mt-2">
//               {activePercentage}% of workforce
//             </p>
//           </div>

//           {/* On Leave */}

//           <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
//             <p className="text-sm text-gray-500">On Leave</p>

//             <h2 className="text-3xl font-bold text-gray-900 mt-2">
//               {employeesOnLeave}
//             </h2>

//             <p className="text-sm text-yellow-600 mt-2">Currently away</p>
//           </div>

//           {/* Departments */}

//           <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
//             <p className="text-sm text-gray-500">Departments</p>

//             <h2 className="text-3xl font-bold text-gray-900 mt-2">
//               {departments}
//             </h2>

//             <p className="text-sm text-blue-600 mt-2">Across organization</p>
//           </div>
//         </div>

//         {/* Search and Filters */}

//         <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm mt-8">
//           <div className="flex flex-col lg:flex-row gap-4">
//             {/* Search */}

//             <div className="flex-1">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Search Employees
//               </label>

//               <input
//                 type="text"
//                 placeholder="Search by name, ID, email, position..."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-200
//                            rounded-lg outline-none
//                            focus:ring-2 focus:ring-green-500
//                            focus:border-green-500"
//               />
//             </div>

//             {/* Department */}

//             <div className="w-full lg:w-56">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Department
//               </label>

//               <select
//                 value={department}
//                 onChange={(e) => setDepartment(e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-200
//                            rounded-lg outline-none
//                            focus:ring-2 focus:ring-green-500
//                            focus:border-green-500"
//               >
//                 <option>All Departments</option>
//                 <option>Engineering</option>
//                 <option>Human Resources</option>
//                 <option>Design</option>
//                 <option>Finance</option>
//                 <option>Marketing</option>
//               </select>
//             </div>

//             {/* Status */}

//             <div className="w-full lg:w-48">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Status
//               </label>

//               <select
//                 value={status}
//                 onChange={(e) => setStatus(e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-200
//                            rounded-lg outline-none
//                            focus:ring-2 focus:ring-green-500
//                            focus:border-green-500"
//               >
//                 <option>All Status</option>
//                 <option>Active</option>
//                 <option>On Leave</option>
//                 <option>Inactive</option>
//               </select>
//             </div>
//           </div>

//           {/* Filter Results */}

//           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-5 pt-4 border-t border-gray-100">
//             <p className="text-sm text-gray-500">
//               Showing{" "}
//               <span className="font-semibold text-gray-900">
//                 {filteredEmployees.length}
//               </span>{" "}
//               of{" "}
//               <span className="font-semibold text-gray-900">
//                 {totalEmployees}
//               </span>{" "}
//               employees
//             </p>

//             {hasActiveFilters && (
//               <button
//                 onClick={clearFilters}
//                 className="text-sm font-semibold text-green-700
//                            hover:text-green-800"
//               >
//                 Clear Filters
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Employee Cards */}

//         {filteredEmployees.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
//             {filteredEmployees.map((employee) => (
//               <EmployeeCard
//                 key={employee.id}
//                 employee={employee}
//                 onDelete={handleDelete}
//               />
//             ))}
//           </div>
//         ) : (
//           /* No Results */

//           <div className="bg-white rounded-2xl border border-gray-100 shadow-sm mt-8 py-16 px-6 text-center">
//             <h2 className="text-xl font-bold text-gray-900">
//               No employees found
//             </h2>

//             <p className="text-gray-500 mt-2">
//               Try changing your search or filter options.
//             </p>

//             {hasActiveFilters && (
//               <button
//                 onClick={clearFilters}
//                 className="mt-5 bg-green-700 text-white px-5 py-2.5
//                            rounded-lg font-semibold
//                            hover:bg-green-800 transition"
//               >
//                 Clear Filters
//               </button>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Employee;

import Navbar from "../components/Navbar";
import EmployeeCard from "../components/EmployeeCard";
import { useState } from "react";

const Employee = ({ employees }) => {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All Departments");
  const [status, setStatus] = useState("All Status");

  // Statistics
  const totalEmployees = employees.length;

  // Search and filter
  const filteredEmployees = employees.filter((employee) => {
    const searchTerm = search.toLowerCase();

    const matchesSearch =
      employee.name.toLowerCase().includes(searchTerm) ||
      employee.id.toLowerCase().includes(searchTerm) ||
      employee.email.toLowerCase().includes(searchTerm) ||
      employee.position.toLowerCase().includes(searchTerm) ||
      employee.department.toLowerCase().includes(searchTerm);

    const matchesDepartment =
      department === "All Departments" || employee.department === department;

    const matchesStatus = status === "All Status" || employee.status === status;

    return matchesSearch && matchesDepartment && matchesStatus;
  });

  const clearFilters = () => {
    setSearch("");
    setDepartment("All Departments");
    setStatus("All Status");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Employee Directory
          </h1>

          <p className="text-gray-500 mt-1">
            Search and view employee information.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="md:col-span-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Search Employees
              </label>

              <input
                type="text"
                placeholder="Search by name, ID, email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3
                           focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Department */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Department
              </label>

              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3
                           focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option>All Departments</option>
                <option>Engineering</option>
                <option>Human Resources</option>
                <option>Design</option>
                <option>Finance</option>
                <option>Marketing</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Status
              </label>

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3
                           focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option>All Status</option>
                <option>Active</option>
                <option>On Leave</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>

          {/* Filter Information */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-5 gap-3">
            <p className="text-sm text-gray-500">
              Showing{" "}
              <span className="font-semibold text-gray-800">
                {filteredEmployees.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-800">
                {totalEmployees}
              </span>{" "}
              employees
            </p>

            {(search ||
              department !== "All Departments" ||
              status !== "All Status") && (
              <button
                onClick={clearFilters}
                className="text-sm font-semibold text-green-700 hover:text-green-800"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Employee Directory */}
        {filteredEmployees.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEmployees.map((employee) => (
              <EmployeeCard key={employee.id} employee={employee} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-12 text-center">
            <h2 className="text-xl font-bold text-gray-900">
              No Employees Found
            </h2>

            <p className="text-gray-500 mt-2">
              Try changing your search or filter options.
            </p>

            <button
              onClick={clearFilters}
              className="mt-5 bg-green-700 text-white px-5 py-2.5
                         rounded-lg font-semibold hover:bg-green-800 transition"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Employee;
