import * as firebase from 'firebase';

import { testAction } from '../actions/userActions';
import store from '../store/configureStore';
import { loginUser } from '../actions/userActions';

let config = {
  apiKey: 'AIzaSyBhSdMEX0P-QGwfZLOYLApr63rmERuxb_o',
  authDomain: 'butterflypinner.firebaseapp.com',
  databaseURL: 'https://butterflypinner.firebaseio.com',
  projectId: 'butterflypinner',
  storageBucket: 'butterflypinner.appspot.com',
  messagingSenderId: '1000022264881'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.database();

auth.onAuthStateChanged(fbUser => {
  if (fbUser) {
    writeUserData(fbUser);
    store.dispatch(
      loginUser({
        uid: fbUser.uid,
        token: fbUser.refreshToken
      })
    );
  } else {
    store.dispatch(
      loginUser({
        uid: null,
        token: null
      })
    );
  }
});

function writeUserData(user) {
  var appUsersRef = db.ref('/app_users');
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
