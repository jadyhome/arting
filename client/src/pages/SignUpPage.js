import React from 'react'
import Nav from '../components/Nav'

const SignUpPage = () => {
  return (
    <div className="signup-page">
      <div className="signup-message">
        <h1>arting</h1>
        <h2>[ ar-ting ]</h2>
        <h2>verb</h2>
        <p>1. the action of doing art</p>
        <p><em>i am arting right now</em></p>
      </div>

      <section className="navbar">
          <Nav />
      </section>
    </div>
  )
}

export default SignUpPage