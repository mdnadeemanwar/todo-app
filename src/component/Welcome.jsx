import React from "react";    
import { Link, useParams } from "react-router-dom";

function Welcome() {
  const params = useParams();
  console.log("params in welcome component", params);
  const username = params.username;

  return (
    <div>
      <h1>Welcome to my todo app, {username}!</h1>
      <h2>manage your todo <Link to="/todos">here</Link></h2>
    </div>
  );
}

export default Welcome; 