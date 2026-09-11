import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const EmployeeCard = ({ employee, onDelete }) => {
  return (
    <div
      className="bg-white rounded-2xl border border-gray-100
                    shadow-sm overflow-hidden
                    hover:shadow-lg hover:-translate-y-1
                    transition-all duration-300"
    >
      {/* Top section */}
      <div className="bg-green-50 h-24"></div>

      {/* Employee photo */}
      <div className="flex justify-center -mt-12">
        <img
          src={employee.image}
          alt={employee.name}
          className="w-24 h-24 rounded-full object-cover
                     border-4 border-white shadow-md"
        />
      </div>

      {/* Employee information */}
      <div className="px-5 pb-5 text-center">
        <h2 className="text-lg font-bold text-gray-900 mt-3">
          {employee.name}
        </h2>

        <p className="text-green-700 font-medium text-sm mt-1">
          {employee.position}
        </p>

        <p className="text-gray-500 text-sm mt-1">{employee.department}</p>

        {/* Status */}
        <div className="mt-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold
              ${
                employee.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
          >
            ● {employee.status}
          </span>
        </div>

        {/* Contact */}
        <div className="mt-5 space-y-2 text-left">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Mail size={16} />
            {employee.email}
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Phone size={16} />
            {employee.phone}
          </div>
        </div>

        {/* View profile */}
        <Link
          to={`/employees/${employee.id}`}
          className="block mt-5 bg-green-700 text-white
             py-2.5 rounded-lg font-semibold
             hover:bg-green-800 transition"
        >
          View Profile →
        </Link>

        <Link
          to={`/employees/${employee.id}/edit`}
          className="block mt-2 border border-green-200 text-green-700
             py-2.5 rounded-lg font-semibold
             hover:bg-green-50 transition"
        >
          Edit Employee
        </Link>

        <button
          onClick={() => onDelete(employee.id)}
          className="w-full mt-2 border border-red-200 text-red-600
             py-2.5 rounded-lg font-semibold
             hover:bg-red-50 transition"
        >
          Delete Employee
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
