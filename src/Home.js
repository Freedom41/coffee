import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import Navbar from "./nav.js";
import Footer from "./footer.js";

const Header = () => {
    return (
        <div className="header">
            <Navbar />
        </div>
    )
}

const Main = () => {
    return (
        <div className="main">
            <p className="text"> Coffee makes everything better </p>
            <p className="text"> Sign up as we bring the best coffee beans to you </p>
        </div>
    )
}

const Sub = () => {
    return (
        <div className="subSection">
            <p className="text"> Our wide selection of beans </p>
        </div>
    )
}

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Main />
            <Sub />
            <Footer />
        </div>
    )
}

export default Home;
