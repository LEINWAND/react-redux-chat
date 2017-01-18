/* @flow */
'use strict'

import firebase from 'firebase'


const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBo-gyr8DhSEbM1UelaRVlsKl392xufrnw",
  authDomain: "react-redux-chat-725fa.firebaseapp.com",
  databaseURL: "https://react-redux-chat-725fa.firebaseio.com",
  storageBucket: "react-redux-chat-725fa.appspot.com",
  messagingSenderId: "650200239583"
}

const FirebaseApp = firebase.initializeApp(FIREBASE_CONFIG)
export const FirebaseDB = FirebaseApp.database()
