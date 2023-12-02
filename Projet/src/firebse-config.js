// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAh-Ftv8MacQ0jBqwHy9xx0b8jMGy6WtI0",
//   authDomain: "projet-integration-566b5.firebaseapp.com",
//   projectId: "projet-integration-566b5",
//   storageBucket: "projet-integration-566b5.appspot.com",
//   messagingSenderId: "107836050774",
//   appId: "1:107836050774:web:0c18d67ce3c2c32e8a5af7"
// };
const firebaseConfig = {
  apiKey: "AIzaSyBezpSiHTKlugPgh7SBRfifdoV13k0sjnc",
  authDomain: "projet-integration-fa08f.firebaseapp.com",
  projectId: "projet-integration-fa08f",
  storageBucket: "projet-integration-fa08f.appspot.com",
  messagingSenderId: "548899387572",
  appId: "1:548899387572:web:76ad74412a2fb812cbffe1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)