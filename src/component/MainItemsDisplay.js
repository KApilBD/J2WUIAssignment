import React from "react";

import Navbar from "./Navbar";
import SortBy from "./SortBy";
import ItemList from "./ItemList";

const data = require("../Data.json");

const MainItemsDisplay = () => {

    return(
        <div className="dashboard">
            <div className = "dashboard__filter">
                <Navbar />
            </div>
            <div className = "display-itembox">
                <SortBy />
                <ItemList data = {data} location="shop"/>
            </div>
        </div>
    )
};

export default MainItemsDisplay;