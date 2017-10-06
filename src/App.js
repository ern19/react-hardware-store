import React, { Component } from 'react';
import './App.css';
import Homepage from "./components/Homepage"
import Header from "./components/Header"
import Shop from "./components/Shop"
class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header />
        <hr />
        <Shop />
      </div>
    );
  }
}

export default App;
