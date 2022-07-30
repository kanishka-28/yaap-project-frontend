import { useContext, createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, FacebookAuthProvider, TwitterAuthProvider } from "firebase/auth";
import { auth } from '../../firebase'

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  }

  const facebookSignIn = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
  }

  const twitterSignIn = () => {
    const provider = new TwitterAuthProvider();
    signInWithPopup(auth, provider)
  }

  const logout = () => {
    signOut(auth);
  }

  const [user, setuser] = useState({})
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser)
      console.log('User', currentUser);
    })
    return () => {
      unsubscribe();
    }
  }, [])

  return (
    <AuthContext.Provider value={{ googleSignIn, logout, user, facebookSignIn, twitterSignIn}}>
      {children}
    </AuthContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(AuthContext)
}