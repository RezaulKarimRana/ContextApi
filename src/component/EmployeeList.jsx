import React from "react";
import { EmployeesHooks } from "../hooks/EmployeesHooks";
import Employee from "./Employee";

const EmployeeList = () => {
  const { employees } = EmployeesHooks();
  return (
    <div className=" grid grid-cols-4 gap-3">
      {employees.map((employee, index) => (
        <Employee key={index} employee={employee} />
      ))}
    </div>
  );
};

export default EmployeeList;
