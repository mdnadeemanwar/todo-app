import { createContext,useState } from "react";

export const Authcontext = createContext();

function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Replace with actual authentication logic
    const [number, setNumber] = useState(0);

    // setInterval(() => {    
    //     setNumber((prevNumber) => prevNumber + 1);
    // }, 100000);

    function login(username, password) {
        if (username === "admin" && password === "password") {
            setIsAuthenticated(true);
            return true;
        } else {
            setIsAuthenticated(false);
            return false;
        }
    }

    function logout() {
        setIsAuthenticated(false);
    }   

     

    return (
        <Authcontext.Provider value={{ number, setNumber, isAuthenticated, setIsAuthenticated , login, logout}}>
            {children}
        </Authcontext.Provider>
    );
}

export default AuthProvider;