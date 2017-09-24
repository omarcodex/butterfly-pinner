import * as firebase from 'firebase';

import { testAction } from '../actions/userActions';
import store from '../store/configureStore';

let config = {
  apiKey: 'AIzaSyBhSdMEX0P-QGwfZLOYLApr63rmERuxb_o',
  authDomain: 'butterflypinner.firebaseapp.com',
  databaseURL: 'https://butterflypinner.firebaseio.com',
  projectId: 'butterflypinner',
  storageBucket: 'butterflypinner.appspot.com',
  messagingSenderId: '1000022264881'
};

firebase.initializeApp(config);

var currentUser = null;
var currentUserID = null;

firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    console.log('User signed in: ', JSON.stringify(firebaseUser));
    console.log(JSON.stringify(firebaseUser.uid));
    writeUserData(firebaseUser);
    // localStorage.removeItem(firebaseAuthKey);

    // // here you could authenticate with you web server to get the
    // // application specific token so that you do not have to
    // // authenticate with firebase every time a user logs in
    // localStorage.setItem(appTokenKey, user.uid);
    //
    // // store the token
    // this.props.history.push('/app/home');
  } else {
    console.log('Not logged in!');
  }
});

let unsubscribe = store.subscribe(
  () =>
    // console.log(store.getState())
    2 + 2
);

function writeUserData(user) {
  var appUsersRef = firebase.database().ref('/app_users');
  var appUserRef = appUsersRef.child(user.uid);
  appUserRef.once('value').then(function(snapshot) {
    // default doWhop writes first, so this check resulted in
    // userData not being written changed set to update
    var userData = {
      displayName: user.displayName,
      photoURL: user.photoURL ? user.photoURL : 'NA',
      uid: user.uid,
      email: user.email,
      lastLoginDatePST: Date()
    };
    appUserRef.update(userData);
  });
}

export default firebase;
