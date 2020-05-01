//borrowed from activity 19
import React from "react";

function SearchForm(props) {
  return (
      <div className="form-group">
        <label htmlFor="search">Filter by: 
          <select id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
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
