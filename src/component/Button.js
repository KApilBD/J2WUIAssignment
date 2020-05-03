import React from "react";



const Button = ({ customBtn, btnText, onClickBtn }) => {

    return (
        <button className={`btn ${customBtn}`} onClick={() => {
            onClickBtn()
        }} >
            {btnText}
        </button>
    )
};

export default Button;