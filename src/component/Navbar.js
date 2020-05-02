import React, { useState } from "react";

import { Slider } from "@material-ui/core";

import Button from "./Button";

function valuetext(value) {
    return `${value}°C`;
}

const Filterbar = () => {
    const [value, setValue] = useState([100, 10000])


    const handleChange = (event, newValue) => {
        console.log("new", newValue)
        setValue(newValue);
    };

    return (
        <div className="filter">
            <h3 className="heading-3" >Filters</h3>

            <div className="filter__range">
                <label className="filter__range-label">&#x20b9; 100</label>
                <label className="filter__range-label">&#8377; 10000</label>
            </div>
            <Slider
                className="filter__range-selector"
                value={value}
                onChange={handleChange}
                min={100}
                max={10000}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />

            <Button customBtn="filter-btn" btnText="Apply" />
        </div>
    )
};

export default Filterbar;