import React from "react";    
import { useParams } from "react-router-dom";

function Welcome() {
  const params = useParams();
  console.log("params in welcome component", params);
  const username = params.username; 

  return (
    <div>
      <h1>Welcome to my todo app, {username}!</h1>
    </div>
  );
}

export default Welcome; 