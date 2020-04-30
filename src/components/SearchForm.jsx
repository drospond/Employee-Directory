//borrowed from activity 19
import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Filter by email:</label>
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
    </form>
  );
}

export default SearchForm;
