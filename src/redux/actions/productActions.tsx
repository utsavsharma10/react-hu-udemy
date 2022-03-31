import { ActionTypes } from "../constants/action-types"
// interface Products  {
//     id: number,
//     title: string,
//     author: string,
//     price: number,
//     discount: number,
//     tag1: string,
//     tag2: string,
// }
export const setProducts = (products: any) => {
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

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};