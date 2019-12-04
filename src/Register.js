import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Navbar from "./nav.js"
import Footer from "./footer.js"


const Register = () => {

    const [input, text] = useState("");
    const [pass, passtext] = useState("")
    const [email, emailtext] = useState("")
    const [radio, radiotext] = useState("")


    const handleSubmit = (e) => e.preventDefault();

    const handleChange = (e) => {
        let temp = e.target.value;
        return text(temp)
    }

    const handleMail = (e) => {
        let temp = e.target.value;
        return emailtext(temp)
    }

    const handlePass = (e) => {
        let temp = e.target.value;
        //Password will be hashed
        return passtext(temp)
    }

    const handleRadio = (e) => {
        return radiotext(e.target.value)
    }

    return(
        <div className="login">
            <Navbar />
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
                <label> User </label>
                <input type="text" name="user" placeholder="Username" value={input} onChange={(e) => handleChange(e)}/>
                <label> Email </label>
                <input type="email" name="Email" placeholder="Email" value={email} onChange={(e) => handleMail(e)} />
                <label> Password </label>
                <input type="password" name="password" placeholder="Password" value={pass} onChange={(e) => handlePass(e)} />
                <label> User </label> 
                <input type="radio" name="userType" value={"user"} onChange={(e) => handleRadio(e)} />
                <label> Seller </label>
                <input type="radio" name="userType" value={"seller"} onChange={(e) => handleRadio(e)} /> 
                <button type="submit" className="submit"> Submit </button>
            </form>
            <Footer />
        </div>
    )
}

export default Register;