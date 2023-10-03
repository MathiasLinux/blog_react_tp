// Importation of React
import React from 'react';

// Importation of the style used by this componant
import "../Styles/header.css";

/***
 * Header
 * A componant to display a header on a page
 * @param title The title to be displayed on the page
 * @param description The description to be displayed on the page
 * @param url The url of the image to be displayed on the page
 */
function Header({title, description, url}) {
    return (
        <div className="headerDiv" style={{ backgroundImage: `url(${url})` }}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default Header;