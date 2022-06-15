import { useState } from "react";

export default function Login() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const user = { username, password };
    console.log(user);
  }

  return (
    <div className="Login">
      <h1> Login </h1>
      {
        <form onSubmit={handleSubmit}>
          <label> Username: </label>
          <input
            placeholder="Username"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label> Password: </label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <br />

          <button> Log In! </button>
        </form>
      }
    </div>
  );
}
