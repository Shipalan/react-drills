import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

const btnStuff = () => {
    alert(`Username is: ${username}\n Password is: ${password}`)

    setUsername('')
    setPassword('')
}

  return (
    <div>
      <h3>Login</h3>
      <input placeholder="Username" type="username" value={username} onChange={e => setUsername(e.target.value)}></input>
      <input placeholder="Password" type='password' value={password} onChange={e => setPassword(e.target.value)}></input>
      <button onClick={() => btnStuff()}>Submit</button>
    </div>
  );
};

export default Login;
