import TeamTable from "./TeamTable/TeamTable";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading/Loading";

const TeamTableContainer = () => {
  // export interface Team {
  //   id: string;
  //   name: string;
  // }

  // export interface TeamWithManager {
  //   team: Team;
  //   manager: User;
  // }

  // export interface TeamWithEmployeesManager {
  //   team: Team;
  //   employees: User[];
  //   manager: User;
  // }

  // export interface User {
  //   id: string;
  //   name: string;
  //   last_name: string;
  //   email: string;
  //   role: string;
  // }

  const data = {
    teams: [
      {
        team: {
          id: "team1",
          name: "Frontend",
        },
        employees: [
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
        ],
        manager: {
          id: "user1",
          name: "Juan Pablo",
          last_name: "Perez Duran",
          email: "jppd0657@gmail.com",
          role: "Manager",
        },
      },
      {
        team: {
          id: "team2",
          name: "Backend",
        },
        employees: [
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
        ],
        manager: {
          id: "user4",
          name: "Manola",
          last_name: "Zaragoza",
          email: "manolazaragoza@ibm.com",
          role: "Manager",
        },
      },
    ],
  };

  return <TeamTable teams={data.teams} />;
};

export default TeamTableContainer;
