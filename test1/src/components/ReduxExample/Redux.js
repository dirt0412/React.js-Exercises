import * as React from 'react'
//import Product from '../components/Products/Products';

const reduxTest1 = (props) => {
    //reducer
    let addProduct = (product = { id: 1, name: "product 1", weight: 0, changed: '' }) => {
        console.log(product)
        let productNew = Object.assign({}, product, { id: 333, name: "product 1" + product.id, weight: 499 });
        console.log(productNew);
    }
    return (
        <div>
            <span>Redux test</span>
            <button onClick={addProduct}> Add Product Redux Test</button>
        </div>
    );
}

export default reduxTest1;