import { applyMiddleware, compose, createStore } from "redux";
import logger from 'redux-logger';
import { persistStore } from "redux-persist";
import thunk from 'redux-thunk';
import reducers from "./reducers/index";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, applyMiddleware(thunk, logger));
export const persistor = persistStore(store);

export default store;