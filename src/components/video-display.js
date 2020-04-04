import React, { useEffect } from "react"
import useTwilioVideo from "../hooks/useTwilioVideo"
import { navigate } from "gatsby"

const VideoDisplay = ({ roomID }) => {
  const { state, startVideo, videoRef } = useTwilioVideo()
  useEffect(() => {
    if (!state.token) {
      navigate("/chat", { state: { roomName: roomID } })
    }
    if (!state.room) {
      startVideo()
    }
  }, [state, roomID, startVideo])
  return (
    <>
      <div className="chat" ref={videoRef} />
      <h1>room: {roomID}</h1>
    </>
  )
}

export default VideoDisplay
