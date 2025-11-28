// src/firebase/config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCaVrQzyvmA3xlnmMO5gd8fkY3zp99Zixs",
    authDomain: "dalyco-542b5.firebaseapp.com",
    projectId: "dalyco-542b5",
    storageBucket: "dalyco-542b5.firebasestorage.app",
    messagingSenderId: "50336675102",
    appId: "1:50336675102:web:5ab818f3ef3fe36ca9050f",
    measurementId: "G-QB16CHTJ3G",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);