import React, { useState } from "react";
import "./FilterInput.css";

const FilterInput = (props) => {
  const [userInput, setUserInput] = useState("");
  const [filteredFruit, setFilteredFruit] = useState("");


  return (
    <div className="filterDiv">
      <h3 className="fruitH3">List of Fruits</h3>
      <table className="table">
        <tr>
          <th>Fruit</th>
          <th>Color</th>
          <th>Seeds</th>
        </tr>

        {props.items
          .filter((i, index) => {
            if (i.fruit.toLowerCase().includes(userInput.toLowerCase()))
              return i;
            if (i.color.toLowerCase().includes(userInput.toLowerCase()))
              return i;
            if (i.seeds.toLowerCase().includes(userInput.toLowerCase()))
              return i;
          })
          .map((i) => {
            return (
              <tr>
                <td>{i.fruit}</td>
                <td>{i.color}</td>
                <td>{i.seeds}</td>
              </tr>
            );
          })}
      </table>
      <div className="inputDiv">
        <input
          placeholder="Enter value here"
          className="input"
          onChange={(e) => setUserInput(e.target.value)}
        ></input>
      </div>
    </div>
  );
};

export default FilterInput;
