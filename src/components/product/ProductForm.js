import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router";
import { createProduct } from "./ProductManager";
import { getCategory } from "../category/CategoryManager";


export const ProductForm = () => {
    const history = useHistory()
    const [categories, setCategories] = useState([])
    const [checked, setChecked] = useState(false)
    const [currentProduct, setProduct] = useState({
        trade: false
    })
    const [selectedCategories, setSelectedCategories] = useState([])
    // const [checkedCategories, SetCheckedCategories] = useState([])


    useEffect(() => {
        getCategory().then(data => setCategories(data))
    }, [])

    const changeCurrentForm = (domEvent) => {
        const copyCurrentProduct = { ...currentProduct }
        copyCurrentProduct[domEvent.target.name] = domEvent.target.value
        setProduct(copyCurrentProduct)
    }

    const check = (domEvent) => {
        const copyCurrentProduct = {...currentProduct}
        
        if (document.getElementById("myCheck").checked === true) {

            copyCurrentProduct[domEvent.target.name] = true
            setProduct(copyCurrentProduct)
        } else if (document.getElementById("myCheck").checked === false) {


            copyCurrentProduct[domEvent.target.name] = false
            setProduct(copyCurrentProduct)
        }
    }


    const changeCategoryState = (domEvent) => {

        const copyCurrentProduct = [...selectedCategories]
        
        if(copyCurrentProduct.includes(domEvent.target.value)){
            copyCurrentProduct.splice(copyCurrentProduct.indexOf(domEvent.target.value),1)

        }
        else{
            copyCurrentProduct.push(domEvent.target.value)
        }
        
        
        // copyCurrentProduct.push(domEvent.target.value) 
        setSelectedCategories(copyCurrentProduct)
    }



    return (
        <><Container>
            <Form>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter email"
                        value={currentProduct.title}
                        onChange={changeCurrentForm}
                        name="title"
                    />

                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Enter Description"
                        value={currentProduct.description}
                        name="description"
                        onChange={changeCurrentForm} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        min="0"
                        type="number"
                        placeholder="Enter Price"
                        value={currentProduct.price}
                        name="price"
                        onChange={changeCurrentForm} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Image Link</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter image URL"
                        value={currentProduct.image}
                        name="image"
                        onChange={changeCurrentForm} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                        min="0"
                        type="number"
                        placeholder="Enter quantity"
                        value={currentProduct.quantity}
                        name="quantity"
                        onChange={changeCurrentForm} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label >Categories:</Form.Label>
                    {
                        categories.map(category => {
                            return <div>

                                <Form.Check
                                    label={category.label}
                                    value={category.id}
                                    name="categories"
                                    onChange={changeCategoryState}
                                />
                            </div>
                        })
                    }


                </Form.Group>



                <Form.Group className="mb-3" controlId="">
                    <Form.Check
                        id="myCheck"
                        type="checkbox"
                        label="Willing to trade"
                        onClick={check}
                        value={currentProduct.check}

                        name="trade"
                    />

                </Form.Group>
                <Button type="summit"
                    onClick={evt => {
                        
                        evt.preventDefault()
                        const product = {
                            title: currentProduct.title,
                            description: currentProduct.description,
                            trade: currentProduct.trade,
                            price: parseInt(currentProduct.price),
                            image: currentProduct.image,
                            quantity: parseInt(currentProduct.quantity),
                            categories: selectedCategories
                        }
                        createProduct(product)
                        .then(()=>history.push("/"))
                    }}>Summit

                </Button>

            </Form>
        </Container>
        </>
    )
}