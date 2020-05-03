import React from "react";

import CartItem from "./CartItem";


const CartItemList = ({ data, onDeleteItem, onAddItem, onOneItemDelete }) => {

    return (
        <div className="cart-list">
            {
                data.map((i) => {
                    return <CartItem item={i.item} onOneItemDelete={onOneItemDelete} onAddItem={onAddItem} onDeleteItem={onDeleteItem} qty={i.quantity} key={i.item.name + i.item.discount + Math.floor(Math.random() * Math.floor(99))} />
                })
            }
        </div>
    )
};

export default CartItemList;