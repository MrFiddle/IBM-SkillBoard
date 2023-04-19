import CertificationRow from "../../components/CertificationRow/CertificationRow";
import DashboardTable from "../../components/DashboardTable/DashboardTable";
import "./DashboardScreen.css";

const certificate = {
  id: "1",
  name: "SCRUM Master Certificate",
  type: "IBM",
  categories: [
    { id: "1", name: "SCRUM" },
    { id: "2", name: "Organization" },
  ],
  expiration_date: "Feb 14th, 2099",
};

const DashboardScreen = () => {
  return <div className="background-screen">
    <DashboardTable />
  </div>;
};

export default DashboardScreen;
