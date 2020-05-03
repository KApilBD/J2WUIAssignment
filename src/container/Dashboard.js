import React, { Component } from "react";
import { NavLink} from "react-router-dom";

class Dashboard extends Component {

    render() {
        return (
            <>
                <header >Hiiiiiiii</header>
                <footer>Footer</footer>
                <NavLink to="/cart">Cart</NavLink>
            </>
        );
    }
}

export default Dashboard;