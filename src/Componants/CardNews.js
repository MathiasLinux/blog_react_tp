import React from 'react';
import {Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Row} from "reactstrap";
import "../Styles/cardNews.css"
import {Link} from "react-router-dom";

function CardNews({posts}) {
    return (
        <div className="CardsTextContainer">
            <Container>
                <Row xs="auto">
                    {posts.map((post) => (
                        <Col key={post.id} className="ColCard" xs="auto">
                            <Card
                                style={{
                                    width: '18rem'
                                }}
                            >
                                <img
                                    alt="Sample"
                                    src="https://picsum.photos/300/200"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        {post.title}
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        {post.title}
                                    </CardSubtitle>
                                    <CardText>
                                        {post.body}
                                    </CardText>
                                    <Button color="primary">
                                        <Link to={"/news/" + post.id}> Lire la suite</Link>
                                    </Button>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default CardNews;