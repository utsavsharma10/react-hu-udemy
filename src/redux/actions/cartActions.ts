import {
	CartActionDispatchType,
	CartActions,
	CartActionType,
	CartData
} from "../constants/action-types";
export function addToCart(cartData: CartData) {
	const action: CartActionType = {
		type: CartActions.ADD_TO_CART,
		payload: cartData,
	};
	return cartActionDispatcher(action);
}

export function cartActionDispatcher(action: CartActionType) {
	return (dispatch: CartActionDispatchType) => {
		dispatch(action);
	};
}
