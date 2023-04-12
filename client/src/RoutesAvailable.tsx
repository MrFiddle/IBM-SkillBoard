import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";

const RoutesAvailable = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
    </Routes>
  );
};

export default RoutesAvailable;
