import React, { Component } from "react";
import employees from "../employees.json";
import SearchForm from "./SearchForm";

class EmployeeTable extends Component {
  state = {
    employees: employees,
    search: "",
  };

  filterEmployees = (id) => {
    if (this.state.search === "") {
      this.setState({ employees: employees });
    } else {
      const updatedEmployees = employees.filter((employee) =>
        employee.department.startsWith(this.state.search)
      );
      this.setState({ employees: updatedEmployees });
    }
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
    setTimeout(() => {this.filterEmployees()}, 500);
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Department</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map(
              ({ id, firstName, lastName, email, department }) => {
                return (
                  <tr>
                    <th scope="row">{id}</th>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{email}</td>
                    <td>{department}</td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </>
    );
  }
}

export default EmployeeTable;
