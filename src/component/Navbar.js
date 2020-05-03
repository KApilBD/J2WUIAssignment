import React, { useState } from "react";

import { Slider } from "@material-ui/core";

import Button from "./Button";

function valuetext(value) {
    return `${value}°C`;
}

const Filterbar = ({ data, onPriceRangeChange }) => {
    const [value, setValue] = useState([data.priceRange[0], data.priceRange[1]])


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const onClickChangeHandler = () => {
        onPriceRangeChange(value);
    }

    return (
        <div className="filter">
            <h3 className="heading-3" >Filters</h3>

            <div className="filter__range">
                <label className="filter__range-label">&#x20b9; {data.priceRange[0]}</label>
                <label className="filter__range-label">&#8377; {data.priceRange[1]}</label>
            </div>
            <Slider
                className="filter__range-selector"
                value={value}
                onChange={handleChange}
                min={100}
                max={100000}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />

            <Button customBtn="filter-btn" btnText="Apply" onClickBtn={onClickChangeHandler} />
        </div>
    )
};

export default Filterbar;