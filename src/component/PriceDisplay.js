import React from "react";

const PriceDisplay = ({ data }) => {

    let sumActual = 0;
    let sumDisplay = 0;
    let qty = 0;

    data.map(i => {

        qty = qty + i.quantity;
        sumDisplay = sumDisplay + i.quantity*i.item.price.display;
        sumActual = sumActual + i.quantity*i.item.price.actual;
    })

    return (
        <div className="display-price" >
            <div className="display-price__calculation">
                <p>{`Price(${qty || 0} item)`}</p>
                <p>:</p>
                <p>{sumDisplay}</p>
            </div>
            <div className="display-price__calculation">
                <p>Discount</p>
                <p>:</p>
                <p>{sumDisplay - sumActual || 0}</p>
            </div>
            <div className="cartbox-price-details__total">
                <p>Total Payable</p>
                <p>&#x20b9;{sumActual}</p>
            </div>
        </div>

    )
};

export default PriceDisplay;