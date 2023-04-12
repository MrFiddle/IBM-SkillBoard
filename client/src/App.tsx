import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesAvailable from "./RoutesAvailable";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RoutesAvailable />
      </BrowserRouter>
    </div>
  );
}

export default App;
