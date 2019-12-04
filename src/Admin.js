import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import "./index.css";
import Navbar from "./nav.js"
import Footer from "./footer.js"


const Admin = () => {
    return (
        <div className="catalog">
            <div className="nav">
                <li> <Link to="./"> Home </Link> </li>
                <li> <Link to="./"> Logout </Link>  </li>
                <li> <Link to="./catalogue"> Catalogue </Link> </li>
            </div>
            <div className="refund">
                <label> Refund the user by typing in search box</label> 
                <input type="text" name="users" placeholder="User"/>
                <input type="submit" value="Refund" /> 
            </div>
            <div className="remove">
                <label> Remove seller </label>
                <input type="text" name="users" placeholder="seller" />
                <input type="submit" value="Remove" /> 
            </div>
            <div className="remove">
                <label> Remove listing </label>
                <input type="text" name="users" placeholder="Remove listing" />
                <input type="submit" value="Remove listing" />
            </div>
            <div className="remove">
                <label> Stop Order </label>
                <input type="text" name="users" placeholder="Stop Order" />
                <input type="submit" value="Stop Order" />
            </div>
           <Footer />
        </div>
    )
}

export default Admin;

