import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import { __CreateBoard } from '../services/BoardService'

class CreateBoard extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      image_url: ''
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  handleSubmit = async (error) => {
    error.preventDefault()
    try {
      await __CreateBoard(this.state, this.props.currentUser._id)
      this.props.history.push('/profile')
    } catch (error) {
        throw error
    }
  }

  render() {
    const { title, image_url } = this.state
    return (
      <div className="create">
        <form className="create-form" onSubmit={this.handleSubmit}>
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
          <button>create</button>
        </form>
      </div>
    )
  }
}

export default CreateBoard