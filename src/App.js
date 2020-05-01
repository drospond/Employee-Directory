import React from "react";
import Title from "./components/title.jsx";
import EmployeeTable from "./components/EmployeeTable";

const App = () => {
  return (
    <div>
      <Title>Employees Table</Title>
        <div className="container">
          <div className="col">
            <div className="row">
              <EmployeeTable />
            </div>
          </div>
        </div>
    </div>
  );
};

export default App;
