import React from "react";
import { BsSearch } from "react-icons/bs";
import EmployeesTable from "../EmployeesTable/EmployeesTable";
import { User } from "../../../lib/types";
import "./Employees.css";
import Loading from "../Loading/Loading";

interface Props {
  employees: User[];
  error: any;
  isLoading: boolean;
}

const Employees = ({ employees, error, isLoading }: Props) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  if ((isLoading || !employees) && !error) {
    <Loading type={true} mainColor={false} />;
  }

  if (error) {
    return <p>Error</p>;
  }

  return (
    <div className="flex flex-col h-[90vh]">
      <div className="flex flex-row employees-filter">
        <div className="shadow-md text-sm employees-filter-search">
          <BsSearch />
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onSubmit={() => console.log(searchTerm)}
            placeholder="Search"
          />
        </div>
      </div>
      <EmployeesTable employees={employees} />
    </div>
  );
};

export default Employees;
