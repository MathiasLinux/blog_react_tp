// Importing the different modules the componant while use
import React, {useState} from 'react';
import emailjs from 'emailjs-com'; // To send mail
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap"; // To have a good-looking form :)

// Importing the style for this componant
import '../Styles/formContainer.css';
const ContactForm = () => {

    /******
     * sendMail
     * A function to send an email when the form is completed and "send"
     * @param event
     * @return void
     */
    function sendMail(event) {
        // Prevent the refresh of the page
        event.preventDefault();

        // Getting all the datas from the form
        let firstName = document.querySelector("#firstName").value;
        let lastName = document.querySelector("#lastName").value;
        let email = document.querySelector("#email").value;
        let country = document.querySelector("#country").value;
        let subject = document.querySelector("#subject").value;

        // Verify if all the datas are not empty
        // trim() remove the blank space
        // length get the size of the string
        if (firstName.trim().length !== 0 && lastName.trim().length !== 0 && email.trim().length !== 0 && country.trim().length !== 0 && subject.trim().length !== 0){

            // Creating the different parameters for emailJS
        let templateParams = {
            to_name: "Ginny Le Chien", // The name of the webmaster
            from_name: firstName + " " + lastName,
            message: subject,
            reply_to: email,
            from_country: country
        }

        // Here we send the mail with a defined service and template ids and public key for the emailJS profil. To that we also add the parameters that we created before
        emailjs.send('service_597bvnr', 'template_f74wz5n', templateParams, "czlJ60J5u6NWe8x9U")
            .then(function(response) {
                // If the email is sent without errors we display a modal to the user to say that
                toggleModal();
            }, function(error) {
                // Same as before but the modal is for the error
                toggleModalError();
            });
        }
    }

    // A constant of a boolean to display the modal
    const [modal, setModal] = useState(false);

    // A function to set the previous boolean
    const toggleModal = () => setModal(!modal);

    // Same as the 2 before but for the error modal
    const [modalError, setModalError] = useState(false);
    const toggleModalError = () => setModalError(!modalError);

    return (
        <div className="formContainer">
            {/* When the user submit the form, the sendMail function will be called */}
            <form onSubmit={sendMail}>

                <label htmlFor="firstName">Prénom</label>
                <input type="text" id="firstName" name="firstName" placeholder="Votre prénom" required/>

                <label htmlFor="lastName">Nom de famille</label>
                <input type="text" id="lastName" name="lastName" placeholder="Votre nom de famille" required/>

                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" placeholder="Votre email" required/>

                <label htmlFor="country">Pays</label>
                <input type="text" id="country" name="country" placeholder="Votre pays de résidence" required/>


                <label htmlFor="subject">Sujet</label>
                <textarea id="subject" name="subject"
                          placeholder="Pourquoi entrez vous en contact avec moi ?" required></textarea>

                <input type="submit" value="Submit"/>

            </form>
            {/* The modal when the email is sent successful */}
            <Modal isOpen={modal} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Email envoyé</ModalHeader>
                <ModalBody>
                    Nous vous répondrons dans les plus bref délais.
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggleModal}>
                        Fermer
                    </Button>
                </ModalFooter>
            </Modal>

            {/* The modal when the sending of the email created a problem */}
            <Modal isOpen={modalError} toggle={toggleModalError}>
                <ModalHeader toggle={toggleModalError}>Erreur</ModalHeader>
                <ModalBody>
                    Une erreur s'est produite durant l'envoie de votre email.
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggleModalError}>
                        Fermer
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default ContactForm;