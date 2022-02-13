

 const firebaseConfig = {
  apiKey: "AIzaSyCoSyhZyfr7Kk89ar3off-zhKPApctfQ84",
  authDomain: "tank-online-d32e0.firebaseapp.com",
  databaseURL: "https://tank-online-d32e0-default-rtdb.firebaseio.com",
  projectId: "tank-online-d32e0",
  storageBucket: "tank-online-d32e0.appspot.com",
  messagingSenderId: "325542131458",
  appId: "1:325542131458:web:72db9c43bd95ab6176f41b",
  measurementId: "G-BBS8CREFRV"
};

  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const database = getDatabase();
