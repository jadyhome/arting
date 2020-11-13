import React from 'react'
import Nav from '../components/Nav'
import '../styles/MainPage.css'

const MainPage = ({ children }) => {
  return (
    <div className="mainpage">
      <section className="arting-logo">
          <h1>arting</h1>
      </section>

      <section className="navbar">
          <Nav />
          {children}
      </section>
    </div>
  )
}

export default MainPage