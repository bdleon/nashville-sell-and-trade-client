import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image'
import { useHistory, useParams } from "react-router-dom";
import { getSingleProduct } from "./ProductManager";
import Button from 'react-bootstrap/Button'
import { createMessage } from "../message/MessageManager";







export const Product = (props) => {
    const [product, setProduct] = useState({})
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [message, setMessage] = useState({
        message:"",
        product_Id: 0,
        recipient:  0

    })

    const history = useHistory()
    const { productId } = useParams()

    const productFetcher = () => {
        getSingleProduct(productId).then(data => setProduct(data))
    }

    useEffect(() => {
        productFetcher()

    }, [])

    const handleOnChange = (event) =>{
        const copyMessage = {...message}
        copyMessage[event.target.name] = event.target.value
        setMessage(copyMessage)
    }

    // const saveMessage = (event)=>{
    //     event.preventDefault()
    //     createMessage(message)

    // }



    return (

        <>
            <Container fluid>
                <Row>
                    <Col sm={7}><Image src={product.image} fluid /></Col>
                    <Col sm={5} >
                        <Container>
                            <Row>
                                <Col>
                                    <div>
                                        <p>Title: {product.title}</p>
                                        <p>Description: {product.description}</p>
                                        <p>Price: {product.price}</p>
                                        <p>Quantity: {product.quantity}</p>
                                        {product.trade === true ?
                                            <><p>Willing to trade: Yes</p></>
                                            : <><p>Willing to trade: No</p></>}

                                    </div>
                                    <div>
                                        <Form>

                                            <Form.Group className="mb-3" controlId="">
                                                <Form.Label>Send a message to seller:</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    placeholder="Enter email"
                                                    value={message.value}
                                                    onChange={handleOnChange}

                                                    name="message"
                                                />
                                            </Form.Group>
                                            <Button onClick={ event =>{
                                                event.preventDefault()
                                                const messageObject = {
                                                    message: message.message,
                                                    product_Id: productId,
                                                    recipient: product?.nash_user?.id

                                                }
                                                createMessage(messageObject).then(setButtonDisabled(true))
                                            }} disabled={buttonDisabled}>send</Button>
                                        </Form>


                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>


        </>

    )
}