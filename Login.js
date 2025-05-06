// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js"; 
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";  

// Firebase configuration
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
let googleBtn = document.getElementById("googleSignInBtn");

// Signup logic
signupBtn.addEventListener("click", signinFun);
function signinFun() {
    let email = document.getElementById("email").value;
    let dob = document.getElementById("dob").value;
    let password = document.getElementById("password").value;
    let conformPassword = document.getElementById("conformPassword").value;

    if (password !== conformPassword) {
        alert("Passwords do not match.");
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Signup successful!"); 
            document.getElementById("signupForm").reset();
        })
        .catch((error) => {
            console.error("Signup error", error.code, error.message); 
            alert(`Signup failed: ${error.message}`);
        });
}

// Login logic (updated to redirect on success)
loginBtn.addEventListener("click", loginFun);
function loginFun() {
    let loginEmail = document.getElementById("loginEmail").value;
    let loginPassword = document.getElementById("loginPassword").value;

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("User logged in:", user);
            alert("Login successful!");
            window.location.href = "home.html";  // Redirect to home page
        })
        .catch((error) => {
            console.error("Login error", error.code, error.message);
            alert(`Login failed: ${error.message}`);  // Stay on login page
        });
}

// Google Sign-In logic
googleBtn.addEventListener("click", googleSignInFun);
function googleSignInFun() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log("Google Sign-In successful:", user);
            alert(`Welcome ${user.displayName}`);
            window.location.href = "home.html";  // Redirect after Google sign-in
        })
        .catch((error) => {
            console.error("Google Sign-In error", error.code, error.message);
            alert(`Google Sign-In failed: ${error.message}`);
        });
}

// Guest access
document.getElementById("guestBtn").addEventListener("click", () => {
    alert("Continuing as Guest...");
    window.location.href = "home.html";
});
