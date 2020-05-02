import React, { useContext } from "react";

import Header from "../component/Header";
import Footer from "../component/Footer";

import Route from "../Route";

import {Context as ShoppingContext} from "../context/ShoppingContext";



const AppLayout = () => {
    const { state } = useContext(ShoppingContext);
    return (
        <div className="container">
            <Header data = {state.cartItems} />

            <Route childProps={"demo"} />

            <Footer />
        </div>
    );
}

export default AppLayout;