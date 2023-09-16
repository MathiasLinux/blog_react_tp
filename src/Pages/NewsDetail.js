import React from 'react';
import {useParams} from "react-router-dom";

const NewsDetail = () => {
    const {slug} = useParams();
    return (
        <div>
            Detail
            <p>{slug}</p>
        </div>
    );
};

export default NewsDetail;