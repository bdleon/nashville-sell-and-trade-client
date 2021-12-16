import React, { useEffect, useState } from "react";
import { getCategory } from "../category/CategoryManager";
import { getProduct } from "./ProductManager";
import "./ProductList.css"
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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

    const changeCategoryState = (domEvent) =>{
        
        const copyCheckedCategories = [...checkedCategories]
        if(copyCheckedCategories.includes(domEvent.target.value)){
            copyCheckedCategories.splice(copyCheckedCategories.indexOf(domEvent.target.value),1)

        }
        else{
            copyCheckedCategories.push(domEvent.target.value)
        }

    
        SetCheckedCategories(copyCheckedCategories)
    }

    return (
        <>
            <Container>
                <Row>
                    <Col sm={2}>
                        <div className='filter-container'>
                            {
                                categories.map(category => {
                                    return<div className='filer-container-item'> <label>{category.label}
                                        <input value={category.id} name="categories"onChange={changeCategoryState}type="checkbox"></input>
                                    </label></div>


                                })

                            }
                        </div>
                    </Col>
                    <Col sm={10}>
                        {
                            products.map(product => {

                                return <div className='product-results-item'>
                                    <p>title:{product.title}</p>
                                    <p>description:{product.description}</p>
                                    {product.categories.map(category => {
                                        return <p>label:{category.label}</p>
                                    })}
                                    <p>price:{product.price}</p>
                                    <Link to={`/product/${product.id}`}><button>more</button></Link>
                                    {/* <img src={product.image}></img> */}


                                </div>
                            })

                        }

                    </Col>
                </Row>
            </Container>

        </>
    )
}

// This is code that i will save to remember what i had. will delete when push to github



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