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
    }
}