import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const FIREBASE_CONFIG = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
};
const FIREBASE_APP = initializeApp(FIREBASE_CONFIG);

export const FIRESTORE = getFirestore(FIREBASE_APP);
