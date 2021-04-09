import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyAu397Xh5ySWHSaUTQwwfXPU4RDWg3Fuvs",
    authDomain: "clone-e5f32.firebaseapp.com",
    projectId: "clone-e5f32",
    storageBucket: "clone-e5f32.appspot.com",
    messagingSenderId: "570876236805",
    appId: "1:570876236805:web:6d965e0dbb005b58a0b86c",
    measurementId: "G-6TCECEB9LK"
  });

  const auth = firebase.auth();

  export {auth};