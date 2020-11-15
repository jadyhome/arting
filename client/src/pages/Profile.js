import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Board from '../components/Board'
import { __GetProfile } from '../services/UserService'
import { __DeleteBoard } from '../services/BoardService'
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
    // const { name } = this.state
    return (
      <div className="profilepage">
        
        <div className="profile">
          <div className="profile-icon">
            a box here
          </div>
          <h3>
            name
            </h3>
          <div className="create">
            <Link to="/create">create</Link>
          </div>
        </div>
 
        <div className="artboards">
        
        <div className="boardcontainer">
          
          {this.state.boards.length ? (
            <div className="board-content wrapper flex-row">
              {this.state.boards.map((board) => (
                <div key={board._id}>
                  <Board
                    onClick={() =>
                      this.props.history.push(`/artboards/${board._id}`)
                    }
                  >
                      <div className="board-content">
                        <h3>{board.title}</h3>
                        
                      </div>
                    
                    <img src={board.image_url} alt="artboards" />
                  </Board>

                  {/* <div className="flex-row button-wrapper">
                    <button
                      onClick={() =>
                        this.props.history.push(`/edit/${board._id}`)
                      }
                    >
                      Edit
                    </button>
                    <button onClick={() => this.deleteBoard(board._id)}>
                      Delete
                    </button>
                  </div> */}
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