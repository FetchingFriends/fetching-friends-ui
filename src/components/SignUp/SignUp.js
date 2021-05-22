import React, { Component } from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'
import { userSignUp } from '../../../src/apiCalls'

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      email: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    userSignUp(this.state)
  }

  render () {
    return (
      <>
        <h2>Sign Up below to Fetch a Friend!</h2>
        <form className='sign-up-form'>
          <input
            className='username-signup input'
            type='text'
            placeholder='Username'
            name='username'
            value={this.state.username}
            onChange={this.handleChange}
          />

          <input
            className='email-signup input'
            type='text'
            placeholder='Email'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
          />

          <button className='signup button' onClick={this.handleSubmit}>Submit</button>
        </form>
      </>
    )
  }
}

export default SignUp
