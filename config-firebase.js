import * as firebase from 'firebase';

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDfBhujw-U7HRT5yacJUNYPRLrtTCNhhe8",
    authDomain: "cnp-mobile-services.firebaseapp.com",
    projectId: "cnp-mobile-services",
    storageBucket: "cnp-mobile-services.appspot.com",
    messagingSenderId: "935684544619",
    appId: "1:935684544619:web:f9b92d6c111ac82eeeb92e",
    measurementId: "G-DSCJ7VL173"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();