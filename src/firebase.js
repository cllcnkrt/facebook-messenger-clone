import firebase from "firebase";

const firebaseApp = firebase.initializeApp( {
  apiKey: "AIzaSyAwbFzwKAUzxP_SfpE4hgMq7qqW5XKmlnI",
  authDomain: "facebook-messenger-clone-deaef.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-deaef-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "facebook-messenger-clone-deaef",
  storageBucket: "facebook-messenger-clone-deaef.appspot.com",
  messagingSenderId: "969576706577",
  appId: "1:969576706577:web:c709b3891234e25e9677b0",
  measurementId: "G-YN1QEBWX46"
})

const db = firebaseApp.firestore();

export default db ;
