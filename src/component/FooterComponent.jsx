import React from 'react';

const FooterComponent = () => {
    const year = new Date().getFullYear();
    return (
        <footer style={{ textAlign: 'center', padding: '1rem 0', color: '#666' }}>
            <small>&copy; {year} Your Company. All rights reserved.</small>
        </footer>
    );
};

export default FooterComponent;