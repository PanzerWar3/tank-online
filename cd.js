
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA0r1WhNz5f1NYeJj1yhzt8nuim0XCxAHg",
    authDomain: "tankcraft-e525e.firebaseapp.com",
    databaseURL: "https://tankcraft-e525e-default-rtdb.firebaseio.com",
    projectId: "tankcraft-e525e",
    storageBucket: "tankcraft-e525e.appspot.com",
    messagingSenderId: "76401928225",
    appId: "1:76401928225:web:6474dbf17153dafbfd5b60",
    measurementId: "G-HCMLTCH0V3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
