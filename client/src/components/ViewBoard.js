import React, { Component } from 'react'
import { __GetArtBoard } from '../services/BoardService'
import '../styles/Navbar.css'

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
      throw error
    }
  }

  render() {
    const { board } = this.state
    return (
      <div>
        <img src={board.image_url} alt="artboard" />

        <div>
          <h2>{board.title}</h2>
          <p>Likes {board.likes}</p>
          <p>Views {board.views}</p>
          <p>Comments {board.comments}</p>
        </div>
      </div>
    )
  }
}


export default ViewBoard