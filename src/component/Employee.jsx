import React from "react";
import { EmployeesHooks } from "../hooks/EmployeesHooks";

const Employee = ({ employee }) => {
  const { employees, setEmployees } = EmployeesHooks();
  const { id, name, designation, contactNo } = employee;
  const handleDelete = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };
  return (
    <div className="bg-white shadow-md px-2 py-3 rounded-md text-center">
      <p className="text-base font-semibold">{id}</p>
      <p className="text-lg font-bold">{name}</p>
      <p className="text-lg font-bold">{designation}</p>
      <p className="text-lg font-bold">{contactNo}</p>
      <button
        className="bg-red-700 px-3 py-1 rounded-md mt-3 text-white"
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Employee;
