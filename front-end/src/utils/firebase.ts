// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY as string,
  authDomain: process.env.REACT_APP_AUTHDOMAIN as string,
  projectId: process.env.REACT_APP_PROJECTID as string,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET as string,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID as string,
  appId: process.env.REACT_APP_APPID as string,
  measurementId: process.env.REACT_APP_MEASUREMENTID as string,
};

// Initialize Firebase with proper typing
const app: FirebaseApp = initializeApp(firebaseConfig);

// Initialize Analytics with a check for environment compatibility (for example, if window is defined)
let analytics: Analytics | undefined;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics };
