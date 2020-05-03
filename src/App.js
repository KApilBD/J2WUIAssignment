import React from "react";
import "./assets/scss/main.scss";

import { Provider as ShoppingProvider } from "./context/ShoppingContext";

import AppLayout from "./container/AppLayout";

const App = () => {
return(
    <ShoppingProvider>
        <AppLayout />
    </ShoppingProvider>
);}

export default App;