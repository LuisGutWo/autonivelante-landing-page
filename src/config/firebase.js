import { NEXT_API_KEY, NEXT_AUTH_DOMAIN, NEXT_DATABASE_URL, NEXT_MESSAGING_SENDER_ID, NEXT_PROJECT_ID, NEXT_STORAGE_BUCKET } from "@/app/config";
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: NEXT_API_KEY,
    authDomain: NEXT_AUTH_DOMAIN,
    databaseURL: NEXT_DATABASE_URL, 
    projectId: NEXT_PROJECT_ID,
    storageBucket: NEXT_STORAGE_BUCKET,
    messagingSenderId: NEXT_MESSAGING_SENDER_ID,
    appId: NEXT_APP_ID
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const login = ({ email, password }) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const register = ({ email, password }) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
    return signOut(auth);
};