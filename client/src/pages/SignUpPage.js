import React from 'react'
import Nav from '../components/Nav'

const SignUpPage = () => {
  return (
    <div className="signup-page">
      <section className="navbar">
          <Nav />
      </section>
      
      <div className="signup-message">
        <h1>arting</h1>
        <h2>[ ar-ting ]</h2>
        <h2>verb</h2>
        <h3>1. the action of doing art</h3>
        <h3><em>i am arting right now.</em></h3>
      </div>
    </div>
  )
}

export default SignUpPage