import React from 'react';
import '../Styles/home.css'
import {Link} from "react-router-dom";


const Home = () => {
    return (
        <main className="mainHome">
            <div className="buttonsHome">
                <div className="anHomeButton">
                    <Link to="/news">Actualités</Link>
                </div>
                <div className="anHomeButton">
                    <Link to="/about">À Propos</Link>
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