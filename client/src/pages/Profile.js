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
      console.log(this.props)
      const profile = await __GetProfile(this.props.currentUser._id)
      console.log('profile', profile)
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
      console.log(error)
    }
  }

  render() {
    return (
      <div className="profilepage">
        <div className="artboards">
        
        <div className="boardcontainer">
          {this.state.boards.length ? (
            <div className="board-content">
              {this.state.boards.map((board) => (
                <div key={board._id}>
                  <Board onClick={() =>
                    this.props.history.push(`/artboards/${board._id}`)
                  }>
                    <img src={board.image_url} alt="artboards" />
                    <div className="board-title">
                      <h4>{board.title}</h4>    
                    </div>
                    <p>♥ {board.likes}</p>
                    <p>👀 {board.views}</p>
                    <p>comments {board.comments}</p>
                  </Board>

                  <div className="buttons">
                    <button className="edit-delete-button"
                    onClick={() => this.props.history.push(`/update/${board._id}`)}>
                      edit
                    </button>
                    <button className="edit-delete-button"
                    onClick={() => this.deleteBoard(board._id)}>
                      delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="span message">No ArtBoards</div>
          )}
        </div>

        
      </div>
      </div>
    )
  }
}

export default Profile