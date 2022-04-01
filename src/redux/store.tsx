import * as localforage from "localforage";
import { applyMiddleware, createStore } from "redux";
import logger from 'redux-logger';
import { PersistConfig, persistReducer, persistStore } from "redux-persist";
import thunk from 'redux-thunk';
import reducers from "./reducers/index";

const persistConfig: PersistConfig<any> = {
	key: "root",
	version: 1,
	storage: localforage,
	blacklist: [],
};

const pReducer = persistReducer(persistConfig, reducers);

export const store = createStore(pReducer, applyMiddleware(thunk, logger));
export const persistor = persistStore(store);

export default store;

