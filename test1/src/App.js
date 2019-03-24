import React, { Component } from 'react';
import Product from './Product/Product';
import './App.css';

class App extends Component {
  state = {
    products: [
      { id: 1, name: "product 1", weight: 200 },
      { id: 2, name: "product 2", weight: 230 },
      { id: 3, name: "product 3", weight: 99 }
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
    return (
      <div className="App">
        <h1> Test1</h1>
        <button onClick={this.testButtonHandlerChangeWeight} > Test change weight </button>
        <button onClick={this.testButtonHandlerShowHide} > Show / Hide - Data</button>
        <button onClick={this.deleteProduct} > Delete Product</button>

        {this.state.showData === true ?
          products = (
            <p>
              {
                this.state.products.map(product => {
                  return <Product
                    id={product.id}
                    name={product.name}
                    weight={product.weight}
                    click={() => this.deleteProduct(product.id)}>
                  </Product>
                })
              }
              {/* <Product name={this.state.products[0].name} weight={this.state.products[0].weight}> </Product>
              <Product name={this.state.products[1].name} weight={this.state.products[1].weight}> </Product> */}
            </p>
          )

          : <p> no data </p>
        }

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
