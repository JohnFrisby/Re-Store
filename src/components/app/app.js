import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './app.css';
import ErrorBoundry from "../error-boundry";

export default class App extends Component {

    render() {
        return (
            <ErrorBoundry />
        )
    }
    
}