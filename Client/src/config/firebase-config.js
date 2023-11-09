
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCDBa4kGz75_-G-4Xlc_vBwCqnX7T-YazM",
  authDomain: "ielts-buddy-5b542.firebaseapp.com",
  projectId: "ielts-buddy-5b542",
  storageBucket: "ielts-buddy-5b542.appspot.com",
  messagingSenderId: "131319513349",
  appId: "1:131319513349:web:07fba45116fff8652df76c",
  measurementId: "G-DYC9M1JD0E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
const analytics = getAnalytics(app);  
