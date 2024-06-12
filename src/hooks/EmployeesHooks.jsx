import { useContext } from "react";
import { EmployeesContext } from "../context/EmployeesContext";

export const EmployeesHooks = () => {
  return useContext(EmployeesContext);
};
