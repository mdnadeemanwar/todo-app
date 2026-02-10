import React, { useContext } from "react";    
import { Link, useParams } from "react-router-dom";
import { Authcontext } from "./security/AuthContext";
import apiCallForHelloWorld,{apiCallForHelloWorldWithPathVariable} from "./api/HelloWorldApiCall";

function Welcome() {
  const params = useParams();
  console.log("params in welcome component", params);
  const username = params.username;
  const { isAuthenticated } = useContext(Authcontext);

  const addNewTodo = async() => {
    // Logic to add a new todo item
    console.log("Add new todo clicked");
  //  const apiresponsedata = await apiCallForHelloWorld(`http://localhost:8080/hello-world/path-variable/${username}`);
  //   console.log("API response data in welcome component", apiresponsedata.message);

    const apiresponsedata2 = await apiCallForHelloWorldWithPathVariable(username);
    console.log("API response data in welcome component with path variable", apiresponsedata2.message);
  };

  return (

    <div>
      {isAuthenticated ? (
        <div>
          <h1>Welcome to my todo app, {username}!</h1>
          <h2>Manage your todo <Link to="/todos">here</Link></h2>
          <button onClick={addNewTodo}>Add a todo</button>
        </div>
      ) : (
        <h1>Please log in to access your todo list.</h1>
      )}
    </div>
  );
}

export default Welcome; 