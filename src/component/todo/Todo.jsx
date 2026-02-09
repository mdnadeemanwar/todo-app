import React from "react";
// import './Todo.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "../Welcome";
import ErrorComponent from "../ErrorComponent";
import Todos from "../Todos";
import HeaderComponent from "../HeaderComponent";
import FooterComponent from "../FooterComponent";
import LogoutComponent from "../LogoutComponent";
import LoginComponent from "../LoginComponent";

function Todo() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent title="Todo App" showNav={true} />
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/welcome/:username" element={<Welcome />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/*" element={<ErrorComponent />} />
          <Route path="/logout" element={<LogoutComponent />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}



export default Todo;
