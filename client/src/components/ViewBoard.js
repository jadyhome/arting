import React, { Component } from 'react'
import { __GetArtBoard } from '../services/BoardService'
import '../styles/Navbar.css'
import '../styles/ViewBoard.css'

class ViewBoard extends Component {
  constructor() {
    super()
    this.state = {
      board: ''
    }
  }

  componentDidMount() {
    this.getBoard()
  }

  getBoard = async () => {
    try {
      const board = await __GetArtBoard(this.props.match.params.board_id)
      this.setState({ board })
    } catch (error) {
      throw error
    }
  }

  render() {
    const { board } = this.state
    if (this.state.board) {
      return (
        <div className="viewboardpage">
          <div className="viewboard">
            
            <img src={board.image_url}
              className="viewImg"
              alt="artboard" />

            <div className="viewboard-content">
              <h4>{board.title}</h4>
              <h4>by {board.user_id.name}</h4>
              <p>♥ {board.likes}</p>
              <p>👀 {board.views}</p>
              <p>💬 {board.comments.length}</p>
            </div>

            <div className="comments">
              {board.comments.length ? (
                board.comments.map((comment) => (
                  <li className="comment-item" key={comment._id}>
                    <p>
                      <strong>{comment.user_id.name}</strong> : {comment.comment}
                    </p>
                  </li>
                ))
              ) : (
                  <h3>No Comments At The Moment</h3>
                )}
            </div>
            
          </div>
        </div>
      )
    }
    return <h3>Loading...</h3>
  }
}

export default ViewBoard