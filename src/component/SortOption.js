import React from "react";



const SortOption = ({ labelText, eleId , name, value , onChangeSortBy }) => {

    return (
        <div>
            <input type="radio"  className="sortby__radio-input" id={eleId} value= {value} name={name} onChange={() => {onChangeSortBy(event)}} />
            <label htmlFor={eleId} className="sortby__radio-label" >{labelText}</label>
        </div>
    )
};

export default SortOption;