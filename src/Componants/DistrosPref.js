// Importing react
import React from 'react';

// Importing the style for this componant
import "../Styles/outletAbout.css";

const DistrosPref = () => {
    return (
        <div className="outletContent">
            <h4>Arch Linux n'est pas tout !</h4>
            <div>Et oui ! Étonnant n'est ce pas. Alors oui je possède plusieurs serveur, et vu que je tiens à qu'ils
                fonctionnent un minimum, je n'ai pas mis ArchLinux dessus. J'ai donc pris deux distributions stables
                connus et avec des versions supportées à long termes. J'utilise Almalinux sur mon serveur Web (un dérivé
                de RHEL). Mais aussi Debian sur mon serveur de jeux. Ces deux OS me permettent une stabilité optimal.
            </div>
        </div>
    );
};

export default DistrosPref;