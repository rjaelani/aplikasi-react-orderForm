import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total:0,
    };

    this.addTotal = this.addTotal.bind(this);
  }

  addTotal(price) {
    this.setState({
      total: this.state.total + price,
    });
  }
  
  render() {
    const services = this.props.products.map((product, index) => {
      return <Product product={product} addTotal={this.addTotal} key={index}/>;
    })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>welcome to react</h2>
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
        </header>

        <form id="app">
        <h1>Pesanan</h1>
        <ul>
          {services}
        </ul>

        <div className="total">
        Total:
        <span>Rp {this.state.total}</span>
        </div>
        </form>

      </div>
    );
  }
}

export default App;
