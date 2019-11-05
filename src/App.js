import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils.js';

import './App.css';

const SectionsPage = (props) => (
  <div>
    <h1>{props.match.params.section.toUpperCase()} PAGE </h1>
  </div>
);

export default class App extends React.Component {
  state = {
    currentUser: null
  }
  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState(() => ({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          }));
        });
      } else {
        this.setState(() => ({ currentUser: userAuth}));
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={ this.state.currentUser }/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route path='/shop/:section' component={SectionsPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
};
