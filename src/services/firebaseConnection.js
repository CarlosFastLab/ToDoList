import firebase from 'firebase/app';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyDkqve9-j--O4Yy6SJsOAhdNOUtkuHmRu4",
    authDomain: "meuapp-e22f0.firebaseapp.com",
    projectId: "meuapp-e22f0",
    storageBucket: "meuapp-e22f0.appspot.com",
    messagingSenderId: "486470026720",
    appId: "1:486470026720:web:385924fadb412ce18b9785",
    measurementId: "G-VB3EHT3TYL"
};
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;