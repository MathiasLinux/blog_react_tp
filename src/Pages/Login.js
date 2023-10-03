import React from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import "../Styles/login.css"

const Login = () => {
    //const [logged, setLogged] = useState([]);

    function submitLogin(event) {
        event.preventDefault();
        let username = document.querySelector("#username").value;
        let password = document.querySelector("#password").value;

        if (username.trim().length !== 0 && password.trim().length !== 0) {
            // Login
            fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({

                    username: username,
                    password: password,
                    // expiresInMins: 60, // optional
                })
            })
                //Verify the users information if they are correct or not
                .then(response => response.json())
                .then(data => {
                    if (data.token !== undefined) {
                        //setLogged(data)
                        localStorage.setItem("token", data.token)
                        // Redirect the user to his last page with the localstorage lastPage if it is set
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