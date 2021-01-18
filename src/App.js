import React, { Component } from "react";
import NavBar from "./components/navbar";
import { Route, Switch } from "react-router-dom";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            {/* Route is a wrapper around component and automatiaclly
            injects the history, location and match properties from the props */}
            <Route path="/products/:id" component={ProductDetails} />
            {/**
             * "render" help to pass parameters to a component inside a Route
             * however we need to inject props because it doesn't do that
             * automatically.
             */}
            <Route
              path="/products"
              render={(props) => <Products sortBy="newest" {...props} />}
            />
            <Route path="/posts/:year?/:month?" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/" component={Home} />
          </Switch>
          {/* 
          you can use "exact" or Switch (from the most specific 
          to the most generic route)
          */}
        </div>
      </div>
    );
  }
}

export default App;
