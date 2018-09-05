var config = {
    apiKey: "AIzaSyCOHldHNz4lIgRQ2Rn_kGlHFAs8S2T4r5c",
    authDomain: "e-library-website.firebaseapp.com",
    databaseURL: "https://e-library-website.firebaseio.com",
    projectId: "e-library-website",
    storageBucket: "e-library-website.appspot.com",
    messagingSenderId: "1042701291539"
  };
  firebase.initializeApp(config);
var firestore=firebase.firestore();
var user = firebase.auth().currentUser;
  function Logout()
  {
    firebase.auth().signOut().then(function() {
  window.location.assign("../../index.html");
}).catch(function(error) {
  window.alert("An unexpected error occured");
});
}

function show_status()
{
	var user = firebase.auth().currentUser;
	var docRef= firestore.doc("Users/"+user.email);
	docRef.get().then(function(doc) {
    if (doc.exists) {
        document.querySelector("#name").innerHTML="Name: "+doc.data().student_name;
        document.querySelector("#Card_no").innerHTML="Library Card No: "+doc.data().Library_card_no;
        if(doc.data().borrowedBooks1 !== "0" || doc.data().borrowedBooks2 !== "0" || doc.data().borrowedBooks3 !== "0" || doc.data().borrowedBooks4 !== "0" || doc.data().borrowedBooks5 !== "0")
        {
        	document.querySelector("#NoBooksBorrowed").style.display="none";
        	document.querySelector("#list_borrowed_books").style.display="block";
        }
        else
        {
        	document.querySelector("#NoBooksBorrowed").style.display="inline-block";
        	document.querySelector("#list_borrowed_books").style.display="none";	
        }
        if(doc.data().borrowedBooks1 !== "0")
        document.querySelector("#book1").innerHTML=doc.data().borrowedBooks1;
        if(doc.data().borrowedBooks2 !== "0")
        document.querySelector("#book2").innerHTML=doc.data().borrowedBooks2;
        if(doc.data().borrowedBooks3 !== "0")
        document.querySelector("#book3").innerHTML=doc.data().borrowedBooks3;
        if(doc.data().borrowedBooks4 !== "0")
        document.querySelector("#book4").innerHTML=doc.data().borrowedBooks4;
        if(doc.data().borrowedBooks5 !== "0")
        document.querySelector("#book5").innerHTML=doc.data().borrowedBooks5;
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
}