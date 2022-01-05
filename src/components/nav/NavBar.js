import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

export const NavBar = () => {
    const history = useHistory()
    return (
        <>
            <ul className="navbar">
                <li className="navbar_item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="navbar_item">
                    <Link className="nav-link" to="/product/my_products">My Products</Link>
                </li>
                <li className="navbar_item">
                    <Link className="nav-link" to="/form">+ Products</Link>
                </li>
                <li className="navbar_item">
                    <Link className="nav-link" to="/product/messages">My Messages</Link>
                </li>
                {
                    (localStorage.getItem("nst_token") !== null) ?
                        <li className="nav-item">
                            <button className="nav-link fakeLink"
                                onClick={() => {
                                    localStorage.removeItem("nst_token")
                                    history.push({ pathname: "/" })
                                }}
                            >Logout</button>
                        </li> :
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        </>
                }
            </ul>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Nashville sell and trade</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/product/my_products">My Products</Nav.Link>
                        <Nav.Link href="/form">Add product</Nav.Link>
                        <Nav.Link href="/product/messages">My Messages</Nav.Link>
                        {
                    (localStorage.getItem("nst_token") !== null) ?
                        <li className="nav-item">
                            <button className="nav-link fakeLink"
                                onClick={() => {
                                    localStorage.removeItem("nst_token")
                                    history.push({ pathname: "/" })
                                }}
                            >Logout</button>
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
                </Container>
            </Navbar>
        </>
    )
}