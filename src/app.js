import React, { Component } from "react";

import Logo from "./components/logo";
import Header from "./components/header.jsx";
import Navbar from "./components/navbar.jsx";
import Menu from "./components/menu.jsx";

// import SearchStars from './testing/SearchStars';


class App extends Component {
  render () {
    return (
      <div id="navbar-app">
        {/*<SearchStars />*/ }
        <Logo/>
        <Header/>
        <Navbar/>
        <Menu/>
      </div>
    )
  }
}

export default App;


