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


// {
//   id: 1,
//   title: "react crs",
//   author: "abhish ji",
//   price: 90,
//   discount: 5,
//   tag1: "react",
//   tag2: "react"
// },