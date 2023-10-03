// Importing the different modules the page use
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Spinner} from "reactstrap";

// Importing the componants used in this page
import Header from "../Componants/Header";
import CardNews from "../Componants/CardNews";

// Importing the style
import "../Styles/news.css"

// Importing the image used in the header
import bgNews from "../Imgs/news.jpg";
const News = () => {
    // Creation of a const to get all the posts
    const [posts, setPosts] = useState([]);
    // Creation of a boolean to set if the content on the page is loading or not
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Usage of an API to get all the posts with on each a title, a body and an id
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setPosts(res.data)
                // When axios has get all the posts, the isLoading state in set to false to stop the requests and display the good screen
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
            {/* Set a condition for the loading of the posts */}
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