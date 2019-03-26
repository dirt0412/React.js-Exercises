import React, { Component } from 'react';
import Product from './Product/Product';
import './App.css';

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
    let classes = [this.state.products.length <= 1 ? 'red' : 'green']

    return (
      <div className="App">
        <h1 className={classes.join(' ')}> {(this.state.products.length <= 1) ? 'End of resources' : 'Resources'} </h1>
        <button onClick={this.testButtonHandlerChangeWeight} > Test change weight </button>
        <button onClick={this.testButtonHandlerShowHide} > Show / Hide - Data</button>
        <button onClick={this.deleteProduct} > Delete Product</button>

        {this.state.showData === true ?
          products = (
            <div>
              {
                this.state.products.map(product => {
                  return <Product
                    id={product.id}
                    name={product.name}
                    weight={product.weight}
                    key={product.id}
                    click={() => this.deleteProduct(product.id)}
                    changed={(event) => this.nameChanegHandler(event, product.id)}
                  >
                  </Product>
                })
              }
              {/* <Product name={this.state.products[0].name} weight={this.state.products[0].weight}> </Product>
              <Product name={this.state.products[1].name} weight={this.state.products[1].weight}> </Product> */}
            </div>
          )

          : <p> no data </p>
        }
      </div>
    );
  }
}

export default App;
