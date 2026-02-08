import React, { use } from "react";

const user = {
  name: "Nadeen",
  Mob: "23232",
  address: {
    city: "patna",
    country: "india",
  },
  profile : ["insta","fb","whatsapp"],
  printProfile:()=>{
    console.log("this is user method inside the object with name",user.name)
  }
};

function FirstComponent() {
  return (
    <div>
      <h1>This is my first component from compoent folder</h1>
      <h2>Name: {user.name}</h2>
      <h2>Mobile: {user.Mob}</h2>
      <h3>Address: city: {user.address.city}, country: {user.address.country}</h3>
      <h3>Profile:{user.profile[0]}</h3>
      <h3>User profile method : {user.printProfile()}</h3>
    </div>
  );
}

export function SecondComponent() {
  return (
    <div>
      <h1>This is my second component</h1>
    </div>
  );
}

export default FirstComponent;
