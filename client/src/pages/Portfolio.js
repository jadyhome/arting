import React, { Component } from 'react'
import Board from '../components/Board'
import Nav from '../components/Nav'
import { __GetArtBoards } from '../services/BoardService'
import '../styles/Navbar.css'
import '../styles/PortfolioPage.css'

class Portfolio extends Component {
  constructor() {
    super()
    this.state = {
      boards: []
    }
  }

  componentDidMount() {
    this.getBoards()
  }

  getBoards = async () => {
    try {
      const boards = await __GetArtBoards()
      this.setState({ boards: [...this.state.boards, ...boards] })
    } catch (error) {
      throw error
    }
  }

  render() {
    const { boards } = this.state
    return (
      <div className="portfoliopage">
        <section className="navbar">
          <Nav />
        </section>

        <div className="portfolio-container">
          <h3 className="works">portfolio works</h3>
          <section className="all-content">
            {boards.length ? (
              boards.map((board) => (
                <div className="boards">
                  <Board onClick={() =>
                    this.props.history.push(`/artboards/${board._id}`)
                  }>
                    <img src={board.image_url} alt="artboards" />
                    <div className="board-title">
                      <h4>{board.title}</h4>
                    </div>
                    <p>♥ {board.likes}</p>
                    <p>👀 {board.views}</p>
                    <p>comments {board.comments.length}</p>
                  </Board>
                </div>
              ))
            ) : (
                <h3>No ArtBoards</h3>
              )}
          </section>
        </div>
      </div>
    )
  }
}

export default Portfolio