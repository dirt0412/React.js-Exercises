import { combineReducers } from "redux";
//import { products } from "../../Products/Products";

const products = {
    products: [
        { id: 1, name: "product 1", weight: 200, changed: '' },
        { id: 2, name: "product 2", weight: 230, changed: '' },
        { id: 3, name: "product 3", weight: 99, changed: '' }
    ]
}
export default combineReducers({
    products
});
