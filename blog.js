import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAhVQ1giYJyYE2Y3roZvQQBp_AuHDfHgJY",
  authDomain: "mini-js-hackathone.firebaseapp.com",
  projectId: "mini-js-hackathone",
  storageBucket: "mini-js-hackathone.appspot.com",
  messagingSenderId: "314747872504",
  appId: "1:314747872504:web:2bbb7e3169c5ed0660c70d"
};

// Init
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/* ---------------- SIGNUP ---------------- */
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account Created!");
      window.location.href = "blog.html"; // redirect
    } catch (error) {
      alert(error.message);
    }
  });
}

/* ---------------- LOGIN ---------------- */
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful!");
      window.location.href = "blog.html"; // redirect
    } catch (error) {
      alert(error.message);
    }
  });
}

/* ---------------- LOGOUT ---------------- */
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    await signOut(auth);
    window.location.href = "login.html";
  });
}

/* ---------------- AUTH GUARD ---------------- */
onAuthStateChanged(auth, (user) => {
  if (!user && window.location.pathname.includes("blog")) {
    window.location.href = "login.html";
  }
});




