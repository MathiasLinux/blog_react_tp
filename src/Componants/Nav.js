import React from 'react';
import {Link} from "react-router-dom";
import arch from "../Imgs/arch.png";

const Nav = () => {
    return (
        <nav className="navTop">
            <h1><Link to="/">
            <img src={arch} alt="Un manchot représentant Linux nommé Tux" /></Link></h1>
            <ul className="navUlTop">
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/about">À Propos</Link></li>
                <li><Link to="/news">Actualités</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;