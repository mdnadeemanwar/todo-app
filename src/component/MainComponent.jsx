import { useContext } from "react";
// import './Todo.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./Welcome";
import ErrorComponent from "./ErrorComponent";
import Todos from "./Todos";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import LogoutComponent from "./LogoutComponent";
import LoginComponent from "./LoginComponent";
import AuthProvider, { Authcontext } from "./security/AuthContext";

function MainComponent() {


function AuthenticatedRoute({ children }) {
  const { isAuthenticated } = useContext(Authcontext) || {};
  console.log('AuthenticatedRoute rendered, isAuthenticated:', isAuthenticated);
  if(!isAuthenticated){
    return  <Navigate to="/" />
  }
  return children
  
}

  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <HeaderComponent title="Todo App" showNav={true} />
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/welcome/:username" element={
            <AuthenticatedRoute>
              <Welcome />
            </AuthenticatedRoute>
          } />
          <Route path="/todos" element={
            <AuthenticatedRoute>
              <Todos />
            </AuthenticatedRoute>
          } />
          <Route path="/*" element={<ErrorComponent />} />
          <Route path="/logout" element={
            <AuthenticatedRoute>
              <LogoutComponent />
            </AuthenticatedRoute>
          } />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
      </AuthProvider>
    </>
  );
}



export default MainComponent;
