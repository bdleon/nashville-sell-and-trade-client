import React from "react"
import {Link} from "react-router-dom"


export const NavBar = () =>{
    return(
        <>
        <ul className="navbar">
            <li className="navbar_item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
        </ul>
        </>
    )
}