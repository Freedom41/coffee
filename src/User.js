import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import "./index.css";
import Footer from "./footer.js"

const Buy = () => {
    return (
        <div className="bean-main">
            <div className="bean">
                <img src="https://res.cloudinary.com/freedom41/image/upload/v1575455603/coffee-1291656_640_h4mqna.jpg" />
                <p> Fresh beans right at your doorstep </p>
                <p> $20/ 10 kg </p>
                <button type="submit" value="Buy"> Buy </button>  
            </div>
            <div className="bean">
                <img src="https://res.cloudinary.com/freedom41/image/upload/v1575455602/coffee-3224527_640_nx1xhq.jpg" />
                <p> Fresh Dark beans right at your doorstep </p>
                <p> $50/ 10 kg </p>
                <button type="submit" value="Buy"> Buy </button>  
            </div>
            <div className="bean">
                <img src="https://res.cloudinary.com/freedom41/image/upload/v1575455752/coffee-beans-1650788_640_z3xgti.jpg" />
                <p> Or if you prefer the plant :)  </p>
                <p> $85/ 2 plants </p>
                <button type="submit" value="Buy"> Buy </button>  
            </div>
        </div>
    )
}

const User = () => {
    return(
        <div className="catalog">
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
            <Buy />
            <Footer />
        </div>
    )
}

export default User;