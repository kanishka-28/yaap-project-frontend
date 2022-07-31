import { useContext, createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, FacebookAuthProvider, TwitterAuthProvider } from "firebase/auth";
import { auth, db } from '../../firebase'
import { addDoc, collection, getDocs, Timestamp } from "firebase/firestore";

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

  const [user, setuser] = useState({
    displayName: '',
    email: '',
  })

  let value = false;
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setuser(currentUser)
      const userCollectionRef = collection(db, 'users');
      // piece of cake
      await getDocs(userCollectionRef).then((res) => {
        const users = res.docs.map((doc) => (
          {
            data: doc.data(),
            id: doc.id,
          })
        )
        users.map((user) => {
          if (user.data.email === currentUser.email) {
            value=true;
            return;
          }
        })
      })
      !value && await addDoc(collection(db, "users"), {
        email: currentUser?.email,
        name: currentUser?.displayName,
        photo: currentUser?.photoURL,
        created: Timestamp.now()
      },
        {
          merge: true
        }
      )
      console.log('User', currentUser);
    })
    return () => {
      unsubscribe();
    }
  }, [])

  return (
    <AuthContext.Provider value={{ googleSignIn, logout, user, facebookSignIn, twitterSignIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(AuthContext)
}