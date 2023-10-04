import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAlvYeWLinUltRu2dJcYt6U68NTauhhCpI",
  authDomain: "dragon-news-2433c.firebaseapp.com",
  projectId: "dragon-news-2433c",
  storageBucket: "dragon-news-2433c.appspot.com",
  messagingSenderId: "642717605978",
  appId: "1:642717605978:web:5e2777d8602398bc1c3863",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
