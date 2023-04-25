import Header from "../../components/Header/Header";
import TeamRow from "../../components/TeamRow/TeamRow";
import TeamCard from "../../components/TeamCard/TeamCard";

const MyTeamsScreen = () => {
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
      role: "UX/UI Designer",
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

  const dummyData2 = {
    id: "2",
    team_name: "Team A",
  };

  return (
    <div className="background-screen overflow-auto">
      <Header title={"My Teams"} />
      {/* <TeamRow user={dummyData} /> */}
      <TeamCard team={dummyData2} />
      <TeamCard team={dummyData2} />
      <TeamCard team={dummyData2} />
    </div>
  );
};

export default MyTeamsScreen;
