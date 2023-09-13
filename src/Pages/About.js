import React from 'react';
import Header from "../Componants/Header";
import bgAbout from "../Imgs/about.jpg";
import {Link, Outlet} from "react-router-dom";
import "../Styles/about.css";

const About = () => {
    return (
        <div>
            <Header title="À propos de nous"
                    description="Je suis un étudiant passioné de Linux, et après la distribution de tryharder Arch Linux. Elle me permet de perdre des heures la nuit à reconfigurer toute mon installation qu'en un paquet tel le grub casse"
                    url={bgAbout}/>
            <div className="outletMenu">
                <h3>Qui suis-je ?</h3>
                <div className="outletList">
                    <Link to="distros-pref" className="menuOutlet">Mes distributions préférées</Link>
                    <Link to="apps-pref" className="menuOutlet">Mes applications préférées</Link>
                    <Link to="servs-pref" className="menuOutlet">Mes serveurs préférés</Link>
                </div>
                <div className="outletOutput">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default About;