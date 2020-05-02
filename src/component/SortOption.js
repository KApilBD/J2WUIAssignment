import React from "react";



const SortOption = ({ labelText, eleId , name }) => {

    return (
        <div>
            <input type="radio"  className="sortby__radio-input" id={eleId} name={name} />
            <label htmlFor={eleId} className="sortby__radio-label" >{labelText}</label>
        </div>
    )
};

export default SortOption;