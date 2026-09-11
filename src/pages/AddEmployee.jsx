import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const AddEmployee = ({ setEmployees }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    department: "",
    status: "Active",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setEmployees((currentEmployees) => {
      const nextId =
        Math.max(
          0,
          ...currentEmployees.map((employee) =>
            Number(employee.id.replace("EMP", "")),
          ),
        ) + 1;

      const newEmployee = {
        id: `EMP${String(nextId).padStart(3, "0")}`,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        position: formData.position,
        department: formData.department,
        status: formData.status,
        image: "/avatar.jpg",
      };

      return [...currentEmployees, newEmployee];
    });

    navigate("/employees");
  };
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link
          to="/employees"
          className="text-green-700 font-medium hover:text-green-900"
        >
          ← Back to Employees
        </Link>

        {/* Page heading */}
        <div className="mt-6">
          <h1 className="text-3xl font-bold text-gray-900">Add Employee</h1>

          <p className="text-gray-500 mt-1">
            Add a new employee to your organization.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm mt-8 p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter employee's full name"
                className="w-full px-4 py-3 border border-gray-200
             rounded-lg outline-none
             focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter employee's email"
                className="w-full px-4 py-3 border border-gray-200
             rounded-lg outline-none
             focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full px-4 py-3 border border-gray-200
             rounded-lg outline-none
             focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Position */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Position
              </label>

              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                placeholder="e.g. Frontend Developer"
                className="w-full px-4 py-3 border border-gray-200
             rounded-lg outline-none
             focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Department */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Department
              </label>

              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200
             rounded-lg outline-none
             focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select Department</option>
                <option value="Engineering">Engineering</option>
                <option value="Human Resources">Human Resources</option>
                <option value="Design">Design</option>
                <option value="Finance">Finance</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200
             rounded-lg outline-none
             focus:ring-2 focus:ring-green-500"
              >
                <option value="Active">Active</option>
                <option value="On Leave">On Leave</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <Link
                to="/employees"
                className="px-5 py-3 border border-gray-200
                           rounded-lg font-semibold text-gray-700
                           hover:bg-gray-50 transition"
              >
                Cancel
              </Link>

              <button
                type="submit"
                className="bg-green-700 text-white px-6 py-3
                           rounded-lg font-semibold
                           hover:bg-green-800 transition"
              >
                Add Employee
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
