export const ActionTypes = {
    SET_PRODUCTS: "SET_PRODUCTS",
    SELECTED_PRODUCT: "SELECTED_PRODUCT",
    ADD_TO_CART: "ADD_TO_CART",
  };

export interface Cart {
	id: string;
	title: string;
	author: string;
	price: number;
	discount: number;
	tag1: string;
	tag2: string;
}

export enum CartActions {
	ADD_TO_CART = "ADD_TO_CART",
}

export interface CartData {
	cartData: Cart[];
}

export interface CartActionType {
	type: string;
	payload: CartData;
}

export type CartActionDispatchType = (args: CartActionType) => CartActionType;
