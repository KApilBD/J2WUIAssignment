import createDataContext from "./createDataConext";

const data ={
    "items":[
       {
          "name":"Samsung Series 4",
          "image":"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
          "price":{
             "actual":13999,
             "display":22500
          },
          "discount":37
       },
       {
          "name":"Samsung Super 6",
          "image":"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
          "price":{
             "actual":35999,
             "display":66900
          },
          "discount":46
       },
       {
          "name":"Samsung The Frame",
          "image":"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
          "price":{
             "actual":84999,
             "display":133900
          },
          "discount":36
       },
       {
          "name":"Thomson B9 Pro",
          "image":"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
          "price":{
             "actual":9999,
             "display":16999
          },
          "discount":41
       },
       {
          "name":"LG Ultra HD",
          "image":"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
          "price":{
             "actual":39990,
             "display":79990
          },
          "discount":50
       },
       {
          "name":"Vu Ready LED TV",
          "image":"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
          "price":{
             "actual":7999,
             "display":1783
          },
          "discount":52
       },
       {
          "name":"Koryo Android TV",
          "image":"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
          "price":{
             "actual":55999,
             "display":199990
          },
          "discount":71
       },
       {
          "name":"Micromax LED Smart",
          "image":"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
          "price":{
             "actual":9999,
             "display":27990
          },
          "discount":64
       }
    ]
 };

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

        case "search_Filter":
            const searchString = action.payload.toLowerCase();
            const updatedSeachedItems = state.products.items.filter(i => {
                console.log( i.name.includes(searchString),  i.name, searchString)
                const name = i.name.toLowerCase();
                return name.includes(searchString); 
            });

        return {...state,
            productsToshow:updatedSeachedItems
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
const searchFilter = (dispatch) => {
    return (value) => {
        dispatch({ type: "search_Filter", payload: value });
    }
}
const sortByOption = (dispatch) => {
    return (sortVal) => {
        dispatch({ type: "sortBy_Option", payload: sortVal });
    }
}


export const { Context, Provider } = createDataContext(
    shoppingReducer,
    { addItemToCart, priceRangeChange, sortByOption, deleteItemToCart, deleteItemOnefromCart, searchFilter },
    { ...initialState }
);
