import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productsReducers";


const rootReducer = combineReducers({
    allProducts: productsReducer,
    product: selectedProductsReducer,
});

export default rootReducer;