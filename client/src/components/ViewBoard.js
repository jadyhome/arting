import React, { Component } from 'react'
import { __GetArtBoard } from '../services/BoardService'
import '../styles/Navbar.css'
import '../styles/ViewBoard.css'

class ViewBoard extends Component {
  constructor(props) {
    super(props)
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
      console.log('error', error)
      throw error
    }
  }

  render() {
    const { board } = this.state
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
      </div>
      </div>
    )
  }
}

export default ViewBoard