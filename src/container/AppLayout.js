import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Header from "../component/Header";
import Footer from "../component/Footer";

import Route from "../Route";


class AppLayout extends Component {

    render() {
        return (
            <div className="container">
                <Header />
                
                <Route childProps = {"demo"} />

                <Footer />
            </div>
        );
    }
}

export default AppLayout;