// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import '@firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMgzLtSbAmjXQS-GMFnEtY4R5yJtRlGyw",
  authDomain: "authlogin-cceff.firebaseapp.com",
  projectId: "authlogin-cceff",
  storageBucket: "authlogin-cceff.appspot.com",
  messagingSenderId: "107208450344",
  appId: "1:107208450344:web:f791f2c8ffaf7fb4ecf01d"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const authlogin = firebaseApp.auth();

export {authlogin};
export default db;