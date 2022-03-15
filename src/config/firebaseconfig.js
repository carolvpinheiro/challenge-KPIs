// import firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB8OAixIwpmoR1pqvOI0xpqNYE-Ri5-51k",
    authDomain: "challenge-kpis.firebaseapp.com",
    projectId: "challenge-kpis",
    storageBucket: "challenge-kpis.appspot.com",
    messagingSenderId: "748468548772",
    appId: "1:748468548772:web:cc93649d6a4228b5de6231"
};

// const db = firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
