import React, { useState } from "react";
import "./TextBox.css";

const TextBox = () => {
  const [userInput, setUserInput] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const handleChange = (v) => {
    setUserMessage(v);
  };

  return (
    <div>
      <input
        onChange={(e) => setUserInput(handleChange(e.target.value))}
        className="input"
        placeholder="Type here"
      ></input>
      <p>Users message is: {userMessage}</p>
    </div>
  );
};

export default TextBox;
