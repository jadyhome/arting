import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
          <img src={board.image_url} alt="artboard" />

          <div className="viewboard-content">
            <h2>{board.title}</h2>
            <p>♥ {board.likes}</p>
            <p>👀 {board.views}</p>
            <p>comments {board.comments.length}</p>
          </div>

          <div className="comments">
            {board.comments.length ? (
              board.comments.map((comment) => (
                <li className="comment-item" key={comment._id}>
                  <p>
                    <Link>{comment.user_id.name}</Link>
                  </p>
                  <p>{comment.comment}</p>
                </li>
              ))
            ) : (
                <h3>no comments</h3>
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