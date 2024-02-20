//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyDaYpuQD4bO7ZCea-51jZKipREpT5AIKNw",
    authDomain: "comp1800-202410-4bff5.firebaseapp.com",
    projectId: "comp1800-202410-4bff5",
    storageBucket: "comp1800-202410-4bff5.appspot.com",
    messagingSenderId: "1015179406661",
    appId: "1:1015179406661:web:2d102e816572ee22bae22c",
    measurementId: "G-ELCN9FHPSR"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
