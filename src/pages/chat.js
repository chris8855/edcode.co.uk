import React, { useEffect } from "react"
import { navigate } from "gatsby"

import Join from "../components/join"
import Layout from "../components/layout"
import useFirebase from "../hooks/useFirebase"

const Chat = ({ location }) => {
  return (
    <Layout>
      <Join location={location} />
    </Layout>
  )
}

export default Chat
