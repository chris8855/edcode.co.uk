import addToMailchimp from "gatsby-plugin-mailchimp"
import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const [email, setEmail] = useState("")
  console.log(email)
  const handleSubmit = event => {
    event.preventDefault()
    addToMailchimp(email).then(data => {
      setEmail("")
      alert(data.msg)
    })
  }
  const handleEmailChange = event => {
    setEmail(event.currentTarget.value)
  }
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Welcome to edcode.co.uk</h1>
      <p>This site is currently under develpment</p>
      <p>Thanks for your interest</p>

      <form onSubmit={handleSubmit}>
        <h2>Subscribe to my email list!</h2>
        <div>
          <input
            placeholder="Email address"
            name="email"
            type="text"
            onChange={handleEmailChange}
          />
          <button type="submit">Subscribe</button>
        </div>
      </form>

      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
      <div>
        <Link to="/chat">Chat</Link>
      </div>
    </Layout>
  )
}

export default IndexPage
