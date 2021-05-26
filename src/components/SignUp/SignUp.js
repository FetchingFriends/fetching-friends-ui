import React, { Component } from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'
import { userSignUp } from '../../../src/apiCalls'

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      email: '',
      error: '',
      submitted: false
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    try{
      await userSignUp(this.state)
      this.setState({ error: '' })
      this.setState({ submitted: true })
    } catch(error) {
      console.log(error.message)
      this.setState({ error: error.message })
    }
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
          {this.state.error && <h2>{this.state.error}</h2>}
          {this.state.submitted && !this.state.error && <div>
            <h2>You have successfully signed up! Head back to the login page to get started!</h2>
            <Link to='/'>
              <button className='button'>Home</button>
            </Link>
            </div>}
        </form>
      </>
    )
  }
}

export default SignUp
