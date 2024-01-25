import SidebarProfile from "./SidebarProfile/SidebarProfile";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading/Loading";

const SidebarProfileContainer = () => {
  const data = {
    id: "ninazaragoza",
    name: "Nina Simone",
    last_name: "Zaragoza Caballero",
    email: "ninazaragoza@ibm.com",
    role: "Administradora General",
  };

  return <SidebarProfile user={data} />;
};

export default SidebarProfileContainer;
