//borrowed from activity 19
import React from "react";

function SearchForm(props) {
  return (
      <div className="form-group">
        <label htmlFor="search">Filter by: 
          <select id="columns" onChange={(event)=>props.setSearchFor(event)}>
            <option value="id">ID</option>
            <option value="firstName">First Name</option>
            <option value="lastName">Last Name</option>
            <option value="email">Email</option>
            <option value="department">Department</option>
          </select>
        </label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Filter"
          id="search"
        />
      </div>
  );
}

export default SearchForm;
