import Header from "../../components/Header/Header";
import TeamRow from "../../components/TeamRow/TeamRow";

const MyTeamsScreen = () => {
  const dummyData = {
    name: "Juan Pablo",
    lastName: "Perez Duran",
    email: "jppd@ibm.mx",
    role: "Front-End Developer",
  };

  return (
    <div className="background-screen">
      <Header title={"My Teams"} />
      <TeamRow user={dummyData} />
    </div>
  );
};

export default MyTeamsScreen;
