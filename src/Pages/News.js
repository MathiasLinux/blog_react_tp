import React, {useEffect, useState} from 'react';
import axios from "axios";
import bgNews from "../Imgs/news.jpg";
import Header from "../Componants/Header";
import {Spinner} from "reactstrap";
import "../Styles/news.css"
import CardNews from "../Componants/CardNews";

const News = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Usage of an API to get all the posts with on each a title, a body and an id
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setPosts(res.data)
                // When axios has get all the posts, the isLoading state in set to false to stop the requests and diplay the good screen
                setIsLoading(false)
            })

    }, []);
    return (
        <>
            <div>
                <Header title="Actualités"
                        description="Ici vous pouvez trouver les dernières actualités lié à Linux et plus précisement à ArchLinux une vraie distribution de tryharder."
                        url={bgNews}/>
            </div>
            {isLoading ? (
                <>
                    <div className="spinnerDivArround">
                        <Spinner className="spinnerWaiting" color="primary" type="grow">
                            Loading...
                        </Spinner>
                    </div>
                </>
            ) : (
                <>
                    <CardNews posts={posts}/>
                </>
            )

            }
        </>
    );
};

export default News;