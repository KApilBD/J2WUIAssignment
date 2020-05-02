import React, { useContext } from "react";
import CartItemList from "../component/CartItemList";
import PriceDisplay from "../component/PriceDisplay";

import { Context as ShoppingContext } from "../context/ShoppingContext";



const Cart = () => {

    const { state, deleteItemToCart, deleteItemOnefromCart ,addItemToCart } = useContext(ShoppingContext);

    const { cartItems } = state;

    return (
        <div className="cart-dashboard">
            {
                cartItems.length ?
                    (
                        <>
                            <div className="display-cartbox">
                                <CartItemList data={cartItems} onDeleteItem={deleteItemToCart} onAddItem={addItemToCart} onOneItemDelete={deleteItemOnefromCart} />
                            </div>
                            <div className="cartbox-price-details">
                                <h4 className="heading-4 cartbox-price-details__heading">price details</h4>
                                <PriceDisplay data={cartItems} />
                            </div>
                        </>)
                    :
                    <h2 className="error-message">Please add Product to the cart</h2>
            }
        </div>
    );
}


export default Cart;