import React, { useEffect, useState } from "react";
import { getCategory } from "../category/CategoryManager";
import { getProduct } from "./ProductManager";
import "./ProductList.css"
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link, useParams } from "react-router-dom";


export const ProductList = (props) => {

    const [categories, setCategories] = useState([])
    const [products, setProduct] = useState([])
    const [checkedCategories, SetCheckedCategories] = useState([])


    useEffect(() => {
        getCategory().then(data => setCategories(data))
    }, [])

    useEffect(() => {
        getProduct(checkedCategories).then(data => setProduct(data))
    }, [checkedCategories])

    const changeCategoryState = (domEvent) => {

        const copyCheckedCategories = [...checkedCategories]
        if (copyCheckedCategories.includes(domEvent.target.value)) {
            copyCheckedCategories.splice(copyCheckedCategories.indexOf(domEvent.target.value), 1)

        }
        else {
            copyCheckedCategories.push(domEvent.target.value)
        }


        SetCheckedCategories(copyCheckedCategories)
    }

    return (
        <>
            <Container className="home-productList">

                <Row>
                    <Col sm={3}>
                        <h2>Categories</h2>

                        <div className='filter-container'>
                            {
                                categories.map(category => {
                                    return <div className='filer-container-item'> <label>{category.label}
                                        <input value={category.id} name="categories" onChange={changeCategoryState} type="checkbox"></input>
                                    </label></div>


                                })

                            }
                        </div>

                    </Col>
                    <Col sm={9}>
                        <h2 className="posted-title">Posted Items</h2>
                        <div className="post">
                            {
                                products.map(product => {

                                    return <div key={`product--${product.id}`} className="post-card"> <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={product.image} alt="posted item" />
                                        <Card.Body>
                                            <Card.Title>{product.title}</Card.Title>
                                            <Card.Text>{product.description}</Card.Text>
                                            {<div className="labels">{product.categories.map(category => {
                                                return <Card.Text className="label">{category.label}</Card.Text>
                                            })}</div>}
                                            <Link to={`/product/${product.id}`}><Button variant="primary">Click for details</Button></Link>
                                        </Card.Body>
                                    </Card>
                                    </div>


                                })

                            }
                        </div>

                    </Col>
                </Row>
            </Container>

        </>
    )
}



