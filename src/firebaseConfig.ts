// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace these values with your Firebase project credentials
const firebaseConfig = {
    apiKey: "AIzaSyAMNonuHsRy-KsPl6PFQXFtPoko7WtexT8",
    authDomain: "sih408.firebaseapp.com",
    projectId: "sih408",
    storageBucket: "sih408.appspot.com",
    messagingSenderId: "897229750480",
    appId: "1:897229750480:web:a46ea07e8e948d630d9ed5",
    measurementId: "G-58M9MBQJ4H"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();
const auth = firebase.auth();

export { firestore, auth };
