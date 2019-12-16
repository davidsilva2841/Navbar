import React, { Component } from "react";

import Logo from "./components/logo";
import Header from "./components/header";
import NavBar from "./components/navbar";
import Menu from "./components/menu";
// import SearchStars from './testing/SearchStars';


class App extends Component {
    render () {
        return (
            <div id="navbar-app">
                {/*<SearchStars />*/}
                <Logo/>
                <Header/>
                <NavBar />
                <Menu />
            </div>
        )
    }
}
export default App;


