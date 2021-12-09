import React, { useEffect, useState } from "react";
import { getCategory } from "../category/CategoryManager";
import { getProduct } from "./ProductManager";
import "./ProductList.css"
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'

export const ProductList = (props) => {

    const [categories, setCategories] = useState([])
    const [products, setProduct] = useState([])

    useEffect(() => {
        getCategory().then(data => setCategories(data))
    }, [])

    useEffect(() => {
        getProduct().then(data => setProduct(data))
    }, [])

    return (
        <>
            <Container>
                <Row>
                    <Col sm={3}>
                        <div className='filter-container'>
                            {
                                categories.map(category => {
                                    return<div className='filer-container-item'> <label>{category.label}
                                        <input type="checkbox"></input>
                                    </label></div>


                                })

                            }
                        </div>
                    </Col>
                    <Col sm={9}>
                        {
                            products.map(product => {

                                return <div className='product-results-item'>
                                    <p>title:{product.title}</p>
                                    <p>description:{product.description}</p>
                                    {product.categories.map(category => {
                                        return <p>label:{category.label}</p>
                                    })}
                                    <p>price:{product.price}</p>


                                </div>
                            })

                        }

                    </Col>
                </Row>
            </Container>

        </>
    )
}


// <h2>Products</h2>
// < section className="container">
//     <div className="container-categories">
//         <div className='categories-checkbox'>
//             {
//                 categories.map(category => {
//                     return <label>{category.label}
//                         <input type="checkbox"></input></label>


//                 })

//             }
//         </div>

//     </div>
//     <div className="product-container">
//         <div className='product-results'>
//             {
//                 products.map(product => {

//                     return <div className='product-results-item'>
//                         <p>title:{product.title}</p>
//                         <p>description:{product.description}</p>
//                         {product.categories.map(category => {
//                             return <p>label:{category.label}</p>
//                         })}
//                         <p>price:{product.price}</p>


//                     </div>
//                 })

//             }
//         </div>
//     </div>

// </section