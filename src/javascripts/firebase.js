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

export const fb = firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    writeUserData(firebaseUser);
  } else {
    console.log('Not logged in!');
  }
});

function writeUserData(user) {
  var appUsersRef = firebase.database().ref('/app_users');
  var appUserRef = appUsersRef.child(user.uid);
  appUserRef.once('value').then(function(snapshot) {
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
