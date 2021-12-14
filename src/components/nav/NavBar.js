import React from "react"
import { Link,useHistory } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const history = useHistory()
    return (
        <>
            <ul className="navbar">
                <li className="navbar_item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="navbar_item">
                    <Link className="nav-link" to="/product/user">My Products</Link>
                </li>
                <li className="navbar_item">
                    <Link className="nav-link" to="/form">+ Products</Link>
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
        </>
    )
}