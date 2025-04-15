// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js"; 
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkUo3ZtZC4qdkGLyAPPnwelV_bJ3SgmHE",
  authDomain: "login-page-js-project.firebaseapp.com",
  projectId: "login-page-js-project",
  storageBucket: "login-page-js-project.firebasestorage.app",
  messagingSenderId: "110670091909",
  appId: "1:110670091909:web:3488efb800880a8bd0fbec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

let signupBtn = document.getElementById("signupBtn");
let loginBtn = document.getElementById("loginBtn");
let googleBtn = document.getElementById("googleSignInBtn")

signupBtn.addEventListener("click", signinFun)
function signinFun(){
    let email = document.getElementById("email").value;
    let dob = document.getElementById("dob").value;
    let password = document.getElementById("password").value;
    let conformPassword = document.getElementById("conformPassword").value;
    console.log(email, dob, password, conformPassword);
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Signup successful!"); 
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Signup error", errorCode, errorMessage); 
            alert(`Signup failed: ${errorMessage}`);
            // ..
        });
}
document.getElementById("signupForm").reset()

loginBtn.addEventListener("click", loginFun)
function loginFun(){
    let loginEmail = document.getElementById("loginEmail").value;
    let loginPassword = document.getElementById("loginPassword").value;
    console.log(loginEmail, loginPassword);

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        .then((userCredential) => { 
            const user = userCredential.user; 
            console.log("User logged in:", user); 
            alert("Login successful!"); 
        }) 
        .catch((error) => { 
            const errorCode = error.code; 
            const errorMessage = error.message; 
            console.error("Login error", errorCode, errorMessage); 
            alert(`Login failed: ${errorMessage}`); 
        }); 
}

googleBtn.addEventListener("click", googleSignInFun);

function googleSignInFun() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log("Google Sign-In successful:", user);
            alert(`Welcome ${user.displayName}`);
            // You can redirect or show profile info here
        })
        .catch((error) => {
            console.error("Google Sign-In error", error.code, error.message);
            alert(`Google Sign-In failed: ${error.message}`);
        });
}

document.getElementById("guestBtn").addEventListener("click", () => {
    alert("Continuing as Guest...");
    // You can redirect or allow limited access
    // window.location.href = "guest-homepage.html";
  });
  