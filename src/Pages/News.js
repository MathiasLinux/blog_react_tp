import React from 'react';
import bgNews from "../Imgs/news.jpg";
import Header from "../Componants/Header";

const News = () => {
    return (
        <div>
            <Header title="Actualités" description="Ici vous pouvez trouver les dernières actualités lié à Linux et plus précisement à ArchLinux une vraie distribution de tryharder." url={bgNews}/>
        </div>
    );
};

export default News;