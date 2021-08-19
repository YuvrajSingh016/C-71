import * as firebase from 'firebase'
require('@firebase/firestore')
 
 var firebaseConfig = {
    apiKey: "AIzaSyBXXWJlDHGQElw5syJPh9-Uz6NLmoa1Afw",
    authDomain: "willy-app-9e704.firebaseapp.com",
    projectId: "willy-app-9e704",
    storageBucket: "willy-app-9e704.appspot.com",
    messagingSenderId: "112518892823",
    appId: "1:112518892823:web:2d21b1028b350c2774bb52"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore();