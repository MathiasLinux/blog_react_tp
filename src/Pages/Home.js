// Importing the different module the page use
import React from 'react';
import {Link} from "react-router-dom";

// Importing the style for the page
import '../Styles/home.css'

const Home = () => {
    return (
        <main className="mainHome">
            <h2>Bienvenue sur le Blog du LinuxBoy :</h2>
            <div className="buttonsHome">
                <div className="anHomeButton">
                    <Link to="/news">Actualités</Link>
                </div>
                <div className="anHomeButton">
                    <Link to="/about">À&nbsp;Propos</Link>
                </div>
                <div className="anHomeButton">
                    <Link to="/faq">FAQ</Link>
                </div>
                <div className="anHomeButton">
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </main>
    );
};

export default Home;