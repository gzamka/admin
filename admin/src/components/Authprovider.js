import { onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useContext, createContext, useEffect } from 'react';
import { Loadingscreen } from './Loadingscreen'
import { useRouter } from 'next/router';
import { auth } from '../firebase/firebase'
const Authcontext = createContext({})
export const Auth = ({ children }) => {
    // console.log(children);
    const [login, setlogin] = useState(false)
    const [loading, setloading] = useState(false)
    const router = useRouter()
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setlogin(user.uid)
            }
            setloading(true)
        });
    }, [])
    const UserSignOut = () => {
        signOut(auth).then(() => {
            router.push('/login')
        }).catch((error) => {
            console.log(error);
        });
    }
    if (!loading) return <Loadingscreen />
    return (
        <Authcontext.Provider value={{ login, UserSignOut }}>
            {children}
        </Authcontext.Provider>
    )
}
export const useAuth = () => useContext(Authcontext)