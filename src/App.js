import React, { Component } from 'react';
import './App.css';
import logo from './40621.jpg';
import AddItem from "./containers/AddItem";
import Cashier from "./containers/Cashier";
import Cart from "./containers/Cart";

class App extends Component {
  render() {
    return (
        <div className="container w-100 mt-5">
            {/*<div className="row w-100 align-content-center justify-content-center">*/}
                {/*<img src={logo} width="400vw" height="400vw"/>*/}
            {/*</div>*/}
            <div className="row align-content-center justify-content-center">
                <div className="col">
                    <AddItem/>
                </div>
                <div className="col">
                    <Cart/>
                </div>
                <div className="col">
                    <Cashier/>
                </div>
            </div>
        </div>
        );
    }
}


export default App;
