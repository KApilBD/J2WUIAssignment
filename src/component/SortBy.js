import React from "react";

import SortOption from "./SortOption";


const SortBy = ({onChangeSortBy}) => {

    return (
        <div className="sortby">
            <h3 className="heading-3">Sort By</h3>
            
            <SortOption eleId="highlow" labelText={"Price--High Low"} name="sortby" value = "Hi-Lo" onChangeSortBy={onChangeSortBy}/>
            <SortOption eleId="lowhigh" labelText={"Price--Low High"} name="sortby" value = "Lo-Hi" onChangeSortBy={onChangeSortBy}/>
            <SortOption eleId="discount" labelText={"Discount"} name="sortby" value = "discount" onChangeSortBy={onChangeSortBy}/>
        </div>
    )
};

export default SortBy;