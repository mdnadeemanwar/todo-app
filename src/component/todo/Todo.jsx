import React, { useState } from "react";
// import './Todo.css';

function Todo() {
  return (
    <div>
      <LoginComponent />
    </div>
  );
}

function LoginComponent() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (username === "admin" && password === "password") {
      setShowSuccess(true);
      setShowError(false);
      setUsername('')
      setPassword('')
    } else {
      setShowError(true);
      setShowSuccess(false);
    }
  }

  function SuccessMessage() {
    return <div>Authentication successful</div>;
  }

  function FailureMessage() {
    return (
      <div>Authentication failed !! , Please enter correct credential</div>
    );
  }

  return (
    <div>
      {showSuccess && <SuccessMessage />}
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

export default Todo;
