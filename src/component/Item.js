import React from "react";

import Button from "./Button";


const Item = ({ item }) => {

    const { name, image, price: { actual, display }, discount } = item;

    return (
        <div className="item" >
            <img src={image} alt="item.name" className="item__image" />
            <h4 className="heading-4 item__name">{name}</h4>
            <div className="item__price">
                <p className="item__price--discounted">&#x20b9;{actual}</p>
                <p className="item__price--original">{display}</p>
                <p className="item__price--offer">&#37;{discount} off</p>
            </div>
            <div className="item__btn">
                <Button customBtn="item-btn" btnText="add to cart" />
            </div>
        </div>
    );
};

export default Item;