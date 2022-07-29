// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeJT9H3bG7L7siER7hUKvYcSBakdwS-4k",
  authDomain: "https://yaap-project-q8j75jqpa-kanishka-28.vercel.app/",
  projectId: "yaap-project-89f26",
  storageBucket: "yaap-project-89f26.appspot.com",
  messagingSenderId: "384058953643",
  appId: "1:384058953643:web:11b53f2c1a964008250cee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);