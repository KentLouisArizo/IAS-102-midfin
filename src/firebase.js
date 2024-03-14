import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDvddixPYa8tc6dbWup4-sqOco2pxsnrYU",
    authDomain: "midterm-ias102.firebaseapp.com",
    projectId: "midterm-ias102",
    storageBucket: "midterm-ias102.appspot.com",
    messagingSenderId: "617256644341",
    appId: "1:617256644341:web:2de0212fadcc30665e5fbc",
    measurementId: "G-4NTNZ8Z75K"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  export default firebase;