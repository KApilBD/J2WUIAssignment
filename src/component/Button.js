import React from "react";



const Button = ({ customBtn, btnText }) => {

    return (
            <button className={`btn ${customBtn}`} onClick={()=>{}} >
                {btnText}
            </button>
    )
};

export default Button;