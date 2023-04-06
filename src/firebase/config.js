import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCQ6JWR_uSsWx8UHJ4AD-STEO3RIU-2HuM',
	authDomain: 'rj-volare-a32f2.firebaseapp.com',
	projectId: 'rj-volare-a32f2',
	storageBucket: 'rj-volare-a32f2.appspot.com',
	messagingSenderId: '540335163835',
	appId: '1:540335163835:web:ac55f0e98084d28d0c1c9e',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
