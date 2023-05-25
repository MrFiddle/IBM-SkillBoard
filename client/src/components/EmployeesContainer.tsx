import Employees from "./Employees/Employees";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

const EmployeesContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const queryClient = useQueryClient();

  const changeTerm = (change: string) => {
    setSearchTerm(change);
    queryClient.invalidateQueries(["employees"]);
  };

  const fetchEmployees = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/search/employees/${searchTerm}`,
      { withCredentials: true }
    );
    return response.data;
  };

  const { isLoading, error, data } = useQuery([`employees`], fetchEmployees);

  return (
    <div>
      <Employees employees={data} error={error} isLoading={isLoading} />;
    </div>
  );
};

export default EmployeesContainer;
