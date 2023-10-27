// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { CONFIG } from "./config";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: CONFIG.API_KEY,
    authDomain: CONFIG.AUTH_DOMAIN,
    projectId: CONFIG.PROJECT_ID,
    storageBucket: CONFIG.STORAGE_BUCKET,
    messagingSenderId: CONFIG.MESSAGING_SENDER_ID,
    appId: CONFIG.APP_ID,
    measurementId: CONFIG.MEASUREMENT_ID,
    databaseURL: CONFIG.DATABASE_URL
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);

export { app, analytics, auth, database };