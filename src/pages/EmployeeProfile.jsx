import { useNavigate, useParams, useLocation } from "react-router-dom";

import { Mail, Phone, Building2, Briefcase, ArrowLeft } from "lucide-react";

const EmployeeProfile = ({ employees }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Find the employee whose ID matches the URL
  const employee = employees.find((employee) => employee.id === id);

  // Where should the Back button go?
  // If we came from Manage Employees, go there.
  // Otherwise, go to the Employee Directory.
  const backPath = location.state?.from || "/employees";

  // If employee doesn't exist
  if (!employee) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Employee Not Found
          </h1>

          <p className="text-gray-500 mt-2">
            The employee you are looking for does not exist.
          </p>

          <button
            onClick={() => navigate(backPath)}
            className="inline-flex items-center gap-2 mt-5
                       text-green-700 font-semibold
                       hover:text-green-800 transition"
          >
            <ArrowLeft size={18} />
            Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(backPath)}
          className="inline-flex items-center gap-2
                     text-green-700 font-medium
                     hover:text-green-900 transition"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        {/* Profile Header */}
        <div
          className="bg-white rounded-2xl shadow-sm border border-gray-100
                     overflow-hidden mt-6"
        >
          <div className="h-36 bg-green-700"></div>

          <div className="px-6 pb-8">
            <div className="flex flex-col md:flex-row md:items-end gap-5 -mt-16">
              <img
                src={employee.image || "/avatar.jpg"}
                alt={employee.name}
                className="w-32 h-32 rounded-full object-cover
                           border-4 border-white shadow-lg"
              />

              <div className="flex-1 pb-2">
                <h1 className="text-3xl font-bold text-gray-900">
                  {employee.name}
                </h1>

                <p className="text-green-700 font-medium mt-1">
                  {employee.position}
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  Employee ID: {employee.id}
                </p>
              </div>

              <div className="pb-3">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    employee.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : employee.status === "On Leave"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                  }`}
                >
                  ● {employee.status}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Information Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Contact Information */}
          <div
            className="bg-white rounded-2xl border border-gray-100
                       shadow-sm p-6"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Contact Information
            </h2>

            <div className="mt-5 space-y-5">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="bg-green-100 text-green-700 p-3 rounded-lg">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-xs text-gray-500">Email</p>

                  <p className="font-medium text-gray-800">{employee.email}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="bg-green-100 text-green-700 p-3 rounded-lg">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-xs text-gray-500">Phone</p>

                  <p className="font-medium text-gray-800">{employee.phone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Employment Information */}
          <div
            className="bg-white rounded-2xl border border-gray-100
                       shadow-sm p-6"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Employment Information
            </h2>

            <div className="mt-5 space-y-5">
              {/* Department */}
              <div className="flex items-center gap-4">
                <div className="bg-green-100 text-green-700 p-3 rounded-lg">
                  <Building2 size={20} />
                </div>

                <div>
                  <p className="text-xs text-gray-500">Department</p>

                  <p className="font-medium text-gray-800">
                    {employee.department}
                  </p>
                </div>
              </div>

              {/* Position */}
              <div className="flex items-center gap-4">
                <div className="bg-green-100 text-green-700 p-3 rounded-lg">
                  <Briefcase size={20} />
                </div>

                <div>
                  <p className="text-xs text-gray-500">Position</p>

                  <p className="font-medium text-gray-800">
                    {employee.position}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
