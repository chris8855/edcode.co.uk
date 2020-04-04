import React, { useEffect } from "react"
import { Router } from "@reach/router"

import Layout from "../components/layout"
import VideoDisplay from "../components/video-display"
import { navigate } from "gatsby"

const BounceToChat = () => {
  useEffect(() => {
    navigate("/chat", { replace: true })
  }, [])

  return null
}

const Room = () => (
  <Layout>
    <Router>
      <VideoDisplay path={"room/:roomID"} />
      <BounceToChat default />
    </Router>
  </Layout>
)

export default Room
