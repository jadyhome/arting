import React from 'react'
import Nav from '../components/Nav'
import SignIn from '../components/SignIn'
import '../styles/SignInUp.css'

const SignInPage = () => {
  return (
    <div className="signin-page">
      <section className="navbar">
        <Nav />
      </section>

      <div className="signin-left">
        <h2 className="welcomeback">welcome back!</h2>
      </div>

      <div className="signin-form">
        <SignIn />
      </div>
    </div>
  )
}

export default SignInPage