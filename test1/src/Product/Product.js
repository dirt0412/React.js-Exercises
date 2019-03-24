import React from 'react';
import './Product.css'

const product = (props) => {
    return (
        <ul className="Product-ul">
            <li className="Product">
                My Product
            </li>
            <li >
                ID: <span className="Product-name">{props.id}</span>
            </li>
            <li >
                Name: <span className="Product-name">{props.name}</span>
            </li>
            <li >
                Weight: <span className="Product-weight">{props.weight}[kg]</span>
            </li>
        </ul>
    )
};

export default product;