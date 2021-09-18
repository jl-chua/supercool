// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgAhB_KXZ0uRSc749I3dsj4dFKXlinCpQ",
  authDomain: "farm-anywhere-test.firebaseapp.com",
  projectId: "farm-anywhere-test",
  storageBucket: "farm-anywhere-test.appspot.com",
  messagingSenderId: "740497602522",
  appId: "1:740497602522:web:92675789d5e5001785f2e3",
  measurementId: "G-F492LZW2RN"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default getFirestore(app);



