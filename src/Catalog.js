import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Navbar from "./nav.js"
import Footer from "./footer.js"

const Beans = () => {
    return(
        <div className="bean-main">
            <div className="bean">
                <img src="https://res.cloudinary.com/freedom41/image/upload/v1575455603/coffee-1291656_640_h4mqna.jpg" /> 
                <p> Fresh beans right at your doorstep </p>
            </div>
            <div className="bean">
                <img src="https://res.cloudinary.com/freedom41/image/upload/v1575455602/coffee-3224527_640_nx1xhq.jpg" />
                <p> Fresh Dark beans right at your doorstep </p>
            </div>
            <div className="bean">
                <img src="https://res.cloudinary.com/freedom41/image/upload/v1575455752/coffee-beans-1650788_640_z3xgti.jpg" />
                <p> Or if you prefer the plant :)  </p>
            </div>
        </div>
    )
}


const Catalog = () => {
    return (
        <div className="catalog">
           <Navbar />
           <Beans />
           <Footer />
        </div>
    )
}

export default Catalog;