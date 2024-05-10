import { GoogleAuthProvider } from "firebase/auth/cordova";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, googleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCypdG-rqzfGFYBuxDQUNk8qD73wCUG5dA",
    authDomain: "sjfsc-f72f7.firebaseapp.com",
    databaseURL: "https://sjfsc-f72f7-default-rtdb.firebaseio.com",
    projectId: "sjfsc-f72f7",
    storageBucket: "sjfsc-f72f7.appspot.com",
    messagingSenderId: "807759975556",
    appId: "1:807759975556:web:675925b68bceb59e1c9ed1"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.languageCode = 'en';

  const provider = new GoogleAuthProvider();

  const googleLogin = document.getElementById('google-login-btn');
  googleLogin.addEventListener('click', function() {
    alert(5);
  })