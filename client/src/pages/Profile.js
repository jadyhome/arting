import React, { Component } from 'react'
import Nav from '../components/Nav'
import Board from '../components/Board'
import Create from '../components/Create'
import { __GetProfile } from '../services/UserService'
import '../styles/Board.css'
import '../styles/ProfilePage.css'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      boardFetchError: false,
      boards: []
    }
  }

  componentDidMount() {
    this.getBoards()
  }

  getBoards = async () => {
    try {
      const profile = await __GetProfile(this.props.currentUser._id)
      this.setState({ boards: profile.boards })
    } catch (error) {
      this.setState({ boardFetchError: true })
    }
  }

  render() {
    return (
      <div className="profilepage">
        <div className="profile">
          <div className="profile-icon">
            a box here
          </div>
          <h3>username</h3>
        </div>
        <section className="navbar">
          <Nav />

        </section>


        <div className="artboards-container">
          <Board />
          <Board />
          <Board />

        </div>
      </div>
    )
  }
}
export default Profile