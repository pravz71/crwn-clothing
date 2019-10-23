import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';

import './App.css';

const SectionsPage = (props) => (
  <div>
    <h1>{props.match.params.section.toUpperCase()} PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/:section' component={SectionsPage} />
      </Switch>
    </div>
  );
}

export default App;
