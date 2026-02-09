import React, { useContext } from "react";    
import { Link, useParams } from "react-router-dom";
import { Authcontext } from "./security/AuthContext";

function Welcome() {
  const params = useParams();
  console.log("params in welcome component", params);
  const username = params.username;
  const { isAuthenticated } = useContext(Authcontext);

  return (

    <div>
      {isAuthenticated ? (
        <div>
          <h1>Welcome to my todo app, {username}!</h1>
          <h2>Manage your todo <Link to="/todos">here</Link></h2>
        </div>
      ) : (
        <h1>Please log in to access your todo list.</h1>
      )}
    </div>
  );
}

export default Welcome; 