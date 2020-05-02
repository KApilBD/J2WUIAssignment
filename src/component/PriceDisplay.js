import React from "react";

const PriceDisplay = ({ item: { numItem, discount, sum } }) => {
    return (
        <div className="display-price" >
            <div className="display-price__calculation">
                <p>{`Price(${numItem} item)`}</p>
                <p>:</p>
                <p>{sum}</p>
            </div>
            <div className="display-price__calculation">
                <p>Discount</p>
                <p>:</p>
                <p>{discount}</p>
            </div>
        </div>

    )
};

export default PriceDisplay;