<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDktX7JTqbygFsWmIDncA4qf7yV2KqQOD8",
    authDomain: "chemisphere-33c44.firebaseapp.com",
    projectId: "chemisphere-33c44",
    storageBucket: "chemisphere-33c44.appspot.com",
    messagingSenderId: "781175905864",
    appId: "1:781175905864:web:6f96a7815c183fc4c0427d",
    measurementId: "G-MHRHYEZ6Z1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>