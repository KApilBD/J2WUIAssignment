import React from "react";

import Navbar from "./Navbar";

const MainItemsDisplay = () => {

    return(
        <div className="dashboard">
            <div className = "dashboard__filter">
                <Navbar />
            </div>
            <div className = "display-itembox">
                Items
            </div>
        </div>
    )
};

export default MainItemsDisplay;