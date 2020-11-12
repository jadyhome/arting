import React from 'react'
import Nav from '../components/Nav'

const SignInPage = () => {
  return (
    <div className="signin-page">
      <div className="signin-message">
        <h1>Welcome Back!</h1>
      </div>

      <section className="navbar">
          <Nav />
      </section>
    </div>
  )
}

export default SignInPage