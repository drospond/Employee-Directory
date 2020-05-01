import React, { Component } from "react";
import Title from "./components/title.jsx";
import employees from "./employees.json";
import EmployeeTable from "./components/EmployeeTable";

class App extends Component {
  state = {
    employees,
  };

  removeEmployee = (id) => {
    const employees = this.state.employees.filter(
      (employee) => employee.id !== id
    );
    this.setState({ employees });
  };

  render() {
    return (
      <>
        <Title>Employees Table</Title>
        <div className="container">
          <div className="col">
            <div className="row">
              <EmployeeTable />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
