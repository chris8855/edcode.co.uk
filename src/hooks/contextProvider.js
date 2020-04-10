import React from "react"
import { TwilioVideoProvider } from "./useTwilioVideo"

const wrapRootElement = ({ element }) => (
  <TwilioVideoProvider>{element}</TwilioVideoProvider>
)

export { wrapRootElement }
