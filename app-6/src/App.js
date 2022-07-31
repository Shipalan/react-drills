import "./App.css";
import React, { useState } from "react";
import ToDoList from "./Components/ToDoList";

function App() {
  const [toDo, setToDo] = useState([]);
  

  return (
    <div>
      <h2>Add a task!</h2>
      <form>
        <label>
          <input
            placeholder="Task here"
            name="addTask"
            onSubmit={(e) => setToDo(e.target.value)}
          ></input>
        </label>
        <button>Submit</button>
      </form>
      <ToDoList item={toDo}></ToDoList>
    </div>
  );
}

export default App;
