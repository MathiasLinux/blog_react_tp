// Importation of the different modules that this page will use
import React from 'react';
import Header from "../Componants/Header";
import {Link, Outlet} from "react-router-dom";

// Importation of the image for the top header
import bgAbout from "../Imgs/about.jpg";

// Importation of the style specific to this page
import "../Styles/about.css";

const About = () => {
    return (
        <div>
            {/* The top header of the page with an image, title and description */}
            <Header title="À propos de nous"
                    description="Je suis un étudiant passioné de Linux, et après la distribution de tryharder Arch Linux. Elle me permet de perdre des heures la nuit à reconfigurer toute mon installation qu'en un paquet tel le grub casse"
                    url={bgAbout}/>
            <div className="outletMenu">
                <h3>Qui suis-je ?</h3>
                <div className="outletList">
                    {/* Here is the different link that will open the good componants for the user, so he can see the content he clicked on */}
                    <Link to="distros-pref" className="menuOutlet">Mes distributions préférées</Link>
                    <Link to="apps-pref" className="menuOutlet">Mes applications préférées</Link>
                    <Link to="servs-pref" className="menuOutlet">Mes serveurs préférés</Link>
                </div>
                <div className="outletOutput">
                    {/* Display of the content of the componant the user choose before */}
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default About;