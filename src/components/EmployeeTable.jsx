import React, { Component } from "react";
// import employees from "../employees.json";
import SearchForm from "./SearchForm";
import TableHead from "./TableHead";
import axios from "axios"

class EmployeeTable extends Component {
  state = {
    // employees: employees,
    employees: [],
    filteredEmployees: [],
    searchFor: "id",
    search: "",
    orderBy: "id",
    order: 1
  };

  componentDidMount(){
    this.getRandomEmployees(this.setState)
  }

  getRandomEmployees = () => {
    const url = "https://randomuser.me/api/?inc=name,email,phone&results=20&nat=us";
    axios.get(url).then(res=>{
      let id = 1
      const employees = res.data.results.map(employee=>{
        let newEmployeeObject = {
          id:id,
          firstName: employee.name.first,
          lastName: employee.name.last,
          email: employee.email,
          phone: employee.phone
        }
        id++
        return newEmployeeObject
      })
      setTimeout(this.setState({ employees: employees, filteredEmployees: employees }), 2000);
    })
    .catch(err => console.log(err));
  }

  filterEmployees = () => {
    if (this.state.search === "") {
      this.setState({ filteredEmployees: this.state.employees });
    } else {
      const updatedEmployees = this.state.employees.filter((employee) =>
        employee[this.state.searchFor].toString().includes(this.state.search)
      );
      this.setState({ filteredEmployees: updatedEmployees });
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
              <TableHead scope="col" orderBy={this.state.orderBy} value="Phone" name="phone" sortEmployees={this.sortEmployees}/>
            </tr>
          </thead>
          <tbody>
            {this.state.filteredEmployees.map(
              ({ id, firstName, lastName, email, phone }) => {
                return (
                  <tr>
                    <td>{id}</td>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
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
