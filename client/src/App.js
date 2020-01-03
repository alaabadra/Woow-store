import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Nav, NavItem, NavLink } from 'reactstrap';

// import Signup from './Component/Signup';
import Login from './Component/Login';
import GetProducts from './Component/GetProducts';
import ShowTransactionPage from './Component/ShowTransactionPage';
import AddTransactionPage from './Component/AddTransactionPage';
import AddAproductToCartPage from './Component/AddAproductToCartPage';

class App extends Component {
  render() {
    return (

      <div>

        <div className="navbar">
          <Nav>
            <NavLink>
              <NavLink href="/signup">signup</NavLink>
            </NavLink>
            <NavLink>
              <NavLink href="/login">login</NavLink>
            </NavLink>
            <NavLink>
              <NavLink href="/get-products" className="main">Main</NavLink>
            </NavLink>
            <NavLink>
              <NavLink href="/add-aprod-to-cart">cart</NavLink>
            </NavLink>
            <NavLink>
              <NavLink href="/get-trans">Show Transactions</NavLink>
            </NavLink>
            <NavLink>
              <NavLink href="/add-trans">Add Transaction</NavLink>
            </NavLink>
          </Nav>
          <hr />

        </div>
        <BrowserRouter>
          <Switch>
            {/* <Route
exact
path="/signup"
render={props => (
<Signup />
)}
/> */}
            <Route
              exact
              path="/login"
              render={props => (
                <Login />
              )}
            />
            <Route
              exact
              path="/get-products"
              render={props => (
                <GetProducts />
              )}
            />
            <Route
              exact
              path="/add-aprod-to-cart"
              render={props => (
                <AddAproductToCartPage />
              )}
            />
            <Route
              exact
              path="/get-trans"
              render={props => (
                <ShowTransactionPage />
              )}
            />
            <Route
              exact
              path="/add-trans"
              render={props => (
                <AddTransactionPage />
              )}
            />

          </Switch>

        </BrowserRouter>
      </div>
    );
  }
}

export default App;

