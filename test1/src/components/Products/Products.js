import * as React from 'react'
import Product from '../Products/Product/Product';

const products = (props) => props.products.map(product => {
    return <Product
        id={product.id}
        name={product.name}
        weight={product.weight}
        key={product.id}
        clicked={() => props.deleteProduct(product.id)}
        changed={(event) => props.nameChanegHandler(event, product.id)}
    >
    </Product>
})

export default products