import firebase from 'firebase'
require('@firebase/firestore')



const firebaseConfig = {
  apiKey: "AIzaSyAwppxdM34d5OTfHGNeokpmH9_YtBaHOtY",
  authDomain: "class-91-a8868.firebaseapp.com",
  projectId: "class-91-a8868",
  storageBucket: "class-91-a8868.appspot.com",
  messagingSenderId: "940851811124",
  appId: "1:940851811124:web:76a43356c8b7fcf4540b61"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();