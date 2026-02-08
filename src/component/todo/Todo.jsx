import React, { useState } from "react";
// import './Todo.css';
import { BrowserRouter, Routes, useNavigate ,Route} from "react-router-dom";
import Welcome from "../Welcome";
import ErrorComponent from "../ErrorComponent";
import Todos from "../Todos";

function Todo() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/welcome/:username" element={<Welcome />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/*" element={<ErrorComponent />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

function LoginComponent() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  function handleSubmit(event) {
    event.preventDefault();
    if (username === "admin" && password === "password") {
      setShowSuccess(true);
      setShowError(false);
      setUsername('')
      setPassword('')
      navigate(`/welcome/${username}`);

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
