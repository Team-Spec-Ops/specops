var config = {
    apiKey: "AIzaSyCOHldHNz4lIgRQ2Rn_kGlHFAs8S2T4r5c",
    authDomain: "e-library-website.firebaseapp.com",
    databaseURL: "https://e-library-website.firebaseio.com",
    projectId: "e-library-website",
    storageBucket: "e-library-website.appspot.com",
    messagingSenderId: "1042701291539"
  };
  firebase.initializeApp(config);

  function Logout()
  {
    firebase.auth().signOut().then(function() {
  window.location.assign("../../index.html");
}).catch(function(error) {
  window.alert("An unexpected error occured");
});
}