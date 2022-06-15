import "./styles.css";
import { useState } from "react";

export default function Signup() {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const user = { username, email, password };
    console.log(user);
  }

  return (
    <div className="Signup">
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

          <label> Email: </label>
          <input
            placeholder="Email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label> Password: </label>
          <input
            placeholder="Password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <br />

          <button> Sign Up! </button>
          <p> Already have an account Log In!</p>
        </form>
      }
    </div>
  );
}
