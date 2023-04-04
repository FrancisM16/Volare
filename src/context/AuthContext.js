import { signOut, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import { addDoc, collection, getDocs, where, query } from 'firebase/firestore'
import { auth, db } from "../firebase/config"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [isNavigationReady, setIsNavigationReady] = useState(false)
    const [user, setUser] = useState({
        email: null,
        logged: false,
        uid: null
    })

    const [userInfo, setUserInfo] = useState({
        name: null,
        address: null
    })

    const login = (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
            .catch((err) => console.log(err))
    }

    const registerUser = (values) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then(userCredential => {
                const userRef = collection(db, 'userInfo')
                addDoc(userRef, {
                    uid: userCredential.user.uid,
                    name: values.name,
                    address: values.address
                })
            })
            .catch((err) => console.log(err.message))
    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({
                    email: null,
                    logged: false,
                    uid: null
                })
                setUserInfo({
                    name: null,
                    address: null
                })
            })
    }

    useEffect(() => {
        console.log("Auth Context 1")
        onAuthStateChanged(auth, async (user) => {
            console.log("Auth Context 2")
            if (user) {
                console.log("Auth Context 3")
                setUser({
                    email: user.email,
                    logged: true,
                    uid: user.uid
                })
                const userInfoQuery = query(collection(db, "userInfo"), where("uid", "==", user.uid))
                const userInfos = await getDocs(userInfoQuery)
                userInfos.forEach(info => {
                    const infoData = info.data()
                    setUserInfo({
                        name: infoData.name,
                        address: infoData.address
                    })
                })
                setIsNavigationReady(true)
                return
            }
            logout()
            setIsNavigationReady(true)
        })
    }, [])


    return (
        <AuthContext.Provider value={{
            user,
            userInfo,
            isNavigationReady,
            registerUser,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}