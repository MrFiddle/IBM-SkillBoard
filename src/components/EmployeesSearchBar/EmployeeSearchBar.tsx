import { BsSearch } from "react-icons/bs";
import "./EmployeeSearchBar.css";

const EmployeeSearchBar = () => {
  return (
    <div className="flex flex-row employees-filter">
      <div className="shadow-md text-sm employees-filter-search">
        <BsSearch />
        <input
          onChange={(e) => {
            // changeTerm(e.target.value);
          }}
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default EmployeeSearchBar;
