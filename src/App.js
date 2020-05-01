import React, { Component } from "react";
// import FriendCard from "./components/FriendCard";
import Title from "./components/Title";
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
      <div className="container">
        <div className="col">
          <div className="row">
            <Title>Employees Table</Title>
            <EmployeeTable />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
