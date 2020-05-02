import React from 'react';


const CartControl = (props) => (

    <div className="cart-control">

        <button
            className="cart-control__subtract"
            onClick={props.removed}
            disabled={props.disable}>
            -
        </button>
        <input type="text" class="cart-control__input"   id="name"  />
        <button
            className="cart-control__add"
            onClick={props.added}>
            +
        </button>    
    </div>
);

export default CartControl;