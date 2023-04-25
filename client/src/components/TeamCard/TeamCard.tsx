import React from "react";
import { Team } from "../../../lib/types";
import TeamRow from "../TeamRow/TeamRow";
import "./TeamCard.css";

interface Props {
  team: Team;
}

const TeamCard = ({ team }: Props) => {
  const dummyData = [
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

  return (
    <div className="team-card-general drop-shadow-md">
      <div className="flex flex-row justify-start w-full">
        <h2 className="font-bold text-[1.4rem]">{team.team_name}</h2>
      </div>
      <div className="flex flex-col justify-start w-full overflow-auto">
        {dummyData.map((user) => (
          <TeamRow user={user} />
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
