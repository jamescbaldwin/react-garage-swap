import React from "react";
import "./Home/home.css";
import "./Seller/seller.css";
import "./Buyer/buyer.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomeScreen from "./Home/HomeScreen";
import BuyerScreen from "./Buyer/BuyerScreen";
import SellerScreen from "./Seller/SellerScreen";
import CartScreen from "./Cart/CartScreen";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sell">Seller</Link>
            </li>
            <li>
              <Link to="/buy">Buyers</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/buy">
            <BuyerScreen />
          </Route>
          <Route path="/sell">
            <SellerScreen />
          </Route>
          <Route path="/">
            <HomeScreen />
          </Route>
          <Route path="/cart">
            <CartScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
