import React from 'react'
import Nav from '../components/Nav'
import '../styles/Navbar.css'
import '../styles/MainPage.css'

const MainPage = ({ children }) => {
  return (
    <div className="mainpage">
      <section className="navbar">
        <Nav />
        {children}
      </section>

      <div className="artingmessage">
        <h1 className="arting">arting</h1>
        <h3>[ ar-ting ]</h3>
        <h3><em>verb</em></h3>
        <h3>1. the action of doing art</h3>
        <h3><em>i am arting right now.</em></h3>
      </div>
    </div>
  )
}

export default MainPage