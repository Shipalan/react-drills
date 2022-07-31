import React, { useState } from "react";

const PeopleList = (props) => {
  let nameList = props.names.map((e) => {
    return e;
  });
  return (
    <div>
      <ul>
        <li>{nameList[0]}</li>
        <li>{nameList[1]}</li>
        <li>{nameList[2]}</li>
      </ul>
    </div>
  );
};

export default PeopleList;
