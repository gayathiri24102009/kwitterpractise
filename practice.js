var firebaseConfig = {
    apiKey: "AIzaSyA_XZy6dQJMF7IKSA6QNuOWvybdl2zjBEY",
    authDomain: "kwitter-ffc66.firebaseapp.com",
    databaseURL: "https://kwitter-ffc66-default-rtdb.firebaseio.com",
    projectId: "kwitter-ffc66",
    storageBucket: "kwitter-ffc66.appspot.com",
    messagingSenderId: "955125260499",
    appId: "1:955125260499:web:5ccd9b1607568ed1fab426",
    measurementId: "G-8W4JW65PXH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding user"
      });
  }
//ADD YOUR FIREBASE LINKS