import SidebarProfile from "./SidebarProfile/SidebarProfile";

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
