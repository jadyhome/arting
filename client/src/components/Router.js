import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Home from '../pages/Home'
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
                  <HomePage>
                    <Home />
                  </HomePage>
                )}
              />
              <Route path="/signup"
                component={(props) => (
                <HomePage>
                  <SignUp {...props} />
                </HomePage>
                )}
              />
              <Route path="/signin"
                component={(props) => (
                  <HomePage>
                    <SignIn {...props} />
                  </HomePage>
                )}
              />
              <Route path="/portfolios"
                component={(props) => (
                  <HomePage>
                    <Portfolio {...props} />
                  </HomePage>
                )}
              />
            </Switch>
          )}
      </main>
    )
  }
}

export default Router