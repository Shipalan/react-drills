import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PeopleList from "./components/PeopleList";

function App() {
  const people = [<h2>Alan</h2>, <h2>Nate</h2>, <h2>Aubrey</h2>];
  return (
    <div>
      <PeopleList names={people} />
    </div>
  );
}

export default App;
