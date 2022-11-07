import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBSzrsyuRgIEYQ4FeMn-FF-XJda1NOMyLA',
  authDomain: 'portfolio-d52b7.firebaseapp.com',
  projectId: 'portfolio-d52b7',
  storageBucket: 'portfolio-d52b7.appspot.com',
  messagingSenderId: '145346749853',
  appId: '1:145346749853:web:ef2423692062a5fc907b74',
  measurementId: 'G-D7B87KZQ0L',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
