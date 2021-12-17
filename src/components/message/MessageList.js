import React, { useEffect, useState } from "react"
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { getMessages } from "./MessageManager";
import "../message/Message.css"

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
                        {
                            messages.length !== 0 ? <>
                                {messages?.map(message => {
                                    return <div key={`message--${message.id}`} className="message-container">
                                        <p>sender: {message.sender.user.username}</p>
                                        <p>product: {message.product.title}</p>
                                        <p>message: {message.message}</p>
                                    </div>
                                })}
                            </> : <><p>no messages</p></>
                        }

                    </Col>
                </Row>

            </Container>
        </>
    )
}