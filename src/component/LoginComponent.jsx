import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";     
import { Authcontext } from "./security/AuthContext";

export default function LoginComponent() {
  const [showError, setShowError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { login } = useContext(Authcontext);

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   if (login(username, password)) {
  //     setUsername("");
  //     setPassword("");
  //     navigate(`/welcome/${username}`);
  //   } else {
  //     setShowError(true);
  //   }
  // }

  async function handleSubmit(event) {
  event.preventDefault();

  const success = await login(username, password);

  if (success) {
    navigate(`/welcome/${username}`);
  } else {
    setShowError(true);
  }
}

  function FailureMessage() {
    return (
      <div>Authentication failed !! , Please enter correct credential</div>
    );
  }

  return (
    <div>
      {showError && <FailureMessage />}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
