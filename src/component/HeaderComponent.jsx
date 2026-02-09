import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from './security/AuthContext';

const headerStyle = {
    background: '#96b5f1ff',
    color: '#ffffff',
    padding: '15px 20px',
    display: 'flex',
    alignItems: 'center',   
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    marginHorizontal: '20px ',
};

const titleStyle = {
    margin: 0,
    fontSize: '1.5rem',
    // fontWeight: 600
};

const navStyle = {
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
};

const linkStyle = {
    color: 'rgba(255,255,255,0.9)',
    textDecoration: 'none',
    fontSize: '0.95rem'
};

const HeaderComponent = ({ title = 'Todo App', showNav = true }) => {
    const {  isAuthenticated } = useContext(Authcontext);
    console.log('HeaderComponent rendered, isAuthenticated:', isAuthenticated);
    return (
        <header style={{ ...headerStyle, alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <h1 style={titleStyle}>{title}</h1>
                 {/* <nav style={navStyle}>
                    <Link to="/" style={linkStyle}>Home</Link>
                    <Link to="/todos" style={linkStyle}>Todos</Link>
                </nav> */}
                   {isAuthenticated && (
                    <nav style={navStyle}>
                        <Link to="/" style={linkStyle}>Home</Link>
                        <Link to="/todos" style={linkStyle}>Todos</Link>
                    </nav>
                )}
            </div>

            <nav style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                {isAuthenticated ? (
                    <Link to="/logout" style={linkStyle}>Logout</Link>
                ) : (
                    <Link to="/" style={linkStyle}>Login</Link>
                )}
            </nav>
        </header>
    );
};

export default HeaderComponent;             