import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import '../styles/SignInUp.css'
import Nav from '../components/Nav'
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

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const login = await __UserSignIn(this.state)
      console.log('hello', login)
      this.props.toggleAuthenticated(true, login.user, () =>
      this.props.history.push('/profile'))
    } catch (error) {
      this.setState({ formError: true })
    }
  }

  render() {
    const { email, password } = this.state
    return (
      <div className="signin-page">
        <section className="navbar">
          <Nav />
        </section>

        <div className="signin-left">
          <div className="welcomeback">
            <h1>welcome back! 👋</h1>
            </div>
        </div>
        
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
      </div>
    )
  }
}

export default SignIn