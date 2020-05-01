import React, { Component } from "react";
import employees from "../employees.json";
import SearchForm from "./SearchForm";
import TableHead from "./TableHead";

class EmployeeTable extends Component {
  state = {
    employees: employees,
    searchFor: "id",
    search: "",
    orderBy: "id",
    order: 1
  };

  filterEmployees = () => {
    if (this.state.search === "") {
      this.setState({ employees: employees });
    } else {
      const updatedEmployees = employees.filter((employee) =>
        employee[this.state.searchFor].toString().includes(this.state.search)
      );
      this.setState({ employees: updatedEmployees });
    }
  };

  setSearchFor = (event) => {
    console.log(event.target.options[event.target.selectedIndex].value)
    const value = event.target.options[event.target.selectedIndex].value;
    this.setState({
        searchFor: value
    })
  }

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
    setTimeout(() => {this.filterEmployees()}, 500);
  };

  sortEmployees = (property) => {
    let order = this.state.order;
    let reverseOrder = order * (-1);
    let sortedEmployees = this.state.employees.sort((a, b) => ( a[property] > b[property]) ? order : reverseOrder )
    this.setState({employee: sortedEmployees, order: reverseOrder, orderBy: property})
  }

  render() {
    return (
      <>
        <SearchForm
          search={this.state.search}
          searchFor={this.state.searchFor}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          setSearchFor={this.setSearchFor}
        />
        <table className="table">
          <thead>
            <tr>
              <TableHead scope="col" orderBy={this.state.orderBy} value="ID" name="id" sortEmployees={this.sortEmployees}/>
              <TableHead scope="col" orderBy={this.state.orderBy} value="First Name" name="firstName" sortEmployees={this.sortEmployees}/>
              <TableHead scope="col" orderBy={this.state.orderBy} value="Last Name" name="lastName" sortEmployees={this.sortEmployees}/>
              <TableHead scope="col" orderBy={this.state.orderBy} value="Email" name="email" sortEmployees={this.sortEmployees}/>
              <TableHead scope="col" orderBy={this.state.orderBy} value="Department" name="department" sortEmployees={this.sortEmployees}/>
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
