import { Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import Dashboard from "./screens/Dashboard";

const RoutesAvailable = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
      </Routes>
    );
  }
};

export default RoutesAvailable;
