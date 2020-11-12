import React, { Component } from 'react'
import TextInput from './TextInput'

class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      user_name: '',
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
    const { user_name, password } = this.state
    return (
      <div className="signin">
        <form className="form" onSubmit={this.handleSubmit}>
          <TextInput 
            type="username"
            name="username"
            placeholder="username"
            value={user_name}
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