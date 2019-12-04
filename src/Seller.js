import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import "./index.css";
import Navbar from "./nav.js"
import Footer from "./footer.js"

const Seller = () => {
    return (
        <div className="catalog" >
            <div className="nav">
                <li> <Link to="./"> Home </Link> </li>
                <li> <Link to="./"> Logout </Link>  </li>
                <li> <Link to="./catalogue"> Catalogue </Link> </li>
            </div>
            <div className="accountInfo"> 
                <form onSubmit={(e) => e.preventDefault()} className="profile">
                    <label> Name </label>
                    <input type="text" placeholder="james" />
                    <label> Age </label>
                    <input type="text" placeholder="Age" />
                    <label> Address </label>
                    <input type="text" placeholder="Fill in address" />
                    <label> Mob No </label>
                    <input type="text" placeholder="####" />
                    <label> Change password </label>
                    <input type="password" placeholder="New password" />
                    <input type="password" placeholder="confirm password" />
                    <button type="submit" value="submit"> Update </button> 
                </form>
            </div>
            <div className="items">
                <div className="item">
                    <p> Remove items </p>
                    <img src="https://res.cloudinary.com/freedom41/image/upload/v1575455603/coffee-1291656_640_h4mqna.jpg" /> 
                    <button type="submit" value="Remove"> Remove </button>
                </div>
                <div className="add">
                    <p> Add items </p>
                    <button type="submit" value="Upload"> Upload </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Seller;
