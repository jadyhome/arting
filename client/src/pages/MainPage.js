import React from 'react'
import Nav from '../components/Nav'
import '../styles/MainPage.css'

const MainPage = ({ children }) => {
  return (
    <div className="mainpage">

      <section className="navbar">
          <Nav />
          {children}
      </section>

      <div className="main-content">
        <div className="artingmessage">
        <h1>arting</h1>
        <h2>[ ar-ting ]</h2>
        <h3><em>verb</em></h3>
        <h3>1. the action of doing art</h3>
        <h3><em>i am arting right now.</em></h3>
        </div>
      </div>
    </div>
  )
}

export default MainPage