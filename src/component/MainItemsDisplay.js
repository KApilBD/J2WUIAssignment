import React, { useContext } from "react";

import Navbar from "./Navbar";
import SortBy from "./SortBy";
import ItemList from "./ItemList";

import { Context as ShoppingContext } from "../context/ShoppingContext";

const data = require("../Data.json");

const MainItemsDisplay = () => {

    const { state, addItemToCart, priceRangeChange, sortByOption } = useContext(ShoppingContext);

    const onChangeSortBy = (event) => {
        const value = event.target.value;

        sortByOption(value);
    }

    return (
        <div className="dashboard">
            <div className="dashboard__filter">
                <Navbar data={state} onPriceRangeChange={priceRangeChange} />
            </div>
            <div className="display-itembox">
                <SortBy onChangeSortBy={onChangeSortBy} />
                {
                    state.productsToshow.length ?
                        <ItemList data={state.productsToshow} addItemToCart={addItemToCart} location={state.onCart} />
                        :
                        <h2 className="error-message">No Product Found</h2>
                }
            </div>
        </div>
    )
};

export default MainItemsDisplay;