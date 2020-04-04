import React, { useEffect } from "react"
import useTwilioVideo from "../hooks/useTwilioVideo"
import { navigate } from "gatsby"

const VideoDisplay = ({ roomID }) => {
  const { state } = useTwilioVideo()
  useEffect(() => {
    if (!state.token) {
      navigate("/chat", { state: { roomName: roomID } })
    }
  }, [state, roomID])
  return <h1>room: {roomID}</h1>
}

export default VideoDisplay
