import React, { Component } from "react";
import employees from "../employees.json";
import SearchForm from "./SearchForm";
import TableHead from "./TableHead";

class EmployeeTable extends Component {
  state = {
    employees: employees,
    search: ""
  };

  filterEmployees = () => {
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

  sortEmployees = (property) => {
    let sortedEmployees = this.state.employees.sort((a, b) => ( a[property] > b[property]) ? 1 : -1 )
    this.setState({employee: sortedEmployees})
  }

  render() {
    return (
      <>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <table className="table">
          <thead>
            <tr>
              <TableHead scope="col" value="ID" name="id" sortEmployees={this.sortEmployees}/>
              <TableHead scope="col" value="First Name" name="firstName" sortEmployees={this.sortEmployees}/>
              <TableHead scope="col" value="Last Name" name="lastName" sortEmployees={this.sortEmployees}/>
              <TableHead scope="col" value="Email" name="email" sortEmployees={this.sortEmployees}/>
              <TableHead scope="col" value="Department" name="department" sortEmployees={this.sortEmployees}/>
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
