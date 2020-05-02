import React from "react";

import CartControl from "./CartControl";
const data = require("../Data.json");

const CartItem = ({ item }) => {
    const { name, image, price: { actual, display }, discount } = item;

    return (
        <div className="cart-item" >
            <img src={image} alt="item.name" className="cart-item__image" />
            <div className="cart-item__detail">
                <h4 className="heading-4 cart-item__name">{name}</h4>
                <div className="cart-item__price">
                    <p className="item__price--discounted">&#x20b9;{actual}</p>
                    <p className="cart-item__price--original">{display}</p>
                    <p className="item__price--offer">&#37;{discount} off</p>
                </div>
            </div>
            <CartControl />
            <div className= "cart-item__remove">
                <button className="cart-item__remove--btn">
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CartItem;