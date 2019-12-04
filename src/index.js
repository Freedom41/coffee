import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import { Switch , Route, BrowserRouter as Router } from 'react-router-dom';
import Home from "./Home.js";
import User from "./User.js";
import Catalog from "./Catalog.js";
import Login from "./Login.js";
import Register from "./Register.js";
import Admin from "./Admin.js";
import Seller from "./Seller.js";

const cust404 = () => {
    return(
        <div className="cust404">
            <h1> 404 error No page found</h1>
        </div>
    )
} 

const App = () => {

    return(
    <Router>
        <div className="app"> 
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/catalogue" component={Catalog} />
            <Route path="/register" component={Register} />
            <Route path="/admin" component={Admin} />
            <Route path="/seller" component={Seller} />
            <Route path="/user" component={User} /> 
            <Route component={cust404} />
       </Switch>
        </div>
    </Router >
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

