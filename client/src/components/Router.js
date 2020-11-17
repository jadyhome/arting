import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'
import Profile from '../pages/Profile'
import Portfolio from '../pages/Portfolio'
import Create from '../components/Create'
import Update from '../components/Update'
import ViewBoard from '../components/ViewBoard'
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

  verifyTokenValid = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      try {
        const session = await __CheckSession()
        this.setState(
          { currentUser: session, authenticated: true },
          () => this.props.history.push('/profile')
        )
      } catch (error) {
        this.setState({ currentUser: null, authenticated: false })
        localStorage.clear()
      }
    }
  }

  toggleAuthenticated = (value, user, done) => {
    console.log('user', user)
    this.setState({
      authenticated: value,
      currentUser: user
    },
      () => done())
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
              <Route
                path="/artboards/:board_id"
                component={(props) => (
                  <SignedInLayout
                    currentUser={this.state.currentUser}
                    authenticated={this.state.authenticated}>
                    <ViewBoard {...props} />
                  </SignedInLayout>
                )}
              />
              <ProtectedRoute
                authenticated={this.state.authenticated}
                path="/profile"
                component={(props) => (
                  <SignedInLayout
                    currentUser={this.state.currentUser}
                    authenticated={this.state.authenticated}>
                    <Profile {...props}
                      currentUser={this.state.currentUser} />
                  </SignedInLayout>
                )}
              />
              <ProtectedRoute
                authenticated={this.state.authenticated}
                path="/create"
                component={(props) => (
                  <SignedInLayout
                    currentUser={this.state.currentUser}
                    authenticated={this.state.authenticated}>
                    <Create {...props}
                      currentUser={this.state.currentUser} />
                  </SignedInLayout>
                )}
              />
              <ProtectedRoute
                authenticated={this.state.authenticated}
                path="/update/:board_id"
                component={(props) => (
                  <SignedInLayout
                    currentUser={this.state.currentUser}
                    authenticated={this.state.authenticated}>
                    <Update {...props}
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