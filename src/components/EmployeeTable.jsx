import React, { Component } from "react";

class EmployeeTable extends Component {
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
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>test1@mdo.com</td>
            <td>Hardware</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>test2@fat.com</td>
            <td>Hardware</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>test3@twitter.com</td>
            <td>Plumbing</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default EmployeeTable;
