import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAn-3GN7XLcGB09MvUxd7KnnK4u7QrNL-M",
  authDomain: "testing-react-aa.firebaseapp.com",
  projectId: "testing-react-aa",
  storageBucket: "testing-react-aa.appspot.com",
  messagingSenderId: "781308873530",
  appId: "1:781308873530:web:337cd52990bc8b90471e03",
  measurementId: "G-WXTGYYG4F7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };