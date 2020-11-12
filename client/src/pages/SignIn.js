import React, { Component } from 'react'
import TextInput from '../components/TextInput'

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
  }

  render() {
    const { email, password } = this.state
    return (
      <div className="signin">
        <form className="form" onSubmit={this.handleSubmit}>
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