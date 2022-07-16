import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBLblkrYckIGyQZmTO5cpM9rw-f1WiIrHY",
  authDomain: "netflix-89274.firebaseapp.com",
  projectId: "netflix-89274",
  storageBucket: "netflix-89274.appspot.com",
  messagingSenderId: "124881387391",
  appId: "1:124881387391:web:389fe0cd350e70947d644a",
  measurementId: "G-5H7WLY0MVK"
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
