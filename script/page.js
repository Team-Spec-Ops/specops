// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCOHldHNz4lIgRQ2Rn_kGlHFAs8S2T4r5c",
    authDomain: "e-library-website.firebaseapp.com",
    databaseURL: "https://e-library-website.firebaseio.com",
    projectId: "e-library-website",
    storageBucket: "e-library-website.appspot.com",
    messagingSenderId: "1042701291539"
  };
  firebase.initializeApp(config);
  
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementByID("UserLoggedIn").style.display:"initial";
    document.getElementByID("UserLoggingIn").style.display:"none";
  } else {
    document.getElementByID("UserLoggedIn").style.display:"none";
    document.getElementByID("UserLoggingIn").style.display:"initial";
  }
});

  function.Login()
  {
  	var username = document.getElementByID("Input_Username").value;
  	var password = document.getElementByID("Input_Password").value;
  	firebase.auth().signInWithEmailAndPassword(username, password).catch(function(error) {
 	var errorCode = error.code;
  	var errorMessage = error.message;
  	window.alert("Error: " + errorMessage);
});
  }