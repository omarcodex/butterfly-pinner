import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBhSdMEX0P-QGwfZLOYLApr63rmERuxb_o",
  authDomain: "butterflypinner.firebaseapp.com",
  databaseURL: "https://butterflypinner.firebaseio.com",
  projectId: "butterflypinner",
  storageBucket: "butterflypinner.appspot.com",
  messagingSenderId: "1000022264881"
};
firebase.initializeApp(config);

export default firebase;