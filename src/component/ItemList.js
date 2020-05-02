import React from "react";

import Item from "./Item";


const ItemList = ({ data,addItemToCart }) => {

    return (
        <div className="item-list">
            {
                data.map((item) => {
                    return <Item item={item} addItemToCart={addItemToCart} key={item.name + item.discount + Math.floor(Math.random() * Math.floor(99))} />
                })
            }
        </div>
    )
};

export default ItemList;