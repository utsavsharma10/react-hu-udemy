import { ActionTypes, Cart } from "../constants/action-types";

export const setProducts = (products: Cart[]) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProduct = (product: any) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
