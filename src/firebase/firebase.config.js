import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCxs6M_9-0KjggSRKkhrx8UFqmpBfNLvOI",
  authDomain: "news-dragon-client-85696.firebaseapp.com",
  projectId: "news-dragon-client-85696",
  storageBucket: "news-dragon-client-85696.appspot.com",
  messagingSenderId: "376804629100",
  appId: "1:376804629100:web:42de218d3d24d15db35649",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
