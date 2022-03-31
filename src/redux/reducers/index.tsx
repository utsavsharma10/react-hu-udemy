import * as localforage from "localforage";
import { combineReducers } from "redux";
import { PersistConfig, persistReducer } from "redux-persist";
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
  pStore: persistReducer(persistConfig, cartReducer)
});

export default reducers;
