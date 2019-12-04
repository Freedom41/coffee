import React from 'react'
import './index.css'
import {Link, BrowserRouter as Router } from 'react-router-dom';


const Navbar = ({log}) => {
    return (
        <div className="nav">
            <li> <Link to="./"> Home </Link> </li>
            <li> <Link to="./login"> Login </Link>  </li>
            <li> <Link to="./register"> Register </Link> </li>
            <li> <Link to="./catalogue"> Catalogue </Link> </li>
        </div>
    )
}

export default Navbar;