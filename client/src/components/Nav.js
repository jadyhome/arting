import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => {
  return (
    <nav>
      <NavLink activeClassName="nav-active" to="/">
        arting
      </NavLink>
      <NavLink activeClassName="nav-active" to="/portfolios">
        portfolios
      </NavLink>
      <NavLink activeClassName="nav-active" to="/signup">
        sign up
      </NavLink>
      <NavLink activeClassName="nav-active" to="/signin">
        sign in
      </NavLink>
    </nav>
  )   
}