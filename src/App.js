import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

import { Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import CheckoutPage from './pages/checkout/checkout.component';


class App extends React.Component {

  unSubscribeFromAuth = null;

  // get the user data from fifebase
  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {

          setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  // Unsubscribe from authentication
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render ={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);