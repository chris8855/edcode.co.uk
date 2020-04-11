import React from "react"

import Join from "../components/join"
import Layout from "../components/layout"

const Chat = ({ location }) => {
  return (
    <Layout>
      <Join location={location} />
    </Layout>
  )
}

export default Chat
