import React from "react";

import Item from "./Item";
import CartItem from "./CartItem";


const ItemList = ({ data, location }) => {

    return (
        <div className={location === "shop" ? "item-list" : "cart-list"}>
            {
                data.items.map((item) => {
                    if(location === "shop"){
                        return <Item item={item} key={item.name + item.discount + Math.floor(Math.random() * Math.floor(99))} />
                    }
                    if(location === "cart"){
                        return <CartItem item={item} key={item.name + item.discount + Math.floor(Math.random() * Math.floor(99))} />
                    }
                })
            }
        </div>
    )
};

export default ItemList;