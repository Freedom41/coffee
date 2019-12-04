import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import ReactDOM from 'react-dom';
import "./index.css";
import Navbar from "./nav.js"
import Footer from "./footer.js"
import axios from 'axios'
import Admin from './Admin';


const Login = () => {

    const [input, text] = useState("");
    const [pass, passtext] = useState("");
    const [radio, radiotext] = useState("");
    const [logged,  setLog] = useState(false)

    const handleSubmit = async (e) => { 
        
        let body = {loginType: radio}
        setLog(true)
        let data;
        e.preventDefault();
        let api = await axios.get('https://panoramic-postbox.glitch.me/api/' + body.loginType)
                             .then(res => {
                                data = res.data; 
                                  if (data.user == "admin") {
                                    return "admin";
                                  }
                                  if (data.user == "seller") {
                                        return "seller"
                                  }
                                  if (data.user == "user") {
                                    return "user"
                                  } 
                               })
                               .catch(e => {
                                  console.log(e)
                               })
        

    }


    const handleChange = (e) => {
        let temp = e.target.value;
        return text(temp)
    }

    const handlePass = (e) => {
        let temp = e.target.value;
        //Password will be hashed
        return passtext(temp)
    }

    const handleRadio = (e) => {
        return radiotext(e.target.value)
    }

    if(!logged) {

    return(
        <div className="login">
            <Navbar />
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
                <label> User </label>
                <input type="text" name="user" placeholder="Username" value={input} onChange={(e) => handleChange(e)} required/>
                <label> Password </label>
                <input type="password" name="password" placeholder="Password" value={pass} onChange={(e) => handlePass(e)} required/>
                <label> User </label> 
                <input type="radio" name="userType" value={"user"} onChange={(e) => handleRadio(e)} required/>
                <label> Seller </label>
                <input type="radio" name="userType" value={"seller"} onChange={(e) => handleRadio(e)} required/> 
                <button type="submit" className="submit"> Submit </button>
            </form>
            <Footer />
        </div>
    )
    } else {
        return (
            <Redirect from="/login" to={"/" + radio} />
        )
    }
}

export default Login;