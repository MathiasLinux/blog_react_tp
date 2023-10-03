// Importing the different module the page needs
import React from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

// Importing the style for the page
import "../Styles/login.css"

/*****
 * Login
 * Function to create the login page
 */
const Login = () => {

    /***
     * submitLogin
     * Function to get the login infos from the form and use them to log the user into the website
     * @param event
     * @return void
     */
    function submitLogin(event) {
        // Prevent the submission of the form
        event.preventDefault();

        // Getting the different field of the form
        let username = document.querySelector("#username").value;
        let password = document.querySelector("#password").value;

        // Verify that the infos entered in the form are no 0 characters long
        if (username.trim().length !== 0 && password.trim().length !== 0) {
            // Login with the api
            fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({

                    username: username,
                    password: password,
                })
            })
                //Verify the users information if they are correct or not
                .then(response => response.json())
                .then(data => {
                    // Verify that the token is defined
                    if (data.token !== undefined) {
                        // Add the token to the localstorage
                        localStorage.setItem("token", data.token)
                        // Redirect the user to his last page with the localstorage lastPage if it is set else the user is redirect to the root
                        if (localStorage.getItem("lastPage") === null) {
                            window.location.href = "/"
                        } else {
                            window.location.href = localStorage.getItem("lastPage")
                        }
                    } else {
                        // Change the color of the input to red with bootstrap
                        document.querySelector("#username").classList.add("is-invalid")
                        document.querySelector("#password").classList.add("is-invalid")
                    }
                })
        }
    }

    return (
        <div className="divAroundLogin">
            <Form onSubmit={submitLogin} className="formLogin">
                <FormGroup>
                    <Label htmlFor="username">Utilisateur :</Label>
                    <Input type="text" name="username" id="username" required></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Mots de passe :</Label>
                    <Input type="password" name="password" id="password" required/>
                </FormGroup>
                <FormGroup>
                    <Button type="submit" color="primary">Connexion</Button>
                </FormGroup>
            </Form>
        </div>
    );
};

export default Login;