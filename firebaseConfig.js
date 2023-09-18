// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzdgNYyqL_Po9ryGBCFT5crKctDiCc2pU",
  authDomain: "cyber-app-960e8.firebaseapp.com",
  projectId: "cyber-app-960e8",
  storageBucket: "cyber-app-960e8.appspot.com",
  messagingSenderId: "707257866793",
  appId: "1:707257866793:web:80a2b385979f90c77e5a38",
  measurementId: "G-ND6TH2F6GG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)

export {auth}

//IOS: 699420084293-dq427sa4v16tn93ae1en5raieru6orgc.apps.googleusercontent.com
//Android: 699420084293-c0on34f2k3c5mpfn0l5a17r61vjbcrba.apps.googleusercontent.com