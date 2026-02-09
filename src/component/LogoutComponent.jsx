import React, { useEffect ,useContext} from 'react';
import { Authcontext } from './security/AuthContext';
import { Link } from 'react-router-dom';

const LogoutComponent = () => {
    const {  setIsAuthenticated } = useContext(Authcontext);
    useEffect(() => {   
        // Perform logout logic here
        setIsAuthenticated(false);  
    }, []);

    return (
        <div>
            <h1>You have successfully logged out</h1>
            <Link to="/" style={{ color: 'blue', textDecoration: 'underline' }}>Go to Login</Link>
        </div>
    );
};

export default LogoutComponent;