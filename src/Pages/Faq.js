import React from 'react';
import Header from "../Componants/Header";
import bgFaq from "../Imgs/faq.jpg"

const Faq = () => {
    return (
        <div>
            <Header title="Foire aux questions" description="Les questions les plus possées sont disponible plus bas." url={bgFaq}/>
        </div>
    );
};

export default Faq;