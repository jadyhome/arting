import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import SignInPage from '../pages/SignInPage'
import SignUpPage from '../pages/SignUpPage'
import PortfolioPage from '../pages/PortfolioPage'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'
import Portfolio from './Portfolio'

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
                <SignUpPage>
                  <SignUp {...props} />
                </SignUpPage>
                )}
              />
              <Route path="/signin"
                component={(props) => (
                  <SignInPage>
                    <SignIn {...props} />
                  </SignInPage>
                )}
              />
              <Route path="/portfolios"
                component={(props) => (
                  <PortfolioPage>
                    <Portfolio {...props} />
                  </PortfolioPage>
                )}
              />
            </Switch>
          )}
      </main>
    )
  }
}

export default Router