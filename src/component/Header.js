import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import Star from "../assets/svg/Star";
import MagnifyingGlass from "../assets/svg/MagnifyingGlass";
import ShoppingCart from "../assets/svg/ShoppingCart";

import { Context as ShoppingContext } from "../context/ShoppingContext";

const Header = ({ data }) => {

    const [searchVal, setSearchVal] = useState("");
    const { searchFilter } = useContext(ShoppingContext);

    let qty = 0;

    data.map(i => {
        qty = qty + i.quantity;
    })

    const handleChange = (event) => {
        const value = event.target.value;
        setSearchVal(value);
        searchFilter(value);
    }

    return (
        <header className="header">
            <NavLink className="header__icon--star" to="/" exact  >
                <Star className="header__icon--star" />
            </NavLink>
            {/* <div className="header__icon--right">
                <MagnifyingGlass className="header__icon" />
            </div> */}
            <div className="header__icon--right">
                <input type="text" value={searchVal} className="header__search-input" placeholder="Search" onChange={() => { handleChange(event) }} />
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