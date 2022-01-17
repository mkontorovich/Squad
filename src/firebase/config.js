import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA89sZQBxVhWC5ya8DECm0qoVej3qkG1kg",
    authDomain: "squad-bb7db.firebaseapp.com",
    projectId: "squad-bb7db",
    storageBucket: "squad-bb7db.appspot.com",
    messagingSenderId: "523512281968",
    appId: "1:523512281968:web:27b41a43013043ad876db5"
  };

//initialize firebase
firebase.initializeApp(firebaseConfig)

//initialize services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage }