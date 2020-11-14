import React from 'react'
import Nav from './Nav'

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