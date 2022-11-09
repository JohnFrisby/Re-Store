import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, CartPage } from "../pages";
import './app.css';

const App = () => {
    return (
        <Routes>
            <Route
                path="/"
                component={HomePage}
                exact />

            <Route
                path="/cart"
                component={CartPage} />
        </Routes>
    );
};

export default App;