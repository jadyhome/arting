import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import { __UserSignUp } from '../services/UserService'
import Nav from '../components/Nav'
import '../styles/Navbar.css'
import '../styles/SignInUp.css'

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await __UserSignUp(this.state)
      this.props.history.push('/signin')
    } catch (error) {
      throw error
    }
  }

  render() {
    const { name, email, password } = this.state
    return (
      <div className="signup-page">
        <section className="navbar">
          <Nav />
        </section>

        <div className="signup">
          <div className="signupmessage">
            <h1>let's start creating! 😊</h1>
          </div>

          <form className="form" onSubmit={this.handleSubmit}>
            <h1 className="createacc">create an account</h1>
            <TextInput
              type="text"
              name="name"
              placeholder="name"
              value={name}
              onChange={this.handleChange}
            />
            <TextInput
              type="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={this.handleChange}
            />
            <TextInput
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={this.handleChange}
            />
            <button className="signup-button">Sign Up</button>
          </form>
        </div>
      </div>
    )
  }
}

export default SignUp