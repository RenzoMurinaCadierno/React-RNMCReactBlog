require('firebase/firestore')
import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "no sensitive info here",
  authDomain: "rnmcreactblog.firebaseapp.com",
  databaseURL: "no sensitive info here",
  projectId: "rnmcreactblog",
  storageBucket: "rnmcreactblog.appspot.com",
  messagingSenderId: "no sensitive info here",
  appId: "no sensitive info here"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

var db = firebase.firestore()

export const auth = firebase.auth()
export const firestore = firebase.firestore
export default db
