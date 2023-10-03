// Importing React
import React from 'react';

// Importing the style for the componant
import "../Styles/question.css";

/****
 * A componant that will create a question that can be opened to get the answer
 * @param question
 * @param answer
 */
function Question({question, answer}) {

    /********
     * A function to open the response for the question in the FAQ
     * @param e the event var to get the target
     * @return void
     */
    const openMenuClick = (e) => {
        // Getting the target of the click (The question the user clicked on)
        let target = e.currentTarget
        let svgArrow = target.querySelector(".svgDefaultArrow")

        // If the user close the question
        if (target.classList.contains("menuOpenQuestion")) {
            target.classList.remove("menuOpenQuestion");
            svgArrow.classList.remove("svgRotateArrow")
        }
        // If the user open the question
        else {
            target.classList.add("menuOpenQuestion") // Class to see the answer
            svgArrow.classList.add("svgRotateArrow") // Class to rotate the SVG
        }

    }

    return (
        <div className="divQuestion">
            {/* The div the user will click on */}
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