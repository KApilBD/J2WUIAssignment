import React from "react";

import Star from "../assets/svg/Star";
import MagnifyingGlass from "../assets/svg/MagnifyingGlass";
import ShoppingCart from "../assets/svg/ShoppingCart"





const Header = () => {

    return (
        <header className="header">
            <Star className="header__icon--star" />
            {/* <div className="header__icon--right">
                <MagnifyingGlass className="header__icon" />
            </div> */}
            <div className="header__icon--right">
                
                <MagnifyingGlass className="header__icon" />
                <ShoppingCart className="header__icon" />
                <span class="header__notification">13</span>
            </div>
        </header>
    );
};

export default Header;