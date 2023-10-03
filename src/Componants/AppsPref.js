// Importing react
import React from 'react';

// Importing the style for this componant
import "../Styles/outletAbout.css";

// Importing the image the componant use
import webstorm from '../Imgs/webstorm.png';

const AppsPref = () => {
    return (
        <div>
            <div className="outletContent">
                <h4>Les applications que j'utilise</h4>
                <div>
                    J'utilise différentes applications dans mon quotidien. Pour ce qui est de la programmation j'utilise
                    principalement les outils Jetbrains comme IDE. Que ce soit PHPStorm ou encore Webstorm. Oui je suis
                    plutôt dans le Web :).
                </div>
                <img className="imgOutlet" src={webstorm} alt="L'IDE Webstorm par Jetbrains"/>
            </div>
        </div>
    );
};

export default AppsPref;