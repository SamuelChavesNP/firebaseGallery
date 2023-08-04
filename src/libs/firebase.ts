import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "reactgallery-49e45.firebaseapp.com",
  projectId: "reactgallery-49e45",
  storageBucket: "reactgallery-49e45.appspot.com",
  messagingSenderId: "616529466375",
  appId: "1:616529466375:web:0f2ea1ddef87c0c8c106a2"
};


const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp)