import { ActionTypes } from "../constants/action-types";
const initialState = {
  products: [],
};

export const productsReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {...state, products: payload};
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }: any) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

// {
//   id: 1,
//   title: "react crs",
//   author: "abhish ji",
//   price: 90,
//   discount: 5,
//   tag1: "react",
//   tag2: "react"
// },