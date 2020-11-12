import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import SignInLayout from '../pages/SignInLayout'
import SignUpLayout from '../pages/SignUpLayout'
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'
import Portfolio from '../pages/Portfolio'

class Router extends Component {
  constructor() {
    super()
    this.state = {
      pageLoading: true
    }
  }

  componentDidMount() {
    this.setState({ pageLoading: false })
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
                <SignUpLayout>
                  <SignUp {...props} />
                </SignUpLayout>
                )}
              />
              <Route path="/signin"
                component={(props) => (
                  <SignInLayout>
                    <SignIn {...props} />
                  </SignInLayout>
                )}
              />
              <Route path="/portfolios"
                component={(props) => (
                  <Home>
                    <Portfolio {...props} />
                  </Home>
                )}
              />
            </Switch>
          )}
      </main>
    )
  }
}

export default Router