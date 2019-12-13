import React, { Component } from "react";


import Logo from "./components/logo";
import Header from "./components/header";
import NavBar from "./components/navbar";
import Menu from "./components/menu";


class App extends Component {





    render () {
        return (
            <React.Fragment>
                {/*<a href="/products/23">test</a>*/}
                <Logo/>
                <Header/>
                <NavBar />
                <Menu />
            </React.Fragment>
        )
    }
}
export default App;


