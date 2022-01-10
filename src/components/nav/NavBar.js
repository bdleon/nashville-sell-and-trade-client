import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

export const NavBar = () => {
    const history = useHistory()
    return (
        <>

            <Navbar bg="light" variant="light" expand="lg" >
                <Container>
                    <Navbar.Brand href="/">
                        <img src="/Nashville S-2-2.png" className="logo"></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/product/my_products">My Products</Nav.Link>
                            <Nav.Link href="/form">Add product</Nav.Link>
                            <Nav.Link href="/product/messages">My Messages</Nav.Link>
                            {
                                (localStorage.getItem("nst_token") !== null) ?
                                    <li className="nav-item">
                                        <Button className="nav-link fakeLink"
                                            onClick={() => {
                                                localStorage.removeItem("nst_token")
                                                history.push({ pathname: "/" })
                                            }}
                                        ><span className="logout-button">Logout</span></Button>
                                    </li> :
                                    <>
                                        <li className="nav-item">

                                            <Nav.Link href="/login">Login</Nav.Link>
                                        </li>
                                        <li className="nav-item">

                                            <Nav.Link href="/register">Register</Nav.Link>
                                        </li>
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}