import createDataContext from "./createDataConext";

const data = require("../Data.json");

const initialState = {
    "products": data,
    "cartItems": [],
    "priceRange": [100, 100000],
    "searchString": "",
    "onCart": false,
    "productsToshow": data.items,
    "sortBy": "",
}

const shoppingReducer = (state, action) => {
    switch (action.type) {
        case 'add_ItemToCart':
            const cartItemIndex = state.cartItems.findIndex(i => {
                return i.item.name === action.payload.item.name;
            });
            let newQuantity = 1;
            const updatedCartItems = [...state.cartItems];

            if (cartItemIndex >= 0) {
                newQuantity = state.cartItems[cartItemIndex].quantity + 1;
                updatedCartItems[cartItemIndex].quantity = newQuantity;
            } else {
                updatedCartItems.push({ item: action.payload.item, quantity: newQuantity });
            }
            return {
                ...state,
                cartItems: updatedCartItems
            };
        case 'priceRange_Change':
            const newPriceRange = action.payload;

            const updatedProductListItems = state.products.items.filter(i => {
                return i.price.actual >= newPriceRange[0] && i.price.actual <= newPriceRange[1]
            });
            return {
                ...state,
                priceRange: newPriceRange,
                productsToshow: updatedProductListItems
            }
        case 'sortBy_Option':
            const newSortByVal = action.payload;

            const SortedProductListItems = state.productsToshow.sort((a, b) => {
                if (newSortByVal === "Hi-Lo") {
                    return parseInt(b.price.actual) - parseInt(a.price.actual);
                }
                if (newSortByVal === "Lo-Hi") {
                    return parseInt(a.price.actual) - parseInt(b.price.actual);
                }
                if (newSortByVal === "discount") {
                    return parseInt(b.discount) - parseInt(a.discount);
                }
            });
            return {
                ...state,
                sortBy: newSortByVal,
                productsToshow: SortedProductListItems
            }
        case 'delete_ItemToCart':
            const itemRemove = action.payload;
            const updatedCartItemList = state.cartItems.filter((i) => itemRemove !== i.item.name);
            return { ...state, cartItems: updatedCartItemList }
        case "delete_OneItemToCart":
            const itemName = action.payload;
            const cartdeleteItemIndex = state.cartItems.findIndex(i => {
                return i.item.name === itemName;
            });
            const updatedCartItemsForOneDelete = [...state.cartItems];

            if (cartdeleteItemIndex >= 0 && updatedCartItemsForOneDelete[cartdeleteItemIndex].quantity > 1) {
                updatedCartItemsForOneDelete[cartdeleteItemIndex].quantity = state.cartItems[cartdeleteItemIndex].quantity - 1;
            }
            return {
                ...state,
                cartItems: updatedCartItemsForOneDelete
            }

        default:
            return state;
    }
}

const addItemToCart = (dispatch) => {
    return (item) => {

        dispatch({ type: "add_ItemToCart", payload: { item } });
    };
}
const deleteItemOnefromCart = (dispatch) => {
    return (name) => {
        dispatch({ type: "delete_OneItemToCart", payload: name });
    }
}
const deleteItemToCart = (dispatch) => {
    return (name) => {
        dispatch({ type: "delete_ItemToCart", payload: name });
    }
}
const priceRangeChange = (dispatch) => {
    return (valArry) => {
        dispatch({ type: "priceRange_Change", payload: valArry });
    }
}
const sortByOption = (dispatch) => {
    return (sortVal) => {
        dispatch({ type: "sortBy_Option", payload: sortVal });
    }
}


export const { Context, Provider } = createDataContext(
    shoppingReducer,
    { addItemToCart, priceRangeChange, sortByOption, deleteItemToCart, deleteItemOnefromCart },
    { ...initialState }
);
