import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCivlSQb2A0qGFJFexavgfuDOnCJUs3rmE",
    authDomain: "facebook-clone-27c39.firebaseapp.com",
    projectId: "facebook-clone-27c39",
    storageBucket: "facebook-clone-27c39.appspot.com",
    messagingSenderId: "268165845518",
    appId: "1:268165845518:web:fa2405f7bd2ee5a40e625f",
    measurementId: "G-64HDEV6JFG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
/* connexion à la base de donnéee */
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db