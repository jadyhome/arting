import React, { Component } from 'react'
import Board from '../components/Board'
import { __GetProfile } from '../services/UserService'
import { __DeleteBoard } from '../services/BoardService'
import '../styles/Navbar.css'
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
    this.getProfile()
  }

  getProfile = async () => {
    try {
      const profile = await __GetProfile(this.props.currentUser._id)
      this.setState({ boards: profile.board })
    } catch (error) {
      this.setState({ boardFetchError: true })
    }
  }

  deleteBoard = async (id) => {
    try {
      const boardsToKeep = this.state.boards.filter((board) => board._id !== id)
      this.setState({ boards: boardsToKeep })
      await __DeleteBoard(id)
    } catch (error) {
      throw error
    }
  }

  render() {
    console.log(this.state.boards.length)
    return (
      <div className="profilepage">
        {this.state.boards.length ? (
          <div className="board-content">
            {this.state.boards.map((board) => (
              <div className="boards"
                key={board._id}>

                <Board onClick={() =>
                  this.props.history.push(`/artboards/${board._id}`)}>
                  <img src={board.image_url} alt="artboards" />
                  <div className="board-title">
                    <h4>{board.title}</h4>
                  </div>
                  <p>♥ {board.likes}</p>
                  <p>👀 {board.views}</p>
                  <p>💬 {board.comments.length}</p>
                </Board>

                <div className="buttons">
                  <button className="update-delete-button"
                    onClick={() => this.props.history.push(`/update/${board._id}`)}>
                    update
                  </button>
                  <button className="update-delete-button"
                    onClick={() => this.deleteBoard(board._id)}>
                    delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
            <div className="none">No ArtBoards At The Moment</div>
          )}
      </div>
    )
  }
}

export default Profile