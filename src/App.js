import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';

import './App.css';

const SectionsPage = (props) => (
  <div>
    <h1>{props.match.params.section.toUpperCase()} PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route path='/shop/:section' component={SectionsPage} />
      </Switch>
    </div>
  );
}

export default App;
