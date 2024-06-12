import { EmployeesProvider } from "./context/EmployeesContext";
import EmployeeList from "./component/EmployeeList";
import NewEmployee from "./component/NewEmployee";

function App() {
  return (
    <>
      <EmployeesProvider>
        <div className="bg-gradient-to-tr from-indigo-200 border-t-indigo-50 w-full h-screen flex justify-center">
          <div className="w-5/6">
            <NewEmployee />
            <EmployeeList />
          </div>
        </div>
      </EmployeesProvider>
    </>
  );
}

export default App;
