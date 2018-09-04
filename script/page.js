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
    document.getElementById("UserLoggedIn").style.display="initial";
    document.getElementById("UserLoggingIn").style.display="none";
    document.getElementById("CreateAccount").style.display="none";
    //window.alert("Logged in")
  } else {
    document.getElementById("UserLoggedIn").style.display="none";
    document.getElementById("UserLoggingIn").style.display="initial";
    document.getElementById("CreateAccount").style.display="none";
    //window.alert("Not logged in");
  }
});

  function Login()
  {
    var username = document.getElementById("Input_Username").value;
    var password = document.getElementById("Input_Password").value;
    firebase.auth().signInWithEmailAndPassword(username, password).catch(function(error) {
  var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error: " + errorMessage);
});
  }

function Logout()
  {
    firebase.auth().signOut().then(function() {
  document.getElementById("UserLoggedIn").style.display="none";
  document.getElementById("UserLoggingIn").style.display="initial";
}).catch(function(error) {
  window.alert("An unexpected error occured");
  document.getElementById("UserLoggedIn").style.display="initial";
  document.getElementById("UserLoggingIn").style.display="none";
});
}

function createAccount()
{
  var username = document.getElementById("Input_Username_create").value;
  var password = document.getElementById("Input_Password_create").value;
  firebase.auth().createUserWithEmailAndPassword(username, password).catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  window.alert("An unexpected error occured" + errorMessage);
});
}

function createAccountPage()
{
  document.getElementById("UserLoggedIn").style.display="none";
  document.getElementById("UserLoggingIn").style.display="none";
  document.getElementById("CreateAccount").style.display="block";
}