import React, { useEffect, useState } from "react"
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { getMessages } from "./MessageManager";
import "../message/Message.css"
import Card from 'react-bootstrap/Card';

export const MessageList = () => {

    const [messages, setMessages] = useState([])

    useEffect(() => {
        getMessages().then(data => setMessages(data))

    }, [])





    return (
        <>
            <Container>
                <Row>
                    <Col sm={3}>
                        <h2>Messages</h2>

                    </Col>
                    <Col sm={9}>
                        <p>total messages: {messages.length}</p>
                        {
                            messages.length !== 0 ? <>
                                {messages?.map(message => {
                                    return <Card className="card" key={`message--${message.id}`}>
                                        <Card.Header>Product: {message.product.title}</Card.Header>
                                        <Card.Body>
                                            <blockquote className="blockquote mb-0">
                                                <p>
                                                    {message.message}
                                                </p>
                                                <footer className="blockquote-footer">
                                                    sender {message.sender.user.username}
                                                </footer>
                                            </blockquote>
                                        </Card.Body>
                                    </Card>
                                })}
                            </> : <><p>no messages</p></>
                        }


                    </Col>
                </Row>

            </Container>
        </>
    )
}