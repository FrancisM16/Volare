import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD_gE4tqxHmqBGsJCKVYXTQuaI9c218YLc",
  authDomain: "rj-volare.firebaseapp.com",
  projectId: "rj-volare",
  storageBucket: "rj-volare.appspot.com",
  messagingSenderId: "14209496769",
  appId: "1:14209496769:web:fd06010e7395d2fb6b8640"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)