// Importing react
import React from 'react';

// Importing the background for the header
import bgContact from "../Imgs/bg_contact.jpg";

// Importing the different componants
import Header from "../Componants/Header";
import ContactForm from "../Componants/ContactForm";

const Contact = () => {
    return (
        <div>
            <Header title="Nous contacter"
                    description="Vous pouvez me contacter via la suite de cette page. Je ferais de mon mieux pour vous répondre le plus rapidement possible."
                    url={bgContact}/>
            {/* Add the ContactForm componants that add the form to the page */}
            <ContactForm/>
        </div>
    );
};

export default Contact;