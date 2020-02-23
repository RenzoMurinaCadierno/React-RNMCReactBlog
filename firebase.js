require('firebase/firestore')
import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyCj3lv_2jqmzQ6jIZXmioAVBC60xebYJHY",
  authDomain: "rnmcreactblog.firebaseapp.com",
  databaseURL: "https://rnmcreactblog.firebaseio.com",
  projectId: "rnmcreactblog",
  storageBucket: "rnmcreactblog.appspot.com",
  messagingSenderId: "190191918796",
  appId: "1:190191918796:web:54fc7358d2fac8af7a6c69"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

var db = firebase.firestore()

export const auth = firebase.auth()
export const firestore = firebase.firestore
export default db