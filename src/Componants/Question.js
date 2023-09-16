import React from 'react';
import "../Styles/question.css";

function Question({question, answer}) {

    const openMenuClick = (e) => {
        let target = e.currentTarget
        let svgArrow = target.querySelector(".svgDefaultArrow")
        if (target.classList.contains("menuOpenQuestion")) {
            target.classList.remove("menuOpenQuestion");
            svgArrow.classList.remove("svgRotateArrow")
        } else {
            target.classList.add("menuOpenQuestion")
            svgArrow.classList.add("svgRotateArrow")
        }

    }

    return (
        <div className="divQuestion">
            <div className="theQuestion" onClick={((e) => openMenuClick(e))}>
                <h3>{question}</h3>
                <svg className="svgDefaultArrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                     viewBox="0 0 24 24" fill="none"
                     stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6"/>
                </svg>
            </div>
            <div className="theAnswer">
                <p>{answer}</p>
            </div>
        </div>
    );
}

export default Question;