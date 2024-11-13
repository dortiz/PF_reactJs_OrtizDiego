import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD6fKS_2KfzIH47XnIYMsSotMEnU0YE5OE",
  authDomain: "tiendadental-2fc2e.firebaseapp.com",
  projectId: "tiendadental-2fc2e",
  storageBucket: "tiendadental-2fc2e.firebasestorage.app",
  messagingSenderId: "112495100922",
  appId: "1:112495100922:web:226fdf904ef23f514cda43"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);