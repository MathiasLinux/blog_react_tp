// Importing the different module the page uses
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {Button, Col, Container, FormGroup, Row, Spinner, Form, Label, Input} from "reactstrap";
import jwt_decode from "jwt-decode";

// Importing the style for this page
import '../Styles/newsDetail.css';

const NewsDetail = () => {
    // Creation of a slug const to get the parameter in the url
    const {slug} = useParams();
    // Creation of a const to store all of the post
    const [post, setPost] = useState([]);
    // Creation of a const to set if the post are loading or not
    const [isLoading, setIsLoading] = useState(true);

    // Creation of 2 other variable the same as the post but for the comments
    const [comments, setComments] = useState([])
    const [isLoadingComment, setIsLoadingComment] = useState(true);

    // Get the posts to be displayed on the page
    useEffect(() => {
        // Usage of the slug to get the posts linked to the id in the url
        axios.get('https://jsonplaceholder.typicode.com/posts/' + slug)
            .then(res => {
                // Adding the data of the post
                setPost(res.data);
                setIsLoading(false);

            })
    }, [slug])

    // Get the comment to be displayed on the page
    useEffect(() => {
        // Usage of the slug to get the comments linked to the id in the url
        axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + slug)
            .then(res => {
                // Verify if the user has comment in his localStorage
                // If it is the case we get them and add them the setComments

                // Creation of an array to store all the comments
                let archiveTable = []

                // Verify that the localStorage is not empty
                if (localStorage.length !== 0) {
                    // Here we get all the data of the localStorage
                    let archive = {}
                    let keys = Object.keys(localStorage);
                    let i = keys.length;
                    while (i--) {
                        // Verify that the key is a number, so we only get the comments and not the token or the lastPage
                        if (!isNaN(parseInt(keys[i]))) {
                            archive[keys[i]] = JSON.parse(localStorage.getItem(keys[i]));
                        }
                    }
                    // Here we add all the comments stored in the localStorage into the archiveTable array
                    for (const [, value] of Object.entries(archive)) {
                        archiveTable.push(value);
                    }
                }
                // And here we add all the comments from the API in the archiveTable array
                res.data.forEach(elem => {
                    archiveTable.push(elem)
                })

                // We set all the comments at once
                setComments(archiveTable);
                setIsLoadingComment(false);

            })
    }, [slug])

    /****
     * refreshPage
     * A function to refresh the current page
     * @return void
     */
    function refreshPage() {
        window.location.reload(false);
    }

    /****
     * openCommentMenu
     * A function to open the form to add a comment
     * The form can be only opened if the user is connected to the website
     * @return void
     */
    function openCommentMenu() {
        // Getting the token in the localStorage into a variable
        let token = localStorage.getItem("token");
        // If the token is not, the user is not connected
        if (token === null) {
            // Create a localStorage entry to save the last page visited
            localStorage.setItem("lastPage", window.location.href)
            // We redirect the user to the login page
            window.location.href = "/login";

        }
        // If the user is connected
        else {
            // We decode the JWT token to get the user infos
            let decoded = jwt_decode(token);
            // We display the form to the user
            document.querySelector(".addCommentForm").classList.toggle("addCommentFormDisplay");
            // We add the email of the current user into the form
            document.querySelector("#commentEmail").value = decoded.email;
        }
    }

    /****
     * addComment
     * A function to add comment for a post
     * @return void
     */
    function addComment(event) {
        // Preventing the submission of the form
        event.preventDefault()

        // Getting all the fields of the form
        let commentTitle = document.querySelector("#commentTitle").value;
        let commentEmail = document.querySelector("#commentEmail").value;
        let commentBody = document.querySelector("#commentBody").value;

        // Verify that all the field are not empty
        if (commentTitle.trim().length !== 0 && commentEmail.trim().length !== 0 && commentBody.trim().length !== 0) {
            // Create an id for the new comment
            let bigestId = 0

            // We search the biggest comment currently
            comments.forEach(comment => {
                let commentId = comment.id;
                if (commentId >= bigestId) {
                    // when we get it we add + 1 to the bigestId to get a greater id
                    bigestId = commentId + 1;
                }
            })

            // We search if comments are stored in the localStorage
            if (localStorage.length !== 0) {
                // If it is the case we search in all the items in the localStorage
                let keys = Object.keys(localStorage);
                let i = keys.length;
                // We search the biggest comment currently
                while (i--) {
                    // Verify that the key is a number to only get the comments
                    if (!isNaN(parseInt(keys[i]))) {
                        if (parseInt(keys[i]) >= bigestId) {
                            // when we get it we add + 1 to the bigestId to get a greater id
                            bigestId = parseInt(keys[i]) + 1;
                        }
                    }
                }
            }

            // Creation of an object that contain the same data as the API
            let commentData = {
                postId: post.id,
                id: bigestId,
                name: commentTitle,
                email: commentEmail,
                body: commentBody
            }

            // Adding the comment to the localStorage
            localStorage.setItem(bigestId, JSON.stringify(commentData));

            // Refreshing the page to see the new comment
            refreshPage();
        }
    }

    return (
        <div className="articleDetail">
            <div>
                {/* Verify if the post is loading, if it is the case we display a bootstrap spinner */}
                {isLoading ? (
                    <>
                        <div className="spinnerDivArround">
                            <Spinner className="spinnerWaiting" color="primary" type="grow">
                                Loading...
                            </Spinner>
                        </div>
                    </>
                ) : (
                    <div className="articleNewsDetail">
                        <h2>{post.title}</h2>
                        <p>
                            {post.body}
                        </p>
                    </div>
                )}
            </div>
            <div>
                <h3>Commentaires :</h3>
                {/* Verify if the comments are loading, if it is the case we display a bootstrap spinner */}
                {isLoadingComment ? (
                    <>
                        <div className="spinnerDivArround">
                            <Spinner className="spinnerWaiting" color="primary" type="grow">
                                Loading...
                            </Spinner>
                        </div>
                    </>
                ) : (
                    <>
                        <Container>
                            <div className="buttonAddComment">
                                {/* The button to add a new comment */}
                                <Button color="primary" onClick={openCommentMenu}>
                                    Ajouter un commentaire
                                </Button>
                            </div>
                            <div className="addCommentForm">
                                {/* The form to add a new comment */}
                                <Form onSubmit={addComment}>
                                    <FormGroup>
                                        <Label htmlFor="commentTitle">Title :</Label>
                                        <Input type="text" name="commentTitle" id="commentTitle" required/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="commentEmail">Your email :</Label>
                                        <Input type="email" name="commentEmail" id="commentEmail" required/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="commentBody">Content :</Label>
                                        <Input type="textarea" name="commentBody" id="commentBody" required/>
                                    </FormGroup>
                                    <Button type="submit">
                                        Envoyer
                                    </Button>
                                </Form>
                            </div>
                            <Row xs="auto">
                                {/* We filter the comments to get only the one that are linked to this post (the localStorage comments are all stored in the same place unlike the one from the API */}
                                {comments.filter(comment => comment.postId == post.id).map(comment => (
                                    <Col key={comment.id} xs="10" className="eachComment">
                                        <h4>{comment.name}</h4>
                                        <span>De : {comment.email}</span>
                                        <p>{comment.body}</p>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </>
                )}
            </div>
        </div>
    );
};

export default NewsDetail;