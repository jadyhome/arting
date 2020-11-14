import React from 'react'
import Nav from '../components/Nav'
import Portfolio from '../components/Portfolio'
import '../styles/PortfolioPage.css'

const PorfolioPage = ({ children }) => {
  return (
    <div className="porfoliopage">
      <section className="navbar">
          <Nav />
          {children}
      </section>
      <Portfolio />
    </div>
  )
}

export default PorfolioPage