import React from "react";

import SortOption from "./SortOption";


const SortBy = () => {

    return (
        <div className="sortby">
            <h3 className="heading-3">Sort By</h3>
            
            <SortOption eleId="highlow" labelText={"Price--High Low"} name="sortby" />
            <SortOption eleId="lowhigh" labelText={"Price--High Low"} name="sortby" />
            <SortOption eleId="discount" labelText={"Discount"} name="sortby"/>
        </div>
    )
};

export default SortBy;