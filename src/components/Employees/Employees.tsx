import EmployeesTable from "../EmployeesTable/EmployeesTable";
import { User } from "../../../lib/types";
import "./Employees.css";

interface Props {
  employees: User[];
  error: any;
  isLoading: boolean;
}

const Employees = ({ employees }: Props) => {
  return <EmployeesTable employees={employees} />;
};

export default Employees;
