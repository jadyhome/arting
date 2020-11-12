import React from 'react'
import Nav from '../components/Nav'

const HomePage = ({ children }) => {
  return (
    <div className="homepage">
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

export default HomePage