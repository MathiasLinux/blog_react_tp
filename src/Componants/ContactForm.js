import React, {useRef, useState} from 'react';
import '../Styles/formContainer.css';
import emailjs from 'emailjs-com';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

const ContactForm = () => {

    function sendMail(event) {
        event.preventDefault();

        let firstName = document.querySelector("#firstName").value;
        let lastName = document.querySelector("#lastName").value;
        let email = document.querySelector("#email").value;
        let country = document.querySelector("#country").value;
        let subject = document.querySelector("#subject").value;

        if (firstName.trim().length !== 0 && lastName.trim().length !== 0 && email.trim().length !== 0 && country.trim().length !== 0 && subject.trim().length !== 0){

        let templateParams = {
            to_name: "Ginny Le Chien",
            from_name: firstName + " " + lastName,
            message: subject,
            reply_to: email,
            from_country: country
        }
        emailjs.send('service_597bvnr', 'template_f74wz5n', templateParams, "czlJ60J5u6NWe8x9U")
            .then(function(response) {
                toggleModal();
            }, function(error) {
                toggleModalError();
            });
        }
    }
    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);

    const [modalError, setModalError] = useState(false);
    const toggleModalError = () => setModalError(!modalError);

    return (
        <div className="formContainer">
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