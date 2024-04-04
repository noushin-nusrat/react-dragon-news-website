// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChZ1P6NBjvXyQmpPsVtuVBB2F6R5h3flA",
    authDomain: "react-dragon-news-websit-2ad9a.firebaseapp.com",
    projectId: "react-dragon-news-websit-2ad9a",
    storageBucket: "react-dragon-news-websit-2ad9a.appspot.com",
    messagingSenderId: "868106225061",
    appId: "1:868106225061:web:c7e8df928555656c45d44c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;