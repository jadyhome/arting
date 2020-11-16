import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import { __GetArtBoard, __UpdateBoard } from '../services/BoardService'
import '../styles/ProfilePage.css'

class Update extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      image_url: ''
    }
  }

  componentDidMount() {
    this.getBoards()
  }

  getBoards = async () => {
    try {
      const board = await __GetArtBoard(this.props.match.params.board_id)
      this.setState({
        title: board.title,
        image_url: board.image_url
      })
    } catch (error) {
      throw error
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await __UpdateBoard(this.state, this.props.match.params.board_id)
      this.props.history.push('/profile')
    } catch (error) {
      throw error
    }
  }

  render() {
    const { title, image_url } = this.state
    return (
      <div className="update">
        <form className="update-form" onSubmit={this.handleSubmit}>
          <TextInput
          name="title"
          placeholder="title"
          value={title}
          onChange={this.handleChange} 
          />
          <TextInput
          name="image_url"
          placeholder="image_url"
          value={image_url}
          onChange={this.handleChange}  
          />
          <button className="update-button">update</button>
        </form>
      </div>
    )
  }
}

export default Update