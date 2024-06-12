import React, { useState } from "react";
import { EmployeesHooks } from "../hooks/EmployeesHooks";

const NewEmployee = () => {
  const { employees, setEmployees } = EmployeesHooks();
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [contactNo, setContactNo] = useState("");
  const handleAddNew = (e) => {
    e.preventDefault();
    const newId =
      employees.length > 0
        ? Math.max(...employees.map((employee) => employee.id))
        : "0";
    const newEmployee = {
      id: newId + 1,
      name: name,
      designation: designation,
      contactNo: contactNo,
    };
    setName("");
    setDesignation("");
    setContactNo("");
    setEmployees((prev) => [...prev, newEmployee]);
  };
  return (
    <div className="pt-3 text-center mb-6 bg-white">
      <div className="font-bold">Add New Employee</div>
      <form className="w-2/3 mx-auto p-4">
        <input
          value={name}
          className="w-full bg-white border border-black p-3 focus:outline-none rounded"
          onChange={(e) => setName(e.target.value)}
          placeholder="please enter name"
        />
        <input
          value={designation}
          className="mt-1 w-full bg-white border border-black p-3 focus:outline-none rounded"
          onChange={(e) => setDesignation(e.target.value)}
          placeholder="please enter designation"
        />
        <input
          value={contactNo}
          className="mt-1 w-full bg-white border border-black p-3 focus:outline-none rounded"
          onChange={(e) => setContactNo(e.target.value)}
          placeholder="please enter contact no"
        />
        <button
          className="bg-blue-500 py-2 px-2 rounded-md text-white mt-6"
          onClick={handleAddNew}
        >
          Add New
        </button>
      </form>
    </div>
  );
};

export default NewEmployee;
