import {useParams} from "react-router-dom";
import '../Styles/newsDetail.css';
import axios from "axios";
import React, {useEffect, useState} from "react";
import {Button, Col, Container, FormGroup, Row, Spinner, Form, Label, Input} from "reactstrap";
import jwt_decode from "jwt-decode";

const NewsDetail = () => {
    const {slug} = useParams();
    const [post, setPost] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [comments, setComments] = useState([])
    const [isLoadingComment, setIsLoadingComment] = useState(true);

    // Get the posts to be displayed on the page
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + slug)
            .then(res => {
                setPost(res.data);
                setIsLoading(false);

            })
    }, [slug])

    // Get the comment to be displayed on the page
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + slug)
            .then(res => {
                // Verify if the user has comment in his localStorage
                // If it is the case we get them and add them the setComments
                let archiveTable = []
                if (localStorage.length !== 0) {
                    let archive = {}
                    let keys = Object.keys(localStorage);
                    let i = keys.length;
                    while (i--) {
                        // Verify that the key is a number
                        if (!isNaN(parseInt(keys[i]))) {
                            archive[keys[i]] = JSON.parse(localStorage.getItem(keys[i]));
                        }
                    }
                    for (const [, value] of Object.entries(archive)) {
                        archiveTable.push(value);
                    }
                }
                res.data.forEach(elem => {
                    archiveTable.push(elem)
                })
                setComments(archiveTable);
                setIsLoadingComment(false);

            })
    }, [slug])

    function refreshPage() {
        window.location.reload(false);
    }

    function openCommentMenu() {
        // Verify that the token is set in the localStorage
        let token = localStorage.getItem("token");
        if (token === null) {
            // Create a localStorage entrie to save the last page visited
            localStorage.setItem("lastPage", window.location.href)
            window.location.href = "/login";

        } else {
            let decoded = jwt_decode(token);
            document.querySelector(".addCommentForm").classList.toggle("addCommentFormDisplay");
            document.querySelector("#commentEmail").value = decoded.email;
        }
    }

    function addComment(event) {
        event.preventDefault()
        let commentTitle = document.querySelector("#commentTitle").value;
        let commentEmail = document.querySelector("#commentEmail").value;
        let commentBody = document.querySelector("#commentBody").value;
        if (commentTitle.trim().length !== 0 && commentEmail.trim().length !== 0 && commentBody.trim().length !== 0) {
            // Create an id for the new comment
            let bigestId = 0
            comments.forEach(comment => {
                let commentId = comment.id;
                if (commentId >= bigestId) {
                    bigestId = commentId + 1;
                }
            })
            if (localStorage.length !== 0) {
                let keys = Object.keys(localStorage);
                let i = keys.length;
                while (i--) {
                    // Verify that the key is a number
                    if (!isNaN(parseInt(keys[i]))) {
                        if (parseInt(keys[i]) >= bigestId) {
                            bigestId = parseInt(keys[i]) + 1;
                        }
                    }
                }
            }
            let commentData = {
                postId: post.id,
                id: bigestId,
                name: commentTitle,
                email: commentEmail,
                body: commentBody
            }
            localStorage.setItem(bigestId, JSON.stringify(commentData));
            refreshPage();
        }
    }

    return (
        <div className="articleDetail">
            <div>
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
                {isLoading ? (
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
                                <Button color="primary" onClick={openCommentMenu}>
                                    Ajouter un commentaire
                                </Button>
                            </div>
                            <div className="addCommentForm">
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