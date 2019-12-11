import React, { Component } from "react";
const axios = require('axios');

import Logo from "./components/logo";
import Header from "./components/header";
import NavBar from "./components/navbar";
import Menu from "./components/menu";

let navbarProxy;
(process.env.NODE_ENV === 'production') ? navbarProxy = 'http://navbar-proxy-env.rf3rxfpfwq.us-east-2.elasticbeanstalk.com' : navbarProxy = 'http://localhost:3000';

class App extends Component {
    onSearchChange (event) {
        console.log(event.target.value);
        console.log(navbarProxy);
        // axios.post(navbarProxy + '/api/search', {Name: event.target.value})
        this.getProducts(event.target.value)
            .then(result => {
                console.log(`FILE: App.js () | : \n`, result);
            })
            .catch(error => {
            	console.log(`FILE: App.js () | ERROR: \n`, error);
            })
    }

    getProducts (productName) {
        return axios.post(navbarProxy + '/api/search', {Name: productName});
    }

    render () {
        return (
            <React.Fragment>
                <Logo/>
                <Header/>
                <NavBar onSearchChange={this.onSearchChange.bind(this)}/>
                <Menu />
            </React.Fragment>
        )
    }
}
export default App;


