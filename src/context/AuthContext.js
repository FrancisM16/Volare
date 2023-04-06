import { createContext, useEffect, useState } from 'react';

import {
	signOut,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { addDoc, collection, getDocs, where, query } from 'firebase/firestore';
import { auth, db } from '../firebase/config';
import { toast } from 'react-toastify';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [isNavigationReady, setIsNavigationReady] = useState(false);
	const [user, setUser] = useState({
		email: null,
		logged: false,
		uid: null,
	});

	const [userInfo, setUserInfo] = useState({
		name: null,
		address: null,
		phone: null,
	});

	const login = values => {
		return signInWithEmailAndPassword(auth, values.email, values.password);
	};

	const showModalError = value => {
		toast.error(value, {
			position: 'top-right',
			autoClose: 1500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		});
	};

	const registerUser = values => {
		return createUserWithEmailAndPassword(auth, values.email, values.password);
	};

	const registerUserInfo = (values, uid) => {
		const userRef = collection(db, 'userInfo');
		return addDoc(userRef, {
			uid,
			name: values.name,
			address: values.address,
			phone: values.phone,
		});
	};

	const logout = () => {
		signOut(auth).then(() => {
			setUser({
				email: null,
				logged: false,
				uid: null,
			});
			setUserInfo({
				name: null,
				address: null,
				phone: null,
			});
		});
	};

	useEffect(() => {
		onAuthStateChanged(auth, async user => {
			if (user) {
				setUser({
					email: user.email,
					logged: true,
					uid: user.uid,
				});
				const userInfoQuery = query(
					collection(db, 'userInfo'),
					where('uid', '==', user.uid)
				);
				const userInfos = await getDocs(userInfoQuery);
				userInfos.forEach(info => {
					const infoData = info.data();
					setUserInfo({
						name: infoData.name,
						address: infoData.address,
						phone: infoData.phone,
					});
				});
				setIsNavigationReady(true);
				return;
			}
			logout();
			setIsNavigationReady(true);
		});
	}, []);

	return (
		<AuthContext.Provider
			value={{
				user,
				userInfo,
				isNavigationReady,
				registerUser,
				registerUserInfo,
				login,
				showModalError,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
