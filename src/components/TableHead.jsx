import React from "react";

const TableHead = (props) => {
  return (
    <>
      <th
        scope="col"
        name={props.name}
        onClick={(event) => {
          event.persist();
          props.sortEmployees(props.name);
        }}
        className={props.name === props.orderBy ? "orderBy" : ""}
      >
        {props.value}
      </th>
    </>
  );
};

export default TableHead;
