import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";



const rootElement = document.getElementById("app");



render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    rootElement);