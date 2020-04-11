import React, { useEffect, useContext, useState, createContext } from "react"
import firebase from "gatsby-plugin-firebase"

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  const signInWithGoogle = () => auth.signInWithPopup(provider)

  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUser(user)
    })
    if (user && user.uid) {
      setLoggedIn(prevState => !prevState.loggedIn)
    }
  }, [user])

  return (
    <AuthContext.Provider value={{ user, loggedIn, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  )
}

const useFirebase = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useFirebase must be used within an auth provider")
  }
  return context
}

export default useFirebase
