import Employees from "./Employees/Employees";
import EmployeeSearchBar from "./EmployeesSearchBar/EmployeeSearchBar";

const EmployeesContainer = () => {
  // export interface User {
  //   id: string;
  //   name: string;
  //   last_name: string;
  //   email: string;
  //   role: string;
  // }

  const data = [
    {
      id: "user1",
      name: "Juan Pablo",
      last_name: "Perez Duran",
      email: "jppd0657@ibm.com",
      role: "Manager",
    },
    {
      id: "user2",
      name: "John",
      last_name: "Doe",
      email: "johndoe@ibm.com",
      role: "Frontend Developer",
    },
    {
      id: "user3",
      name: "Jane",
      last_name: "Doe",
      email: "janedoe@ibm.com",
      role: "Frontend Developer",
    },
    {
      id: "user4",
      name: "Hugo",
      last_name: "Salmon",
      email: "hugosalmon@ibm.com",
      role: "Backend Developer",
    },
    {
      id: "user5",
      name: "Hermann",
      last_name: "Mijangos",
      email: "hermannmij@ibm.com",
      role: "Backend Developer",
    },
    {
      id: "user4",
      name: "Manola",
      last_name: "Zaragoza",
      email: "manolazaragoza@ibm.com",
      role: "Manager",
    },
    {
      id: "user7", // New user
      name: "Alice",
      last_name: "Johnson",
      email: "alicejohnson@ibm.com",
      role: "Data Scientist",
    },
    {
      id: "user8", // New user
      name: "Bob",
      last_name: "Smith",
      email: "bobsmith@ibm.com",
      role: "Cloud Architect",
    },
    {
      id: "user7",
      name: "Bob",
      last_name: "Johnson",
      email: "bobjohnson@ibm.com",
      role: "Database Administrator",
    },
    {
      id: "user8",
      name: "Eva",
      last_name: "Martinez",
      email: "evamartinez@ibm.com",
      role: "Data Scientist",
    },
    {
      id: "user6",
      name: "Maria",
      last_name: "Garcia",
      email: "mariagarcia@ibm.com",
      role: "Data Analyst",
    },
    {
      id: "user7",
      name: "Carlos",
      last_name: "Lopez",
      email: "carloslopez@ibm.com",
      role: "System Administrator",
    },
    {
      id: "user8",
      name: "Laura",
      last_name: "Rodriguez",
      email: "laurarodriguez@ibm.com",
      role: "Software Engineer",
    },
    {
      id: "user13",
      name: "Gabriel",
      last_name: "Lopez",
      email: "gabriellopez@ibm.com",
      role: "DevOps Engineer",
    },
    {
      id: "user14",
      name: "Sophia",
      last_name: "Nguyen",
      email: "sophianguyen@ibm.com",
      role: "Product Manager",
    },
    {
      id: "user15",
      name: "Oscar",
      last_name: "Fernandez",
      email: "oscarfernandez@ibm.com",
      role: "QA Tester",
    },
  ];

  return (
    <div className="flex flex-col h-[90vh]">
      <EmployeeSearchBar />
      <Employees employees={data} error={"error"} isLoading={false} />
    </div>
  );
};

export default EmployeesContainer;
