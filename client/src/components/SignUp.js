import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import { __UserSignUp } from '../services/UserService'
import '../styles/SignInUp.css'

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      username: '',
      password: ''
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
    console.log(this.state)
  }

  handleSubmit = async (error) => {
    error.preventDefault()
    try {
      await __UserSignUp(this.state)
      this.props.history.push('/signin')
    } catch (error) {
      throw error
    }
  }

  render() {
    const { name, email, username, password } = this.state
    return (
      <div className="signup">
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
            type="text"
            name="username"
            placeholder="username"
            value={username}
            onChange={this.handleChange}
          />
          <TextInput 
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={this.handleChange}
          />
          <button>Sign Up</button>
        </form>
      </div>
    )
  }
}

export default SignUp