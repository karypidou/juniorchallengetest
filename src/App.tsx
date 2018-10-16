import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import {ProductPage} from "./product-page/ProductPage";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the MediaMarktSaturn Frontend Cat Store</h1>
        </header>
        <ProductPage/>
      </div>
    );
  }
}

export default App;
