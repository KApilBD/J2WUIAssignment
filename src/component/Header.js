import React from "react";
import { NavLink } from "react-router-dom";

import Star from "../assets/svg/Star";
import MagnifyingGlass from "../assets/svg/MagnifyingGlass";
import ShoppingCart from "../assets/svg/ShoppingCart"

const Header = ({ data }) => {

    let qty = 0;

    data.map(i => {
        qty = qty + i.quantity;
    })

    return (
        <header className="header">
            <Star className="header__icon--star" />
            {/* <div className="header__icon--right">
                <MagnifyingGlass className="header__icon" />
            </div> */}
            <div className="header__icon--right">

                <MagnifyingGlass className="header__icon" />
                <NavLink to="/cart" exact  >
                    <ShoppingCart className="header__icon" />
                    {qty > 0 &&
                        <span className="header__notification">{qty}</span>}
                </NavLink>
            </div>
        </header>
    );
};

export default Header;