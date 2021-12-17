import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './ProductList.css'
import { getSingleProduct } from './ProductManager'
import { editProduct } from './ProductManager'

export const ProductEditModal = (props) => {
    const [product, setProduct] = useState({})
    const [title, setTitle] = useState('')


    const productId = props.productId
    
    const userProductFetcher = () => {
        
        getSingleProduct(productId).then(data => setProduct(data))
        
    }
    
    useEffect(() => {
        if(props.show){

            userProductFetcher()
        }
    }, [productId])
    
  
    const handleOnChange = (domEvent) => {
        const copyProduct = { ...product }
        copyProduct[domEvent.target.name] = domEvent.target.value
        setProduct(copyProduct)
    }

    const updateProduct = (event) => {
        event.preventDefault()
        
        editProduct(product).then((data) => props.fetchProduct())

    }

    return (
        <Modal
            {...props}

            aria-labelledby="example-custom-modal-styling-title"
            dialogClassName="modal-90w"
            centered
            className="my-modal"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Product Edit
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>


            <Form>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={product.title}
                        value={product.title}
                        onChange={(evt)=>{handleOnChange(evt)}}
                        
                        name="title"
                    />

                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder={product.description}
                        value={product.description}
                        onChange={(evt)=>{handleOnChange(evt)}}
                        
                        name="description"
                    />

                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        min="0"
                        type="number"
                        placeholder={product.price}
                        value={product.price}
                        name="price"
                        onChange={(evt)=>{handleOnChange(evt)}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                        min="0"
                        type="number"
                        placeholder={product.quantity}
                        value={product.quantity}
                        name="quantity"
                        onChange={(evt)=>{handleOnChange(evt)}}/>
                </Form.Group>
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                <Button onClick={(evt) => {{

                    updateProduct(evt); props.onHide()

                }}}>Summit</Button>
            </Modal.Footer>
        </Modal>
    );
}