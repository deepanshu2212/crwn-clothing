import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD5mDckdVtc5SF0BQZJ8fTlAXNXVhIcBHY",
    authDomain: "crwn-db-f27cb.firebaseapp.com",
    databaseURL: "https://crwn-db-f27cb.firebaseio.com",
    projectId: "crwn-db-f27cb",
    storageBucket: "crwn-db-f27cb.appspot.com",
    messagingSenderId: "264477954851",
    appId: "1:264477954851:web:61bcac5e5657ecd08af296",
    measurementId: "G-QV69BYC7R4"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;