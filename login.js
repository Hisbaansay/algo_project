import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDktX7JTqbygFsWmIDncA4qf7yV2KqQOD8",
  authDomain: "chemisphere-33c44.firebaseapp.com",
  projectId: "chemisphere-33c44",
  storageBucket: "chemisphere-33c44.appspot.com",
  messagingSenderId: "781175905864",
  appId: "1:781175905864:web:6f96a7815c183fc4c0427d",
  measurementId: "G-MHRHYEZ6Z1"
};
firebase.initializeApp(firebaseConfig);

// Get the login form element
var loginForm = document.getElementById("login-form");

// Add a listener for the form submission
loginForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the user's email and password
  var email = loginForm.email.value;
  var password = loginForm.password.value;

  // Sign in with email and password
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(userCredential) {
      // User signed in successfully
      var user = userCredential.user;
      alert("User signed in:", user);
    })
    .catch(function(error) {
      // Handle errors
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error("Error signing in:", errorCode, errorMessage);
    });
});