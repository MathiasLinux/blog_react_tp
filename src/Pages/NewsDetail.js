import React from 'react';
import {useParams} from "react-router-dom";
import '../Styles/newsDetail.css';

const NewsDetail = () => {
    const {slug} = useParams();
    return (
        <div className="articleDetail">
            <h2>Article : {slug}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto blanditiis culpa deserunt doloremque
                eaque id impedit libero quae repellendus vero? Cupiditate eos repellat tenetur? Amet distinctio ipsam
                laborum ratione reiciendis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
                consequatur delectus distinctio dolorem earum eos ex fugiat harum id minus necessitatibus, numquam omnis
                quia quos rerum suscipit veritatis. Dignissimos, reiciendis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequatur debitis dignissimos
                dolores doloribus, id nobis officiis rerum veritatis voluptatem. Alias dolorem, illum in inventore
                nostrum officiis sint vero? Ipsam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
                nulla, quia? Cumque, doloremque eos in maxime qui quos recusandae vero. Consequuntur deserunt doloribus
                expedita iusto, quam quis repellat sequi temporibus.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum iusto, laudantium quasi quo recusandae
                reprehenderit veritatis? Accusantium adipisci aliquid atque expedita facilis, pariatur quia quis
                reprehenderit saepe similique ut, voluptate!</p>
        </div>
    );
};

export default NewsDetail;