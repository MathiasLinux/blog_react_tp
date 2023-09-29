import React, {useRef} from 'react';
import '../Styles/formContainer.css';

const ContactForm = () => {
    return (
        <div className="formContainer">
            <form>

                <label htmlFor="firstName">Prénom</label>
                <input type="text" id="firstName" name="firstName" placeholder="Votre prénom"/>

                <label htmlFor="lastName">Nom de famille</label>
                <input type="text" id="lastName" name="lastName" placeholder="Votre nom de famille"/>

                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" placeholder="Votre email"/>

                <label htmlFor="country">Pays</label>
                <input type="text" id="country" name="country" placeholder="Votre pays de résidence"/>


                <label htmlFor="subject">Sujet</label>
                <textarea id="subject" name="subject"
                          placeholder="Pourquoi entrez vous en contact avec moi ?"></textarea>

                <input type="submit" value="Submit"/>

            </form>
        </div>
    );
};

export default ContactForm;