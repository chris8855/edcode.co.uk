import React, { useEffect, useContext, useState, createContext } from "react"
import firebase from "gatsby-plugin-firebase"

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  const signInWithGoogle = () => auth.signInWithPopup(provider)
  const [user, setUser] = useState({})
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUser(user)
    })
  }, [user])
  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
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
