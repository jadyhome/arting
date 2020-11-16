import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import { __CreateBoard } from '../services/BoardService'

class Create extends Component {
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

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log(this.props.currentUser._id)
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
        <h1>upload your work!</h1>
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
          <button className="create-button">create</button>
        </form>
      </div>
    )
  }
}

export default Create