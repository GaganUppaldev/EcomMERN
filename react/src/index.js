import React from "react";
import ReactDOM from "react-dom/client";
import Main from './Nav.jsx';
import './index.css';
import './images/cart.svg';

const test = ReactDOM.createRoot(document.getElementById("navbar"));
test.render(
    <React.StrictMode>
    <Main />
    </React.StrictMode>
)
