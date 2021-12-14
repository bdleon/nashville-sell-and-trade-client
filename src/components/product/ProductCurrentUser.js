import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { getUserProduct } from "./ProductManager";



export const ProductCurrentUser = () => {
    const [products, setProduct] = useState([])


    useEffect(() => {
        getUserProduct().then(data => setProduct(data))
    }, [])
    console.log(products)

    let userProductCount = 1
    return (
        <>
            {/* <Container> */}
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>description</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Trade</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            products.map(product => {


                                return <tr>

                                    <td>{userProductCount++}</td>
                                    <td>{product.title}</td>
                                    <td>{product.description.substring(0, 20)}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                    {product.trade === true ?
                                        <><td>yes</td></> : <><td>no</td></>}
                                    <td><Button>delete</Button></td>
                                    <td><Button>edit</Button></td>

                                </tr>
                                

                            })
                        }


                    </tbody>
                </Table>

            {/* </Container> */}
        </>
    )
}