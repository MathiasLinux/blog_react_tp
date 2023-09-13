import React from 'react';
import "../Styles/header.css";

function Header({title, description, url}) {
    return (
        <div className="headerDiv" style={{ backgroundImage: `url(${url})` }}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default Header;