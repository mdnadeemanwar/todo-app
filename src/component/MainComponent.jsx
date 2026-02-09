import { useContext } from "react";
// import './Todo.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
  if (isAuthenticated) {
    return children;
  }
  return null;
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
          <Route path="/logout" element={<LogoutComponent />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
      </AuthProvider>
    </>
  );
}



export default MainComponent;
