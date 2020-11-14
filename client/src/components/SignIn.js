import React, { Component } from 'react'
import TextInput from './TextInput'
import '../styles/SignInUp.css'
import { __UserSignIn } from '../services/UserService'

class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      formError: false
    }
  }

  handleChange = ({ target }) => {
    this.setState({ 
      [target.name]: target.value,
      formError: false
    })
  }

  handleSubmit = async (error) => {
    error.preventDefault()
    try {
      const login = await __UserSignIn(this.state)
      this.props.toggleAuthenticated(true, login.user, () =>
      this.props.history.push('/profile'))
    } catch (error) {
      this.setState({ formError: true })
    }
  }

  render() {
    const { email, password } = this.state
    return (
      <div className="signin">
        <form className="form" onSubmit={this.handleSubmit}>
          <h1 className="signingin">hello again!</h1>
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
          <button>Sign In</button>
          {this.state.formError ? <p>Sign In Error</p> : <p></p>}
        </form>
      </div>
    )
  }
}

export default SignIn