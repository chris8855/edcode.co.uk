import React, { useState } from "react"
import { signInWithGoogle } from "../../firebase"

const SignIn = () => {
  const [state, setState] = useState({ email: "", password: "" })

  const shallowMerge = partialState =>
    setState(prevState => ({
      ...prevState,
      ...partialState,
    }))

  const handleChange = event => {
    const { name, value } = event.target
    shallowMerge({ [name]: value })
  }
  const handleSubmit = event => {
    event.preventDefault()
    setState({ email: "", password: "" })
  }

  return (
    <form className="SignIn" onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={state.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={state.pass}
        onChange={handleChange}
      />
      <input type="submit" value="Sign In" />
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </form>
  )
}

export default SignIn
