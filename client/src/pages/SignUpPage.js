import React from 'react'
import Nav from '../components/Nav'
import SignUp from '../components/SignUp'
import '../styles/SignInUp.css'

const SignUpPage = () => {
  return (
    <div className="signup-page">
      <section className="navbar">
        <Nav />
      </section>
      
      <div className="signup-left">
        <div className="artingmessage">
        <h1>arting</h1>
        <h2>[ ar-ting ]</h2>
        <h3><em>verb</em></h3>
        <h3>1. the action of doing art</h3>
        <h3><em>i am arting right now.</em></h3>
        </div>
      </div>

      <div className="signup-form">
        <SignUp />
      </div>
    </div>
  )
}

export default SignUpPage