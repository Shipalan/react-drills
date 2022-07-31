import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TextBox from "./components/TextBox";

function App() {
  return (
    <div id="root">
      <div className="textBox">
        <TextBox></TextBox>
      </div>
    </div>
  );
}

export default App;
