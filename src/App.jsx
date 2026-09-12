import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
// import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import About from "./pages/About";
import Employee from "./pages/Employee";
import AddEmployee from "./pages/AddEmployee";
import EmployeeProfile from "./pages/EmployeeProfile";
import employeeData from "./data/employeeData";
import EditEmployee from "./pages/EditEmployee";
import Dashboard from "./pages/Dashboard";
import ManageEmployee from "./pages/ManageEmployee";
import Features from "./pages/Features";
// import { Features } from "tailwindcss";

const App = () => {
  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem("employees");

    return savedEmployees ? JSON.parse(savedEmployees) : employeeData;
  });
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/employees" element={<Employee />} /> */}
        {/* <Route path="/employees" element={<Employee employees={employees} />} /> */}
        <Route path="/employees" element={<Employee employees={employees} />} />
        {/* <Route path="/addemployee" element={<AddEmployee />} /> */}
        <Route
          path="/addemployee"
          element={<AddEmployee setEmployees={setEmployees} />}
        />
        <Route
          path="/employees/:id"
          element={<EmployeeProfile employees={employees} />}
        />
        <Route
          path="/employees/:id/edit"
          element={
            <EditEmployee employees={employees} setEmployees={setEmployees} />
          }
        />
        <Route
          path="/dashboard"
          element={<Dashboard employees={employees} />}
        />
        <Route
          path="/manage-employees"
          element={
            <ManageEmployee employees={employees} setEmployees={setEmployees} />
          }
        />
        <Route path="/features" element={<Features />} />
      </Routes>
    </div>
  );
};

export default App;
