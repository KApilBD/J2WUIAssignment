import React from 'react';


const CartControl = (props) => (

    <div className="cart-control">

        <button
            className="cart-control__subtract"
            onClick={() => { props.onOneItemDeletefromCart()}}
            disabled={props.qty > 0 ? false : true}>
            -
        </button>
        <input type="text" class="cart-control__input" value={props.qty}  id="name"  />
        <button
            className="cart-control__add"
            onClick={ () => { props.onAddItem()}}>
            +
        </button>    
    </div>
);

export default CartControl;