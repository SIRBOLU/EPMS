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
    image: "",
  });

  const [imageError, setImageError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    // Maximum image size: 5 MB
    const maxSize = 5 * 1024 * 1024;

    if (file.size > maxSize) {
      setImageError("Image size must not exceed 5 MB.");
      setFormData({
        ...formData,
        image: "",
      });
      return;
    }

    // Only allow image files
    if (!file.type.startsWith("image/")) {
      setImageError("Please select a valid image file.");
      setFormData({
        ...formData,
        image: "",
      });
      return;
    }

    setImageError("");

    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({
        ...formData,
        image: reader.result,
      });
    };

    reader.readAsDataURL(file);
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
        image: formData.image || "/avatar.jpg",
      };

      return [...currentEmployees, newEmployee];
    });

    navigate("/employees");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 px-6 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link
          to="/employees"
          className="text-green-700 dark:text-green-400
                     font-medium hover:text-green-900 dark:hover:text-green-300"
        >
          ← Back to Employees
        </Link>

        {/* Page heading */}
        <div className="mt-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Add Employee
          </h1>

          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Add a new employee to your organization.
          </p>
        </div>

        {/* Form */}
        <div
          className="bg-white dark:bg-gray-900
                     rounded-2xl
                     border border-gray-100 dark:border-gray-800
                     shadow-sm mt-8 p-6"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Profile Image */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Employee Photo
              </label>

              <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                {/* Image Preview */}
                <div className="flex-shrink-0">
                  {formData.image ? (
                    <img
                      src={formData.image}
                      alt="Employee preview"
                      className="w-24 h-24 rounded-full object-cover
                                 border-4 border-green-300 dark:border-green-700
                                 shadow-sm"
                    />
                  ) : (
                    <div
                      className="w-24 h-24 rounded-full
                                 bg-green-50 dark:bg-green-950/40
                                 border-4 border-green-200 dark:border-green-800
                                 flex items-center justify-center"
                    >
                      <span className="text-green-700 dark:text-green-400 text-2xl font-bold">
                        +
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <input
                    type="file"
                    accept="image/jpeg,image/jpg,image/png"
                    onChange={handleImageChange}
                    className="block w-full text-sm text-gray-500 dark:text-gray-400
                               file:mr-4 file:py-2.5 file:px-4
                               file:rounded-lg file:border-0
                               file:text-sm file:font-semibold
                               file:bg-green-50 file:text-green-700
                               hover:file:bg-green-100
                               dark:file:bg-green-950/50
                               dark:file:text-green-400
                               dark:hover:file:bg-green-950/70
                               cursor-pointer"
                  />

                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    JPG, JPEG or PNG. Maximum size: 5 MB.
                  </p>

                  {imageError && (
                    <p className="text-sm text-red-600 dark:text-red-400 mt-2">
                      {imageError}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter employee's full name"
                required
                className="w-full px-4 py-3
                           border border-gray-200 dark:border-gray-700
                           bg-white dark:bg-gray-800
                           text-gray-900 dark:text-gray-100
                           rounded-lg outline-none
                           placeholder:text-gray-400 dark:placeholder:text-gray-500
                           focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter employee's email"
                required
                className="w-full px-4 py-3
                           border border-gray-200 dark:border-gray-700
                           bg-white dark:bg-gray-800
                           text-gray-900 dark:text-gray-100
                           rounded-lg outline-none
                           placeholder:text-gray-400 dark:placeholder:text-gray-500
                           focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                required
                className="w-full px-4 py-3
                           border border-gray-200 dark:border-gray-700
                           bg-white dark:bg-gray-800
                           text-gray-900 dark:text-gray-100
                           rounded-lg outline-none
                           placeholder:text-gray-400 dark:placeholder:text-gray-500
                           focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Position */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Position
              </label>

              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                placeholder="e.g. Frontend Developer"
                required
                className="w-full px-4 py-3
                           border border-gray-200 dark:border-gray-700
                           bg-white dark:bg-gray-800
                           text-gray-900 dark:text-gray-100
                           rounded-lg outline-none
                           placeholder:text-gray-400 dark:placeholder:text-gray-500
                           focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Department */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Department
              </label>

              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
                className="w-full px-4 py-3
                           border border-gray-200 dark:border-gray-700
                           bg-white dark:bg-gray-800
                           text-gray-900 dark:text-gray-100
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
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Status
              </label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
                className="w-full px-4 py-3
                           border border-gray-200 dark:border-gray-700
                           bg-white dark:bg-gray-800
                           text-gray-900 dark:text-gray-100
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
                className="px-5 py-3
                           border border-gray-200 dark:border-gray-700
                           rounded-lg font-semibold
                           text-gray-700 dark:text-gray-300
                           hover:bg-gray-50 dark:hover:bg-gray-800
                           transition"
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
