import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwDOZnLUHnfwksqH23ZeBlZB5sX5TH_W8",
  authDomain: "modul11-c0ca5.firebaseapp.com",
  databaseURL: "https://modul11-c0ca5-default-rtdb.firebaseio.com",
  projectId: "modul11-c0ca5",
  storageBucket: "modul11-c0ca5.appspot.com",
  messagingSenderId: "98117289279",
  appId: "1:98117289279:web:601bb6f96889741658ff8a",
  measurementId: "G-C1W2F1ZRRS",
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
