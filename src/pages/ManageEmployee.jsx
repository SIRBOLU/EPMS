import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const ManageEmployee = ({ employees, setEmployees }) => {
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?",
    );

    if (!confirmDelete) {
      return;
    }

    setEmployees((currentEmployees) =>
      currentEmployees.filter((employee) => employee.id !== id),
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Manage Employees
            </h1>

            <p className="text-gray-500 mt-1">
              Add, edit, and manage employee records.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Back Button */}
            <Link
              to="/dashboard"
              className="border border-green-200 text-green-700
                 px-5 py-3 rounded-lg font-semibold
                 hover:bg-green-50 transition text-center"
            >
              ← Back
            </Link>

            {/* Add Employee Button */}
            <Link
              to="/addemployee"
              className="bg-green-700 text-white px-5 py-3 rounded-lg
                 font-semibold hover:bg-green-800 transition text-center"
            >
              + Add Employee
            </Link>
          </div>
        </div>

        {/* Employee Count */}
        <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 mb-6">
          <p className="text-sm text-gray-500">Total Employees</p>

          <h2 className="text-3xl font-bold text-gray-900 mt-1">
            {employees.length}
          </h2>
        </div>

        {/* Employee Management Table */}
        <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900">
              Employee Records
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Manage your employee information from here.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                    Employee
                  </th>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                    ID
                  </th>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                    Position
                  </th>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                    Department
                  </th>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                    Status
                  </th>

                  <th className="text-right px-6 py-4 text-sm font-semibold text-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {employees.map((employee) => (
                  <tr
                    key={employee.id}
                    className="border-t border-gray-100 hover:bg-gray-50 transition"
                  >
                    {/* Employee */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={employee.image || "/avatar.jpg"}
                          alt={employee.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />

                        <div>
                          <p className="font-semibold text-gray-900">
                            {employee.name}
                          </p>

                          <p className="text-sm text-gray-500">
                            {employee.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* ID */}
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {employee.id}
                    </td>

                    {/* Position */}
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {employee.position}
                    </td>

                    {/* Department */}
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {employee.department}
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          employee.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : employee.status === "On Leave"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {employee.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-2">
                        <Link
                          to={`/employees/${employee.id}`}
                          state={{ from: "/manage-employees" }}
                          className="px-3 py-2 border border-gray-200
             text-gray-700 rounded-lg text-sm
             font-semibold hover:bg-gray-50 transition"
                        >
                          View
                        </Link>

                        <Link
                          to={`/employees/${employee.id}/edit`}
                          className="px-3 py-2 border border-green-200
                                     text-green-700 rounded-lg text-sm
                                     font-semibold hover:bg-green-50 transition"
                        >
                          Edit
                        </Link>

                        <button
                          onClick={() => handleDelete(employee.id)}
                          className="px-3 py-2 border border-red-200
                                     text-red-600 rounded-lg text-sm
                                     font-semibold hover:bg-red-50 transition"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Employee Cards */}
          <div className="md:hidden divide-y divide-gray-100">
            {employees.map((employee) => (
              <div key={employee.id} className="p-5">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={employee.image || "/avatar.jpg"}
                    alt={employee.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {employee.name}
                    </h3>

                    <p className="text-sm text-gray-500">{employee.id}</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm mb-4">
                  <p>
                    <span className="font-semibold text-gray-700">
                      Position:
                    </span>{" "}
                    {employee.position}
                  </p>

                  <p>
                    <span className="font-semibold text-gray-700">
                      Department:
                    </span>{" "}
                    {employee.department}
                  </p>

                  <p>
                    <span className="font-semibold text-gray-700">Status:</span>{" "}
                    {employee.status}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <Link
                    to={`/employees/${employee.id}`}
                    state={{ from: "/manage-employees" }}
                    className="text-center px-2 py-2 border border-gray-200
             text-gray-700 rounded-lg text-sm font-semibold
             hover:bg-gray-50 transition"
                  >
                    View
                  </Link>

                  <Link
                    to={`/employees/${employee.id}/edit`}
                    className="text-center px-2 py-2 border border-green-200
                               text-green-700 rounded-lg text-sm font-semibold
                               hover:bg-green-50 transition"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => handleDelete(employee.id)}
                    className="px-2 py-2 border border-red-200
                               text-red-600 rounded-lg text-sm font-semibold
                               hover:bg-red-50 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {employees.length === 0 && (
            <div className="text-center py-16 px-6">
              <h2 className="text-xl font-bold text-gray-900">No Employees</h2>

              <p className="text-gray-500 mt-2">
                There are currently no employee records.
              </p>

              <Link
                to="/addemployee"
                className="inline-block mt-5 bg-green-700 text-white
                           px-5 py-2.5 rounded-lg font-semibold
                           hover:bg-green-800 transition"
              >
                + Add Employee
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageEmployee;
