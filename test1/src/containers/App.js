import React, { Component } from 'react';
import Product from '../components/Products/Products';
import Cockpit from '../components/Cockpit/Cockpit'
import './App.scss';

class App extends Component {
  state = {
    products: [
      { id: 1, name: "product 1", weight: 200, changed: '' },
      { id: 2, name: "product 2", weight: 230, changed: '' },
      { id: 3, name: "product 3", weight: 99, changed: '' }
    ],
    showData: false
  }


  testButtonHandlerChangeWeight = () => {
    this.setState(prevState => ({
      products: prevState.products.map(
        obj => (obj.id === 1 ? Object.assign(obj, { weight: 344 }) : obj)// change weight by assign
      )
    }));
  }
  nameChanegHandler = (event, id) => {
    const productIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const product = {
      ...this.state.products[productIndex] // spread operator
    };
    //const product = Object.assign({}, this.state.products[productIndex]); // create object by Object.assign
    product.name = event.target.value;

    const products = [...this.state.products];
    productIndex[productIndex] = products;

    this.setState({ products: products });
  }

  testButtonHandlerShowHide = () => {
    const showData1 = this.state.showData;
    this.setState({ showData: !showData1 })
  }
  deleteProduct = (indexToDelete) => {
    //const products = this.state.products;
    const products = [...this.state.products]//spread operator
    products.splice(indexToDelete, 1);
    this.setState({ products: products });
  }

  render() {
    let products = null;
    products = (
      <Product
        products={this.state.products}
        clicked={this.deleteProduct}
        changed={this.nameChanegHandler}
      > </Product>
    )

    return (
      <div className="App">

        <Cockpit
          products={this.state.products}
        > </Cockpit>

        <button onClick={this.testButtonHandlerChangeWeight} > Test change weight </button>
        <button onClick={this.testButtonHandlerShowHide} > Show / Hide - Data</button>
        <button onClick={this.deleteProduct} > Delete Product</button>

        {this.state.showData === true ?
          <div>
            {products}
          </div>
          : <p> no data </p>
        }
      </div>
    );
  }
}

export default App;
