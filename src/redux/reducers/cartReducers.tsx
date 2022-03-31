import {
  ActionTypes, CartActionType, CartData
} from "../constants/action-types";

const initialCart: CartData = {
  cartData: [],
};

export const cartReducer = (
  state: CartData = initialCart,
  action: CartActionType
): CartData => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return {
        ...state,
        ...action.payload,
      };
  }
  return state;
};
