import { onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useContext, createContext, useEffect } from 'react';
import { Loadingscreen } from './Loadingscreen'
import { useRouter } from 'next/router';
import { auth } from '../firebase/firebase'
import Login from '../pages/login'
const Authcontext = createContext({})
export const Auth = ({ children }) => {
  // console.log(children);
  const [login, setLogin] = useState(false)
  const [loading, setloading] = useState(true)
  const router = useRouter()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogin(user.uid);
      } else {
        setLogin(() => {
          const returnValue = undefined;
          return returnValue;
        });
      }
      setloading(false);
    });
    return () => unsubscribe();
  }, []);

  const UserSignOut = () => {
    signOut(auth).then(() => {
      router.push('/login')
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <Authcontext.Provider value={{ loading, login, UserSignOut }}>
      {loading && <Loadingscreen />}
      {!loading && !login && <Login />}
      {!loading && login && children}
    </Authcontext.Provider>
  )
}
export const useAuth = () => useContext(Authcontext)