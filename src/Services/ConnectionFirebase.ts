import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbc-E0pgT7tX0CCjPF2SpA2U8Oxs5aGr0",
  authDomain: "devlinks-a010e.firebaseapp.com",
  projectId: "devlinks-a010e",
  storageBucket: "devlinks-a010e.firebasestorage.app",
  messagingSenderId: "843531823953",
  appId: "1:843531823953:web:d68c45dce8ec420833c170",
  measurementId: "G-V7D5BJXGLJ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
