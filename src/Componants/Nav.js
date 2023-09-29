import React from 'react';
import {Link} from "react-router-dom";
import arch from "../Imgs/arch.png";

const Nav = () => {
    // Verify if the localStorage has a token
    // If it is the case we display the logout button
    // Else we display the login button
    let token = localStorage.getItem("token")
    let loginButton
    if (token !== null) {
        loginButton = <li><Link to="/logout">Déconnexion</Link></li>
    } else {
        loginButton = <li><Link to="/login">Connexion</Link></li>
    }
    return (
        <nav className="navTop">
            <h1><Link to="/">
                <img src={arch} alt="Un manchot représentant Linux nommé Tux"/></Link></h1>
            <ul className="navUlTop">
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/about">À Propos</Link></li>
                <li><Link to="/news">Actualités</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                {loginButton}
            </ul>
        </nav>
    );
};

export default Nav;