import React from 'react'
import Nav from './Nav'
import Profile from './Profile'
import Board from './Board'
import '../styles/Board.css'
import '../styles/ProfilePage.css'

const SignedInLayout = ({ children, authenticated, currentUser }) => (
  <div>
      <div className="profilepage">
      <section className="navbar">
      <Nav 
      authenticated={authenticated}
      currentUser={currentUser}
      />
         
      </section>
    <Profile />

      <div className="artboards-container">
      <Board />
      <Board />
      <Board />

      </div>
    </div>
    
    {children}
  </div>
)

export default SignedInLayout