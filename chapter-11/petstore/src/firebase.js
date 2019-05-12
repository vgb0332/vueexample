import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyCQYbZoUzPWh6mqfTvaIE6CB4MomAlTtSs",
    authDomain: "vuejsinaction-f1b96.firebaseapp.com",
    databaseURL: "https://vuejsinaction-f1b96.firebaseio.com",
    projectId: "vuejsinaction-f1b96",
    storageBucket: "vuejsinaction-f1b96.appspot.com",
    messagingSenderId: "596311474103",
    appId: "1:596311474103:web:a9e224785f6ae5c8"
});

export const db = app.database();

export const productsRef = db.ref('products');
