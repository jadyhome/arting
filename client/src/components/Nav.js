import React from 'react'
import { NavLink } from 'react-router-dom'

export default ({ authenticated, currentUser, className }) => {
  return authenticated && currentUser ? (
    <header className={className}>
    <nav>
      <NavLink activeClassName="title nav-active" to="/">
        arting
      </NavLink>
      <NavLink activeClassName="nav-active" to="/profile">
        profile
      </NavLink>
      <NavLink activeClassName="nav-active" to="/portfolio">
        portfolio
      </NavLink>
      <NavLink activeClassName="nav-active" to="/"
      onClick={() => localStorage.clear()}
      >
        sign out
      </NavLink>
    </nav>
    </header>
  ) : (
    <header className={className}>
      <nav>
      <NavLink activeClassName="title nav-active" to="/">
        arting
      </NavLink>
      <NavLink activeClassName="nav-active" to="/portfolio">
        portfolio
      </NavLink>
      <NavLink activeClassName="nav-active" to="/signup">
        sign up
      </NavLink>
      <NavLink activeClassName="nav-active" to="/signin">
        sign in
      </NavLink>
    </nav>
    </header>
  )
}