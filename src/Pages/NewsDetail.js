import {useParams} from "react-router-dom";
import '../Styles/newsDetail.css';
import axios from "axios";
import React, {useEffect, useState} from "react";
import {Col, Container, Row, Spinner} from "reactstrap";

const NewsDetail = () => {
    const {slug} = useParams();
    const [post, setPost] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [comments, setComments] = useState([])
    const [isLoadingComment, setIsLoadingComment] = useState(true);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + slug)
            .then(res => {
                setPost(res.data);
                setIsLoading(false);

            })
    }, [slug])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + slug)
            .then(res => {
                setComments(res.data);
                setIsLoadingComment(false);

            })
    }, [slug])
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
                            <Row xs="auto">
                                {comments.map(comment => (
                                    <Col key={comment.id} xs="auto" className="eachComment">
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