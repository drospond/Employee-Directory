import React, { Component } from "react";
import employees from "../employees.json";

class EmployeeTable extends Component {
  state = {
    employees: employees,
  };

  render() {
    return (
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
    );
  }
}

export default EmployeeTable;
