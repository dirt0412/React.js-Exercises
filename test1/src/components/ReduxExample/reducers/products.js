import { Reducer } from "redux";
import { createStore } from 'redux';

const initialState = {
    counter: 0
}
const products = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS_SUCCESS':
            return [
                ...action.products
            ]
        default:
            return state
    }
}
export default products