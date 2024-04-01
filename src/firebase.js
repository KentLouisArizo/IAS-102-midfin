import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDWGMFs7i6IzPkJgILDwgLx_Dr4D3rY_YU",
    authDomain: "my-project-ias-102.firebaseapp.com",
    projectId: "my-project-ias-102",
    storageBucket: "my-project-ias-102.appspot.com",
    messagingSenderId: "1050856630340",
    appId: "1:1050856630340:web:c3553381be8ecfae9e7411",
    measurementId: "G-B235PBRF7Y"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  export default firebase;