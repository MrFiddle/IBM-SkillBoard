import { BrowserRouter } from "react-router-dom";
import RoutesAvailable from "./RoutesAvailable";
import "./App.css";

function App() {
  return (
    <div className="ibm-font">
      <BrowserRouter>
        <RoutesAvailable />
      </BrowserRouter>
    </div>
  );
}

export default App;
