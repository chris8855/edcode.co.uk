import React from "react"
import { TwilioVideoProvider } from "./useTwilioVideo"
import { AuthContextProvider } from "./useFirebase"

export const wrapRootElement = ({ element }) => (
  <AuthContextProvider>
    <TwilioVideoProvider>{element}</TwilioVideoProvider>
  </AuthContextProvider>
)
