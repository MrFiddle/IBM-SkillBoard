import TeamTable from "./TeamTable/TeamTable";

const TeamTableContainer = () => {
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
