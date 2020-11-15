import React from 'react'
import Nav from './Nav'
import '../styles/Board.css'
import '../styles/ProfilePage.css'

const SignedInLayout = ({ children, authenticated, currentUser }) => (
  <div>
    <section className="navbar">
    <Nav 
    authenticated={authenticated}
    currentUser={currentUser}
    />
    </section>
    {children}
  </div>
)

export default SignedInLayout