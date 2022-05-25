// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA3z-2NgAyNj_02vJEgjEdoYoT6CVhMoFc",
  authDomain: "clone1-62d3a.firebaseapp.com",
  projectId: "clone1-62d3a",
  storageBucket: "clone1-62d3a.appspot.com",
  messagingSenderId: "95535355304",
  appId: "1:95535355304:web:b5151a9f8a4015a5dd799d",
  measurementId: "G-QZPD602PRX"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
