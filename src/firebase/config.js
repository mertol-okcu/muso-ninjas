import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBrMF8vGIoHMReULZ3J31TXa4pcsakpEgk",
  authDomain: "muso-ninjas-d386f.firebaseapp.com",
  projectId: "muso-ninjas-d386f",
  storageBucket: "muso-ninjas-d386f.appspot.com",
  messagingSenderId: "999597677531",
  appId: "1:999597677531:web:4198538df7b19c99f425fe",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
