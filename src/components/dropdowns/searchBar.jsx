import React, { Component } from "react";
import { Navbar, Nav, Form } from 'react-bootstrap';

const axios = require('axios');

let navbarProxy;
(process.env.NODE_ENV === 'production') ? navbarProxy = 'http://navbar-proxy-env.rf3rxfpfwq.us-east-2.elasticbeanstalk.com' : navbarProxy = 'http://localhost:3000';


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchActive: false,
            searchListData: []
        };
    }

    getProducts (productName) {
        return axios.post(navbarProxy + '/api/search', {Name: productName});
    }

    // --------------------------------------------------------------------------------------------------
    // Event listeners to close search list drop down when outside clicks
    componentWillMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    handleClick = (e) => {
        // Handles clicks outside of search box
        if (!this.state.searchActive) {
            return;
        }
        if (!this.node.contains(e.target)) {
            this.setState({ searchActive: false });
        }
    };

    // Activate search drop down list
    activateSearchList () {
        if (this.state.searchListData.length > 1){
            this.setState({ searchActive: true });
        }
    }
    // --------------------------------------------------------------------------------------------------

    onSearchChange(event) {
        console.log(`FILE: searchBar.jsx onSearchChange() | this.state.searchActive: \n`, this.state.searchActive);

        if(event.target.value.length === 0) {
            this.setState({searchListData: []});
            this.activateSearchList();
            this.setState({searchActive:false});
            return;
        }

        this.getProducts(event.target.value)
            .then(searchListData => {
                console.log(`FILE: App.js () | searchListData: \n`, searchListData);
                this.setState({searchListData: searchListData.data.slice(0,13)});
                this.activateSearchList();

            })
            .catch(error => {
                console.log(`FILE: App.js () | ERROR: \n`, error);
            });

    }


    renderSearchList() {
        return (
            <div
                id="search-list-container"
                ref={ node => this.node = node }
                className="col"
            >
                {this.state.searchListData.map((item, index) => {
                    return <a href={'../' + item.ID} className="search-item row" key={`search-item-${index}`}>{item.Name}</a>
                })}
            </div>
        )
    }

    render() {
        return (
            <Form inline>
                <div className="col">
                    {/* Search bar */ }
                    <Form.Control
                        id="searchBar"
                        onClick={ this.activateSearchList.bind(this) }
                        onChange={ this.onSearchChange.bind(this) }
                        type="text"
                        placeholder="Search West Buy"
                    />

                    { ( this.state.searchActive ) ? this.renderSearchList() : '' }
                </div>
            </Form>
        );
    }
}


export default SearchBar;

