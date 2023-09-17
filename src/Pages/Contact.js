import React from 'react';
import bgContact from "../Imgs/bg_contact.jpg";
import Header from "../Componants/Header";
import ContactForm from "../Componants/ContactForm";

const Contact = () => {
    return (
        <div>
            <Header title="Nous contacter"
                    description="Vous pouvez me contacter via la suite de cette page. Je ferais de mon mieux pour vous répondre le plus rapidement possible."
                    url={bgContact}/>
            <ContactForm/>
        </div>
    );
};

export default Contact;