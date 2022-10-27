import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './app.css';
import Spinner from "../spinner";

export default class App extends Component {

    render() {
        return (
            <Spinner />
        )
    }
    
}