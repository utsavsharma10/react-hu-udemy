import { CartActionDispatchType, ActionTypes, CartActionType, CartData } from "../constants/action-types";

export function addToCart(cartData: CartData) {
    const action: CartActionType = {
        type: ActionTypes.ADD_TO_CART,
        payload: cartData,
    };
    return cartActionsDispatcher(action);
}

export function cartActionsDispatcher(action: CartActionType) {
    return (dispatch: CartActionDispatchType) => {
        dispatch(action);
    }
}