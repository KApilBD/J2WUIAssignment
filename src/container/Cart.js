import React, { Component } from "react";
import ItemList from "../component/ItemList";
import PriceDisplay from "../component/PriceDisplay";

const data = require("../Data.json");

const data2 = [
    {
        type: "calculatedPrice",
        numItem: 2,
        sum: 400,
        discount: 140
    }
]

class Cart extends Component {

    render() {
        return (
            <div className="cart-dashboard">
                <div className="display-cartbox">
                    <ItemList data={data} location="cart" />
                </div>
                <div className="cartbox-price-details">
                    <h4 className="heading-4 cartbox-price-details__heading">price details</h4>
                    {
                        data2.map(item => {
                            return <PriceDisplay item={item} />
                        })
                    }
                    <div className="cartbox-price-details__total">
                        <p>Total Payable</p>
                        <p>{260}</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default Cart;