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
      <>
        <Title>Employees Table</Title>
        <EmployeeTable />
      </>
    );
  }
}

export default App;
