import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import SignInPage from '../pages/SignInPage'
import SignUpPage from '../pages/SignUpPage'
import PortfolioPage from '../pages/PortfolioPage'
import ProfilePage from '../pages/ProfilePage'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'
import Portfolio from '../components/Portfolio'
import Profile from '../components/Profile'
import ProtectedRoute from './ProtectedRoute'
import SignedInLayout from './SignedInLayout'
import { __CheckSession } from '../services/UserService'

class Router extends Component {
  constructor() {
    super()
    this.state = {
      authenticated: false,
      currentUser: null,
      pageLoading: true
    }
  }

  componentDidMount() {
    this.verifyTokenValid()
    this.setState({ pageLoading: false })
  }

  async verifyTokenValid() {
    const token = localStorage.getItem('token')
    if (token) {
      try {
        const session = await __CheckSession()
        console.log('hello', session)
        this.setState(
          { currentUser: session,
            authenticated: true
          },
          () => this.props.history.push('/profile')
        )
      } catch (error) {
        console.log('hello', this.state)
        this.setState({ currentUser: null, authenticated: false })
        localStorage.clear()
      }
    }
  }

  toggleAuthenticated = (value, user, done) => {
    this.setState({ authenticated: value, currentUser: user}, () => done())
    console.log('the state:', this.state)
  }

  render() {
    return (
      <main>
          {this.state.pageLoading ? (
              <h3>Page Loading...</h3>
          ) : (
            <Switch>
              <Route exact path="/"
                component={() => (
                  <MainPage />
                )}
              />
              <Route path="/signup"
                component={(props) => (
                <SignUp {...props} />
                )}
              />
              <Route path="/signin"
                component={(props) => (
                    <SignIn 
                    toggleAuthenticated={this.toggleAuthenticated}
                    {...props} />
                )}
              />
              <Route path="/portfolio"
                component={(props) => (
                    <Portfolio {...props} />
                )}
              />
              <ProtectedRoute 
                authenticated={this.state.authenticated}
                path="/profile"
                component={(props) => (
                  <SignedInLayout
                  currentUser={this.state.currentUser}
                  authenticated={this.state.authenticated}
                  >
                    <Profile {...props} 
                    currentUser={this.state.currentUser} />
                  </SignedInLayout>
                )}
              />
            </Switch>
          )}
      </main>
    )
  }
}

export default withRouter(Router)