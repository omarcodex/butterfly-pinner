import * as firebase from 'firebase';

import { testAction } from "../actions/userActions";
import store from "../store/configureStore";

let config = {
  apiKey: 'AIzaSyBhSdMEX0P-QGwfZLOYLApr63rmERuxb_o',
  authDomain: 'butterflypinner.firebaseapp.com',
  databaseURL: 'https://butterflypinner.firebaseio.com',
  projectId: 'butterflypinner',
  storageBucket: 'butterflypinner.appspot.com',
  messagingSenderId: '1000022264881'
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(firebaseUser=>{
  if (firebaseUser) {
    // console.log(firebaseUser);
  } else {
    console.log("Not logged in!");
  }
});

export default firebase;

let unsubscribe = store.subscribe(() =>
  // console.log(store.getState())
  2+2
)
