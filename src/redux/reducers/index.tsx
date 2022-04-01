import * as localforage from "localforage";
import { combineReducers } from "redux";
import { PersistConfig } from "redux-persist";
import { cartReducer } from "./cartReducers";
import { productsReducer, selectedProductsReducer } from "./productsReducers";

const persistConfig: PersistConfig<any> = {
	key: "root",
	version: 1,
	storage: localforage,
	blacklist: [],
};

const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  cartData: cartReducer
});
	
export default reducers;
