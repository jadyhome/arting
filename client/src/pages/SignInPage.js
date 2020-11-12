import React from 'react'
import Nav from '../components/Nav'

const SignInPage = () => {
  return (
    <div className="signin-page">
      <section className="navbar">
          <Nav />
      </section>

      <div className="signin-message">
        <h1>Welcome Back!</h1>
      </div>
    </div>
  )
}

export default SignInPage