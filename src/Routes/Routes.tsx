import React from 'react';
import Header from '../Components/Header';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import Home from '../pages/Home';
import ShoppingCart from '../pages/ShoppingCart';

const Routes: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={ShoppingCart} />
      </Switch>
    </Router>
  );
};

export default Routes;
