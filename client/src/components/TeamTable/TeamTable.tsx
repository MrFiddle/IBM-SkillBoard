import React from "react";
import TeamCard from "../TeamCard/TeamCard";

const TeamTable = () => {
  const employees = [
    {
      id: "1",
      name: "Emilio",
      last_name: "Martinez",
      email: "emilio@ibm.mx",
      role: "Front-End Developer",
    },
    {
      id: "2",
      name: "Gael",
      last_name: "Laporta",
      email: "gael@ibm.mx",
      role: "Front-End Developer",
    },
    {
      id: "3",
      name: "Juan Pablo",
      last_name: "Perez Duran",
      email: "juan@ibm.mx",
      role: "Product Designer",
    },
    {
      id: "4",
      name: "Alyx",
      last_name: "Miranda",
      email: "alyx@ibm.mx",
      role: "Back-End Developer",
    },
    {
      id: "5",
      name: "Alejandro",
      last_name: "Rodri",
      email: "alex@ibm.mx",
      role: "Back-End Developer",
    },
  ];
  return <div>TeamTable</div>;
};

export default TeamTable;
