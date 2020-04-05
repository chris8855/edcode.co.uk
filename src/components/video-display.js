import React, { useEffect } from "react"
import useTwilioVideo from "../hooks/useTwilioVideo"
import { navigate } from "gatsby"

const VideoDisplay = ({ roomID }) => {
  const { state, startVideo, videoRef, leaveRoom } = useTwilioVideo()
  useEffect(() => {
    if (!state.token) {
      navigate("/chat", { state: { roomName: roomID } })
    }
    if (!state.room) {
      startVideo()
    }

    window.addEventListener("beforeunload", leaveRoom)

    return () => {
      window.removeEventListener("beforeunload", leaveRoom)
    }
  }, [state, roomID, startVideo, leaveRoom])
  return (
    <>
      <div className="chat" ref={videoRef} />
      <h1>room: {roomID}</h1>
      {state.room && (
        <button className="leave-room" onClick={leaveRoom}>
          Leave Room
        </button>
      )}
    </>
  )
}

export default VideoDisplay
