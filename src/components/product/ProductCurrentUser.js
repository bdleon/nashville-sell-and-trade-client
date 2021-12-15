import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { getUserProduct } from "./ProductManager";
import { deleteProduct } from "./ProductManager";
import { ProductEditModal } from "./ProductEditModal";



export const ProductCurrentUser = () => {
    const [products, setProduct] = useState([])
    const [modalShow, setModalShow] = React.useState(false);
    const [captureProductId, setCaptureProductId] = useState(0)

    // useEffect(() => {
    //     getUserProduct().then(data => setProduct(data))
    // }, [])

    const userProductFetcher = () => {
        getUserProduct().then(data => setProduct(data))
    }
    console.log(captureProductId)
    useEffect(() => {
        userProductFetcher()
    }, [])

    // const productIdHandler = (domEvent) => {
    //     let id = parseInt(domEvent.target.id)
    //     setCaptureProductId(id)

    // }

    const productIdHandler = (domEvent) => {


        let id = parseInt(domEvent.target.id)

        setCaptureProductId(id)

    }




    // let myButton = document.getElementsByName("mybtn");
    // myButton.addEventListener("click", productIdHandler);

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
                        <th>id</th>
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
                                <td>{product.id}</td>
                                <td><Button
                                    onClick={
                                        () => {
                                            deleteProduct(product.id).then(userProductFetcher)

                                        }
                                    }>delete</Button></td>
                                <td><Button variant="primary" id={product.id} onClick={(evt) => { setModalShow(true); productIdHandler(evt) }} className="mybtn" >edit</Button></td>
                                <ProductEditModal
                                    fetchProduct={userProductFetcher}
                                    productId={captureProductId}
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}

                                />

                            </tr>


                        })
                    }


                </tbody>
            </Table>

            {/* </Container> */}
        </>
    )
}