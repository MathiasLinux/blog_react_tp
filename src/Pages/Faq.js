import React from 'react';
import Header from "../Componants/Header";
import bgFaq from "../Imgs/faq.jpg"
import Question from "../Componants/Question";

const Faq = () => {
    return (
        <div>
            <Header title="Foire aux questions" description="Les questions les plus possées sont disponible plus bas."
                    url={bgFaq}/>
            <Question question="Ce site est-il hébergé sur un serveur Linux ?"
                      answer="Bien évidement ce site est hébergé sur Linux. Mon serveur web est sous Alma Linux. Si vous ne connaisez pas cette distribution, c'est une recompilation 1:1 de RHEL (Red Hat Entreprie Linux) qui est une distribution stable utiliser majoritairement en entreprise. L'avantage d'Alma Linux face à RHEL c'est qu'elle est totalement gratuite et maintenu par la communauté, aussi aidé par l'entreprise CloudLinux."/>
            <Question question="Utilises tu Windows ?"
                      answer="Cela peut m'arrivé pour diverses raisons. Que ce soit parce qu'une partie de mes études m'impose d'utilisé un logiciel uniquement disponible sur Windows, comme la suite Adobe ou encore comme Mindview. Je peux aussi utilisé Windows pour jouer à des jeux qui ne fonctionne pas sur Linux via la couche de compatibilité Proton base sur Wine. Mais bien sur je ne me sens pas à l'aise en utilisant Windows, il me manque énormement de fonctionalitées que j'ai pu personnalisées sur mon laptop ou PC fixe sous Linux (ArchLinux pour le laptop et Debian 12 pour le PC fixe)."/>
        </div>
    );
};

export default Faq;